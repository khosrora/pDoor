import Link from "next/link";
import { getTranslations } from "next-intl/server";

async function Breadcrumbs() {
    const t = await getTranslations("Breadcrumbs");

  return (
    <div className="breadcrumbs text-sm max-w-7xl mx-auto">
      <ul>
        <li>
          <Link href={"/"}>{t("home")}</Link>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("FAQ")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
