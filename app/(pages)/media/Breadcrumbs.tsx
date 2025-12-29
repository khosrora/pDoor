"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const Breadcrumbs = () => {
  const t = useTranslations("Breadcrumbs");
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab"); // news | gallery | null

  const lastLabel =
    tab === "news" ? t("news") : t("gallery");

  return (
    <div className="breadcrumbs text-sm max-w-7xl mx-auto">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p className="text-[#007EBA]">{lastLabel}</p>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
