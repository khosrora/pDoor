import { getTranslations } from "next-intl/server";
import Link from "next/link";

async function Breadcrumbs() {
  const t1 = await getTranslations("HomePage");

  return (
    <div className="breadcrumbs text-sm mx-10">
      <ul>
        <li>
          <Link href="/">{t1("home")}</Link>
        </li>
        <li>
          <p>{t1("brandName")}</p>
        </li>
        <li>
          <p className="text-[#007EBA]">{t1("aboutUs")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
