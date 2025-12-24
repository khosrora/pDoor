"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Breadcrumbs = () => {
  const t = useTranslations("Breadcrumbs");

  return (
    <div className="breadcrumbs text-sm mx-10">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("gallery_news")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
