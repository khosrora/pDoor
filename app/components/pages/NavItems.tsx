"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

function NavItems() {
  const locale = useLocale();

  const t = useTranslations("Header");
  const t2 = useTranslations("Footer");

  // Categories
  const [categories, setCategories] = useState<any[]>([]);
  const [catLoading, setCatLoading] = useState(true);

  // Brands
  const [brands, setBrands] = useState<any[]>([]);
  const [brandLoading, setBrandLoading] = useState(true);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/categories/?lang=${locale}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        setCatLoading(false);
      }
    }
    loadCategories();
  }, [locale]);

  // Load brands
  useEffect(() => {
    async function loadBrands() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/brands/`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setBrands(data);
      } catch (err) {
        console.error("Failed to load brands", err);
      } finally {
        setBrandLoading(false);
      }
    }
    loadBrands();
  }, []);

  return (
    <ul className="hidden lg:flex flex-row menu menu-horizontal px-1 gap-x-7">
      {/* About dropdown */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("brandName")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#005E8B] text-[13px]">
            <li>
              <Link href={"/about_us"}>
              <img src="/SVGs/AboutUs1.svg" alt=""/>
              {t2("columns.about.history")}</Link>
            </li>
            <li>
              <Link href={"/contact_us"}>
              <img src="./SVGs/contactUs.svg" alt=""/>
              {t("contact_us")}</Link>
            </li>
            <li>
              <Link href={"/job_position"}>
              <img src="./SVGs/contactUs.svg" alt=""/>
              {t2("columns.about.job")}</Link>
            </li>
            {/* <li>
              <Link href={"/frequently"}>{t2("columns.about.questions")}</Link>
            </li> */}
          </ul>
        </div>
      </li>

      {/* Products → Categories dropdown */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end ">
          <div tabIndex={0} role="button" className="">
            {t("navProducts")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#005E8B] text-[13px]">
            {!catLoading &&
              categories.map((cat) => (
                <li key={cat.slug} className="my-2">
                  <Link
                    href={`/products?lang=${locale}&category=${cat.slug}`}
                    className="flex items-center gap-2"
                  >
                    {cat.logo && (
                      <img
                        src={cat.logo}
                        alt={cat.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    {locale === "fa" ? cat.name : cat.name_en}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>

      {/* Industries */}
      <li>
        <Link href={"/hospital"}>{t("navIndustries")}</Link>
      </li>

      {/* Brands dropdown (new) */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("navBrands")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#005E8B] text-13px]">
            {!brandLoading &&
              brands.map((brand) => (
                <li key={brand.slug} className="my-2">
                  <Link
                    href={`/geze`}
                    className="flex items-center gap-2"
                  >
                    
                    {brand.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>

      {/* Services */}
      <li>
        <Link href={"/installation"}>{t("navServices")}</Link>
      </li>

      {/* Media */}
      <li>
        <Link href={"/media"}>{t("navMedia")}</Link>
      </li>
    </ul>
  );
}

export default NavItems;
