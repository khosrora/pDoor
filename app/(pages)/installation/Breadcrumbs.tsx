import Link from "next/link";
import { getTranslations } from "next-intl/server";

async function Breadcrumbs() {
  const t = await getTranslations("ServicesPage");

  return (
    <div className="breadcrumbs text-sm max-w-7xl mx-auto">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p>{t("services")}</p>
        </li>
        <li>
          <p className="text-[#007EBA]">{t("installationAndMaintenance")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
