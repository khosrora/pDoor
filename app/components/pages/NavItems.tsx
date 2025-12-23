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
import HingedIcon from "@/app/SVGs/HingedIcon";
import SlidingIcon from "@/app/SVGs/SlidingIcon";
import RevolvingIcon from "@/app/SVGs/RevolvingIcon";
import WindowIcon from "@/app/SVGs/WindowIcon";
import PanelIcon from "@/app/SVGs/PanelIcon";
import AboutusIcon from "@/app/SVGs/AboutusIcon";
import ContactusIcon from "@/app/SVGs/ContactusIcon";
import JobIcon from "@/app/SVGs/JobIcon";
import HospitalIcon from "@/app/SVGs/industriesIcon/HospitalIcon";
import ShopIcon from "@/app/SVGs/industriesIcon/ShopIcon";
import HotelIcon from "@/app/SVGs/industriesIcon/HotelIcon";
import BankIcon from "@/app/SVGs/industriesIcon/BankIcon";
import CenterIcon from "@/app/SVGs/industriesIcon/CenterIcon";
import PrivateIcon from "@/app/SVGs/industriesIcon/PrivateIcon";
import AirportIcon from "@/app/SVGs/industriesIcon/AirportIcon";
import TerminalIcon from "@/app/SVGs/industriesIcon/TerminalIcon";
import FactoryIcon from "@/app/SVGs/industriesIcon/FactoryIcon";
import ProjectIcon from "@/app/SVGs/industriesIcon/ProjectIcon";
import InstallIcon from "@/app/SVGs/InstallIcon";
import GalleryIcon from "@/app/SVGs/media/GalleryIcon";
import NewsIcon from "@/app/SVGs/media/NewsIcon";

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
        <div className="dropdown dropdown-hover dropdown-start">
          <div tabIndex={0} role="button" className="">
            {t("brandName")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 shadow-sm  text-[13px]">
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link
                href={"/about_us"}
                className="flex items-center gap-2 px-3 py-2"
              >
                <AboutusIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <span className=" group-hover:text-white transition-colors text-[#005E8B]">
                  {t2("columns.about.history")}
                </span>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={"/contact_us"}>
                <ContactusIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <span className=" group-hover:text-white transition-colors text-[#005E8B]">
                  {t("contact_us")}
                </span>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={"/job_position"}>
                <JobIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <span className=" group-hover:text-white transition-colors text-[#005E8B]">
                  {t2("columns.about.job")}
                </span>
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
        <div className="dropdown dropdown-hover dropdown-start">
          <div tabIndex={0} role="button" className="">
            {t("navProducts")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-44  shadow-sm text-[#005E8B] text-[13px]">
            <li className="group hover:bg-[#005E8B]">
              <Link
                href={`/products?lang=${locale}&category=swing-door`}
                className="flex items-center gap-2"
              >
                <HingedIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("products.swing")}
                </p>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link
                href={`/products?lang=${locale}&category=sliding-door`}
                className="flex items-center gap-2 px-3 py-2"
              >
                <SlidingIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("products.slide")}
                </p>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link
                href={`/products?lang=${locale}&category=revolving-door`}
                className="flex items-center gap-2 px-3 py-2"
              >
                <RevolvingIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("products.revolve")}
                </p>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link
                href={`/products?lang=${locale}&category=automatic-window`}
                className="flex items-center gap-2 px-3 py-2"
              >
                <WindowIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("products.window")}
                </p>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link
                href={`/products?lang=${locale}&category=accessories`}
                className="flex items-center gap-2 px-3 py-2"
              >
                <PanelIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("products.accessory")}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Industries */}
      <li>
        {/* <Link href={"/hospital"}>{t("navIndustries")}</Link> */}
        <div className="dropdown dropdown-hover dropdown-start ">
          <div tabIndex={0} role="button" className="">
            {t("navIndustries")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40  shadow-sm text-[#005E8B] text-[13px]">
            {/* <li>بیمارستان</li> */}

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/hospital`}>
                <HospitalIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                 {t("industries.hospital")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <ShopIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                 {t("industries.shopping")}
                </p>
              </Link>
            </li>

            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <HotelIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                   {t("industries.hotel")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <BankIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("industries.bank")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <CenterIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                {t("industries.office")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <PrivateIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                 {t("industries.private")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <AirportIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                   {t("industries.airport")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <TerminalIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("industries.terminal")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <FactoryIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("industries.factory")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={`/`}>
                <ProjectIcon className="text-[#005E8B] group-hover:text-white transition-colors" />

                {/* متن */}
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                 {t("industries.creative")}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Brands dropdown (new) */}
      <li>
        <div className="dropdown dropdown-hover dropdown-start">
          <div tabIndex={0} role="button" className="">
            {t("navBrands")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 shadow-sm text-[#005E8B] text-13px]">
            <li className=" hover:text-white hover:bg-[#005E8B]">
              <Link href={`/geze`} className="flex items-center gap-2">
                برند Geze
              </Link>
            </li>
            <li className=" hover:text-white hover:bg-[#005E8B]">
              <Link href={`/geze`} className="flex items-center gap-2">
                برند Genrance
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Services */}

      <li>
        <div className="dropdown dropdown-hover dropdown-start">
          <div tabIndex={0} role="button" className="">
            {t("navServices")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 shadow-sm text-[#005E8B] text-13px]">
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={"/installation"} className="flex gap-2">
                <InstallIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("install")}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Media */}
      {/* <Link href={"/media"}>{t("navMedia")}</Link> */}
      <li>
        <div className="dropdown dropdown-hover dropdown-start">
          <div tabIndex={0} role="button" className="">
            {t("navMedia")}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 shadow-sm text-[#005E8B] text-13px] space-y-4">
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={"/media"} className="flex gap-2">
                <GalleryIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("gallery")}
                </p>
              </Link>
            </li>
            <li className="group hover:bg-[#005E8B] transition-colors">
              <Link href={"/media?tab=news"} className="flex gap-2">
                <NewsIcon className="text-[#005E8B] group-hover:text-white transition-colors" />
                <p className="text-[#005E8B] group-hover:text-white transition-colors">
                  {t("News")}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default NavItems;
