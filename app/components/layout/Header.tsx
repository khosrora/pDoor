"use client";

import { IconMenu3, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");

  return (
    <div className="flex justify-between items-center mb-2 p-2 px-2">
      <div className="flex justify-start items-center gap-x-2 lg:hidden">
        <IconMenu3 />
        <IconSearch />
      </div>

      <Image
        src={"/images/logo.png"}
        width={50}
        height={50}
        alt={t("logoAlt")}
        className="lg:w-16 lg:h-16"
      />

      <ul className="hidden lg:flex flex-row menu menu-horizontal px-1">
        <li>
          <Link href={"/"}>{t("brandName")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("navProducts")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("navIndustries")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("navBrands")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("navServices")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("navMedia")}</Link>
        </li>
      </ul>

      <div className="hidden lg:flex justify-end items-center">
        <IconSearch className="ml-2" />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Header;
