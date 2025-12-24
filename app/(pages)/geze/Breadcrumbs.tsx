import Link from "next/link";
import { getTranslations } from "next-intl/server";

async function Breadcrumbs() {
  const t = await getTranslations("GezePage");

  return (
    <div className="breadcrumbs text-sm mx-10">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p>{t("brand")}</p>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("geze")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
