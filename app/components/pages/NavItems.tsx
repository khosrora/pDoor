import { useTranslations } from "next-intl";
import Link from "next/link";

function NavItems() {
  const t = useTranslations("Header");
  return (
    <ul className="hidden lg:flex flex-row menu menu-horizontal px-1 gap-x-7">
      <li>
        <Link href={"/"}>{t("brandName")}</Link>
      </li>
      <li>
        <Link href={"/products"}>{t("navProducts")}</Link>
      </li>
      <li>
        <Link href={"/hospital"}>{t("navIndustries")}</Link>
      </li>
      <li>
        <Link href={"/geze"}>{t("navBrands")}</Link>
      </li>
      <li>
        <Link href={"/installation"}>{t("navServices")}</Link>
      </li>
      <li>
        <Link href={"/media"}>{t("navMedia")}</Link>
      </li>
    </ul>
  );
}

export default NavItems;
