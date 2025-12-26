import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react";




async function Breadcrumbs() {
  const t = await getTranslations("ShoppingPage"); // نام namespace ترجمه

  return (
    <div className="breadcrumbs text-sm  mx-1 lg:mx-10">
      <ul className="flex gap-2">
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p>{t("industries")}</p>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("shops")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
