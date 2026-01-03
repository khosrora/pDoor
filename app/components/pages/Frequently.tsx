"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import api from "@/app/lib/axios";

/* ---------------- Types ---------------- */
type Category = {
  id: number;
  name: string;
  slug: string;
  order: number;
};

type FaqItem = {
  question: string;
  answer: string;
  category: Category;
  order: number;
};

export default function Frequently() {
  const t = useTranslations();
  const locale = useLocale();

  const [categories, setCategories] = useState<Category[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingFaqs, setLoadingFaqs] = useState(true);

  /* ---------------- Fetch Categories ---------------- */
  useEffect(() => {
    setLoadingCategories(true);

    api
      .get<Category[]>(`/v1/faq/categories/?lang=${locale}`)
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setActiveCategory(res.data[0].id);
        }
      })
      .catch(console.error)
      .finally(() => setLoadingCategories(false));
  }, [locale]);

  /* ---------------- Fetch FAQs ---------------- */
  useEffect(() => {
    setLoadingFaqs(true);

    api
      .get<FaqItem[]>(`/v1/faq/?lang=${locale}`)
      .then((res) => setFaqs(res.data))
      .catch(console.error)
      .finally(() => setLoadingFaqs(false));
  }, [locale]);

  /* ---------------- Filter FAQs (Category + Search) ---------------- */
  const filteredFaqs =
    activeCategory === null
      ? []
      : faqs
          .filter((f) => f.category?.id === activeCategory)
          .filter((f) =>
            f.question.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => a.order - b.order);

  const activeCategoryName =
    categories.find((c) => c.id === activeCategory)?.name ?? "";

  return (
    <div className="px-4 mb-20">
      {/* ---------------- Page Title ---------------- */}
      <h1 className="text-center font-bold text-[33px] mb-10">
        {t("Footer.columns.about.questions")}
      </h1>

      {/* ---------------- Tabs ---------------- */}
      {loadingCategories ? (
        <p className="text-center text-xs text-zinc-500">Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-zinc-50 lg:h-[158px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearch(""); // ریست سرچ با تغییر تب
              }}
              className={`py-4 px-6 rounded-md text-[19px] border transition mx-2
                ${
                  activeCategory === cat.id
                    ? "text-[#007EBA] border-[#007EBA] shadow-md shadow-[#007EBA]"
                    : "bg-white text-zinc-700  hover:bg-zinc-100"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* ---------------- Category Title ---------------- */}
      {activeCategory && (
        <h2 className="text-[22px] font-bold text-[#005E8B] mb-4 max-w-7xl mx-auto">
          {activeCategoryName}
        </h2>
      )}

      {/* ---------------- Search Input ---------------- */}
      <div className="max-w-7xl mx-auto mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("askBox.placeholder")}
          className="lg:w-[495px] border border-zinc-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#007EBA]"
        />
      </div>

      {/* ---------------- Questions ---------------- */}
      {loadingFaqs ? (
        <p className="text-center text-xs text-zinc-500 max-w-7xl mx-auto">
          Loading...
        </p>
      ) : filteredFaqs.length === 0 ? (
        <p className="text-center text-xs text-zinc-500  mx-auto">
          سوالی با این عبارت پیدا نشد
        </p>
      ) : (
        <div className="space-y-6 max-w-7xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div
              key={`${faq.order}-${index}`}
              className=" bg-zinc-50 rounded-md p-4 "
            >
              <p className="font-semibold text-sm text-[#005E8B] mb-2">
                {faq.question}
              </p>

              <div
                className="text-xs leading-relaxed text-zinc-700"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
