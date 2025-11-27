"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function News() {
  const t = useTranslations("NewsGrid");

  // For now, 6 identical items – can be replaced with real data later
  const items = [1, 2, 3, 4, 5, 6];

  const slug = t("item.slug"); // locale-aware slug

  return (
    <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i} className="card bg-base-100 border border-zinc-200">
          <figure>
            <img
              src="https://persiadoorco.com/wp-content/uploads/2025/03/%D8%B1%DB%8C%D9%88%D8%A7%D9%84%D9%88%DB%8C%D9%86%DA%AF1-1.jpg"
              alt={t("imageAlt")}
            />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title text-xs">{t("item.title")}</h2>
            <p className="text-[8px]">{t("item.summary")}</p>
            <div className="card-actions justify-between items-center mt-2 text-zinc-500 text-[8px]">
              <Link href={`/media/${slug}`} className="flex items-center gap-1">
                {t("readMore")} <IconArrowLeft size={16} />
              </Link>
              <p>{t("item.date")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
