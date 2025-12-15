import Link from "next/link";
import { getTranslations } from "next-intl/server";

async function Breadcrumbs() {
  const t = await getTranslations("ServicesPage");

  return (
    <div className="breadcrumbs text-sm mx-10">
      <ul>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <p>{t("services")}</p>
        </li>
        <li>
          <p>{t("installationAndMaintenance")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
