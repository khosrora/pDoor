"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

function Breadcrumbs() {
  const t = useTranslations("ProductsListingPage");
  const locale = useLocale();

  return (
    <div className="breadcrumbs text-sm max-w-7xl">
      <ul>
        <li>
          <Link href={`/${locale}`}>{t("home")}</Link>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("products")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
