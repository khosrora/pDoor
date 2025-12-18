"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Bank_Icon from "@/public/SVGs/Bank_Icon.svg";
import Creative_Icon from "@/public/SVGs/Creative_Icon.svg";
import Factory_Icon from "@/public/SVGs/Factory_Icon.svg";
import Hotel_Icon from "@/public/SVGs/Hotel_Icon.svg";
import Office_Icon from "@/public/SVGs/Office_Icon.svg";
import Privacy_Icon from "@/public/SVGs/Privacy_Icon.svg";
import Shoping_Icon from "@/public/SVGs/Shoping_Icon.svg";
import Terminal_Icon from "@/public/SVGs/Terminal_Icon.svg";
import hospital_Icon from "@/public/SVGs/hospital_Icon.svg";
import airport_Icon from "@/public/SVGs/airport_Icon.svg";

type IndustryKey =
  | "bank"
  | "creative"
  | "factory"
  | "hotel"
  | "office"
  | "private"
  | "shopping"
  | "terminal"
  | "hospital"
  | "airport";

const industries: {
  key: IndustryKey;
  icon: React.ComponentType;
  link: string;
}[] = [
  { key: "bank", icon: Bank_Icon, link: "/" },
  { key: "creative", icon: Creative_Icon, link: "/" },
  { key: "factory", icon: Factory_Icon, link: "/" },
  { key: "hotel", icon: Hotel_Icon, link: "/" },
  { key: "office", icon: Office_Icon, link: "/" },
  { key: "private", icon: Privacy_Icon, link: "/" },
  { key: "shopping", icon: Shoping_Icon, link: "/" },
  { key: "terminal", icon: Terminal_Icon, link: "/" },
  { key: "hospital", icon: hospital_Icon, link: "/hospital" },
  { key: "airport", icon: airport_Icon, link: "/" },
];

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

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm text-[#005E8B] text-[13px]">
            <li>
              <Link href={"/about_us"}>
                <img src="/SVGs/AboutUs1.svg" alt="" />
                {t2("columns.about.history")}
              </Link>
            </li>
            <li>
              <Link href={"/contact_us"}>
                <img src="/SVGs/contactUs.svg" alt="" />
                {t("contact_us")}
              </Link>
            </li>
            <li>
              <Link href={"/job_position"}>
                <img src="/SVGs/employee4.svg" alt="" />
                {t2("columns.about.job")}
              </Link>
            </li>
            {/* <li>
              <Link href={"/frequently"}>{t2("columns.about.questions")}</Link>
            </li> */}
          </ul>
        </div>
      </li>

      {/* Products → Categories dropdown */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("navProducts")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm text-[#005E8B] text-[13px]">
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
        {/* <Link href={"/hospital"}>{t("navIndustries")}</Link> */}
        <div className="dropdown dropdown-hover dropdown-end ">
          <div tabIndex={0} role="button" className="">
            {t("navIndustries")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-4 shadow-sm text-[#005E8B] text-[13px]">
            {/* <li>بیمارستان</li> */}

            {industries.map((item) => {
              const Icon: any = item.icon;
              return (
                <li key={item.key}>
                  <Link href={item.link}>
                    <Icon className="text-gray-600 mx-auto " />
                    {/* 
                  <img
                    src="/SVGs/Polygon 33.svg"
                    alt=""
                    sizes="20"
                    className="absolute rotate-180 w-[20px] left-0 top-12 "
                  /> */}

                    {/* متن */}
                    <p className="mt-2 text-sm text-[#0C5273] ">
                      {t(`industries.${item.key}`)}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>

      {/* Brands dropdown (new) */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("navBrands")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm text-[#005E8B] text-13px]">
            {!brandLoading &&
              brands.map((brand) => (
                <li key={brand.slug} className="my-2">
                  <Link href={`/geze`} className="flex items-center gap-2">
                    {brand.name}
                    
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>

      {/* Services */}

      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("navServices")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm text-[#005E8B] text-13px]">
            <li>
              <Link href={"/installation"} className="flex gap-2">
              <img src="/SVGs/Repair1.svg" alt="" />
              <p>{t("install")}</p>
            </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Media */}
        {/* <Link href={"/media"}>{t("navMedia")}</Link> */}
      <li>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="">
            {t("navMedia")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm text-[#005E8B] text-13px] space-y-4">
            <li>
              <Link href={"/media"} className="flex gap-2">
              <img src="/SVGs/Gallery.svg" alt="" />
              <p>{t("gallery")}</p>
            </Link>
            </li>
            <li>
              <Link href={"/media?tab=news"} className="flex gap-2">
              <img src="/SVGs/news.svg" alt="" />
              <p>{t("News")}</p>
            </Link>
            </li>
          </ul>
        </div>
      </li>
    
    </ul>
  );
}

export default NavItems;
