"use client";

import { useCompare } from "@/app/context/CompareContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconX, IconPlus } from "@tabler/icons-react";
import { useLocale } from "next-intl";

const MAX_COLUMNS = 3;
const TEXTS = {
  fa: {
    emptyTitle: "محصولی برای مقایسه وجود ندارد",
    emptyDescription: "برای مقایسه، محصولات را از لیست محصولات اضافه کنید.",
    showDiff: " تفاوت‌ها را نشان بده",
    showAll: "نمایش همه",
    addProduct: "افزودن محصول",
    remove: "حذف",
  },
  en: {
    emptyTitle: "No products to compare",
    emptyDescription: "Add products to compare from the product listing page.",
    showDiff: "Show differences only",
    showAll: "Show all",
    addProduct: "Add product",
    remove: "Remove",
  },
};

export default function ComparePage() {
  const { items, removeItem } = useCompare();
  const router = useRouter();
  const [showDiff, setShowDiff] = useState(false); // state نمایش فقط تفاوت‌ها
    const locale = useLocale(); // "fa" | "en"
  const t = TEXTS[locale as "fa" | "en"] ?? TEXTS.en;

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-semibold">{t.emptyTitle}</h2>
        <p className="mt-2 text-gray-500">
          {t.emptyDescription}
        </p>
      </div>
    );
  }

  const visibleItems = items.slice(0, MAX_COLUMNS);
  const emptyColumns = MAX_COLUMNS - visibleItems.length;

  const specLabelMap = new Map<string, string>();
  visibleItems.forEach((p) => {
    p.specs.forEach((s) => {
      if (s.field_name && s.field_name_en && !specLabelMap.has(s.field_name)) {
        specLabelMap.set(s.field_name, s.field_name_en);
      }
    });
  });

  // همه مشخصه‌ها
  const allSpecs = Array.from(
    new Set(visibleItems.flatMap((p) => p.specs.map((s) => s.field_name)))
  );

  const goBack = () => {
    router.back();
  };

  // فیلتر ردیف‌ها برای نمایش تفاوت‌ها
  const filteredSpecs = showDiff
    ? allSpecs.filter((spec) => {
        const values = visibleItems.map(
          (p) => p.specs.find((s) => s.field_name === spec)?.value || "-"
        );
        return new Set(values).size > 1; // فقط ردیف‌هایی که حداقل دو مقدار متفاوت دارند
      })
    : allSpecs;

  return (
    <div className="p-4 mt-24 max-w-7xl mx-auto">
      <div className="overflow-x-auto rounded-lg">
        {/* دکمه نمایش تفاوت‌ها */}
      <div className="mt-4 text-right">
        <button
          onClick={() => setShowDiff(!showDiff)}
          className="px-4 py-2 rounded-md text-[#005E8B] font-semibold transition inline-flex items-center gap-2 border border-[#005E8B]"
        >
          <span
            className={`w-4 h-4 rounded-full border-2 inline-flex items-center justify-center ${
              showDiff ? "border-[#005E8B] " : "border-[#005E8B]"
            }`}
            aria-hidden="true"
          >
            {showDiff ? (
              <span className="w-2 h-2 rounded-full bg-[#005E8B]" />
            ) : null}
          </span>
          {showDiff ? t.showDiff : t.showDiff}
        </button>
      </div>
        <table className="table w-full border-separate border-spacing-0">
          <thead>
            {/* ROW 1 – IMAGES */}
            <tr>
              <th className="w-48 bg-white border border-white"></th>

              {visibleItems.map((p) => (
                <th
                  key={p.slug}
                  className="relative text-center bg-white border border-white"
                >
                  <div className="relative inline-block">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={150}
                      height={150}
                      className="mx-auto object-contain"
                    />

                    <button
                      onClick={() => removeItem(p.slug)}
                      className="absolute -top-2 -right-2 bg-[#003f5d] text-white rounded-full p-1 shadow"
                    >
                      <IconX size={12} />
                    </button>
                  </div>
                </th>
              ))}

              {/* EMPTY IMAGE COLUMNS */}
              {Array.from({ length: emptyColumns }).map((_, i) => (
                <th
                  key={`empty-img-${i}`}
                  className="bg-white border border-white text-center"
                >
                  <button
                    onClick={goBack}
                    className="flex flex-col items-center justify-center gap-2 h-[150px] w-full text-[#003148] hover:text-[#003f5d]"
                  >
                    <IconPlus size={32} />
                    <span className="text-sm font-medium">{t.addProduct}</span>
                  </button>
                </th>
              ))}
            </tr>

            {/* ROW 2 – PRODUCT NAMES */}
            <tr className="bg-[#fdd756]">
              <th className="w-48 border border-white"></th>

              {visibleItems.map((p) => (
                <th
                  key={p.slug}
                  className="text-center border border-white font-semibold text-[#003148]"
                >
                  {p.name}
                </th>
              ))}

              {Array.from({ length: emptyColumns }).map((_, i) => (
                <th key={`empty-name-${i}`} className="border border-white"></th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredSpecs.map((spec) => (
              <tr key={spec}>
                <td className="font-medium bg-blue-100 border border-white text-[#003148]">
                  {locale === "en" ? specLabelMap.get(spec) || spec : spec}
                </td>

                {visibleItems.map((p) => {
                  const value =
                    p.specs.find((s) => s.field_name === spec)?.value || "-";
                  return (
                    <td
                      key={p.slug + spec}
                      className="text-center bg-zinc-100 border border-white"
                    >
                      {value}
                    </td>
                  );
                })}

                {Array.from({ length: emptyColumns }).map((_, i) => (
                  <td
                    key={`empty-spec-${spec}-${i}`}
                    className="bg-zinc-100 border border-white"
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}
