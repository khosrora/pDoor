"use client";

import { useCompare } from "@/app/context/CompareContext";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function CompareAlert() {
  const { items, clearAll, removeItem } = useCompare();
  const t = useTranslations("compareAlert");

  if (items.length === 0) return null;

  return (
    <div
      className="
        fixed bottom-4 right-1/2 translate-x-1/2
        w-[95%] max-w-4xl z-50
        bg-[#003148] border border-blue-200
        rounded-md shadow-lg p-4
        flex flex-col lg:flex-row gap-4
      "
    >
      {/* PRODUCTS */}
      <div
        className="
          flex flex-col gap-3
          lg:grid lg:grid-cols-3 lg:gap-6
          w-full
          order-1 lg:order-none
        "
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="
              flex items-center justify-end lg:justify-between
              
              text-white
             
              px-4 py-3
              w-full
              lg:border-l-1
            "
          >
            <span className="font-semibold text-sm truncate">{item.name}</span>

            <button
              onClick={() => removeItem(item.slug)}
              className="ml-4 text-white p-1 rounded-full hover:bg-white/20 transition"
              aria-label={t("remove")}
            >
              <IconX size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS (beside each other) */}
      <div
        className="
          flex flex-col gap-3
          
          order-2 lg:order-none
        "
      >
        <Link
          href="/compare"
          className="
            flex lg:flex-none
            btn bg-yellow-400 text-[#003148]
            hover:bg-yellow-300 transition lg:px-6
          "
        >
          {t("compare")} {items.length}/3
        </Link>

        <button
          onClick={clearAll}
          className="
            flex lg:flex-none
            btn bg-white text-[#003148] 
            hover:bg-gray-100 transition
          "
        >
          {t("clearAll")}
        </button>
      </div>
    </div>
  );
}
