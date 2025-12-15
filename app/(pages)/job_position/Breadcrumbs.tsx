import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react";

async function Breadcrumbs() {
  const t = await getTranslations("CareersPage");

  return (
    <div className="breadcrumbs text-sm mx-10">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p>{t("brandName")}</p>
        </li>
        <li>
          <p>{t("careers")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
