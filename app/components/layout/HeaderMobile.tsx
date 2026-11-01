"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconChevronRight } from "@tabler/icons-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useLocale } from "next-intl";
import HingedIcon from "@/app/SVGs/HingedIcon";
import SlidingIcon from "@/app/SVGs/SlidingIcon";
import RevolvingIcon from "@/app/SVGs/RevolvingIcon";
import WindowIcon from "@/app/SVGs/WindowIcon";
import PanelIcon from "@/app/SVGs/PanelIcon";
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

type MenuKey =
  | null
  | "products"
  | "industries"
  | "brands"
  | "services"
  | "media";

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

export default function HeaderMobile({ t }: { t: any }) {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const locale = useLocale();

  const closeDropdown = () => {
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <div className="flex justify-start items-center gap-x-2 lg:hidden ">
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

        {/* Button */}
        <div className="drawer-content">
          <label htmlFor="my-drawer-1" className="btn btn-ghost drawer-button">
            <IconMenu2 />
          </label>
        </div>

        {/* Drawer */}
        <div className="drawer-side ">
          <label htmlFor="my-drawer-1" className="drawer-overlay"></label>

          <ul className="menu bg-[#005E8B] text-white text-[16px] min-h-full w-80 p-8 leading-6">
            {/* ===== HEADER (Back Button) ===== */}
            {activeMenu && (
              <li className="mb-4">
                <button
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center gap-2 font-semibold"
                >
                  <IconChevronRight size={20} />
                  {locale === "fa" ? "بازگشت" : "Back"}
                </button>
              </li>
            )}

            {/* ===== MAIN MENU ===== */}
            {!activeMenu && (
              <>
                <li>
                  <Link href="/">{t("brandName")}</Link>
                </li>

                <li>
                  <button onClick={() => setActiveMenu("products")}>
                    {t("navProducts")}
                  </button>
                </li>

                <li>
                  <button onClick={() => setActiveMenu("industries")}>
                    {t("navIndustries")}
                  </button>
                </li>

                <li>
                  <button onClick={() => setActiveMenu("brands")}>
                    {t("navBrands")}
                  </button>
                </li>

                <li>
                  <button onClick={() => setActiveMenu("services")}>
                    {t("navServices")}
                  </button>
                </li>

                <li>
                  <button onClick={() => setActiveMenu("media")}>
                    {t("navMedia")}
                  </button>
                </li>
              </>
            )}

            {/* ===== PRODUCTS SUBMENU ===== */}
            {activeMenu === "products" && (
              <div>
                <ul className="text-white text-[16px]">
                  <li>
                    <Link
                      href={`/products?lang=${locale}&category=swing-door`}
                      onClick={closeDropdown}
                      className="flex items-center gap-2"
                    >
                      <HingedIcon />
                      <p>{t("products.swing")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/products?lang=${locale}&category=sliding-door`}
                      onClick={closeDropdown}
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <SlidingIcon />
                      <p>{t("products.slide")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/products?lang=${locale}&category=revolving-door`}
                      onClick={closeDropdown}
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <RevolvingIcon />
                      <p>{t("products.revolve")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/products?lang=${locale}&category=automatic-window`}
                      onClick={closeDropdown}
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <WindowIcon />
                      <p>{t("products.window")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/products?lang=${locale}&category=accessories`}
                      onClick={closeDropdown}
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <PanelIcon />
                      <p>{t("products.accessory")}</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* ===== INDUSTRIES SUBMENU ===== */}
            {activeMenu === "industries" && (
              <div>
                <div>
                  <ul className=" bg-[#005E8B] text-white text-[16px]">
                    {/* <li>بیمارستان</li> */}

                    <li>
                      <Link
                        href={`/industries/hospital`}
                        onClick={closeDropdown}
                      >
                        <HospitalIcon />

                        {/* متن */}
                        <p>{t("industries.hospital")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/industries/shops`} onClick={closeDropdown}>
                        <ShopIcon />

                        {/* متن */}
                        <p>{t("industries.shopping")}</p>
                      </Link>
                    </li>

                    <li>
                      <Link href={`/`} onClick={closeDropdown}>
                        <HotelIcon />

                        {/* متن */}
                        <p>{t("industries.hotel")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/industries/banks`} onClick={closeDropdown}>
                        <BankIcon />

                        {/* متن */}
                        <p>{t("industries.bank")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/industries/governmental_center`}
                        onClick={closeDropdown}
                      >
                        <CenterIcon />

                        {/* متن */}
                        <p>{t("industries.office")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/industries/private_center`}
                        onClick={closeDropdown}
                      >
                        <PrivateIcon />

                        {/* متن */}
                        <p>{t("industries.private")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/industries/airports`}
                        onClick={closeDropdown}
                      >
                        <AirportIcon />

                        {/* متن */}
                        <p>{t("industries.airport")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/industries/terminals`}
                        onClick={closeDropdown}
                      >
                        <TerminalIcon />

                        {/* متن */}
                        <p>{t("industries.terminal")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/industries/factory`}
                        onClick={closeDropdown}
                      >
                        <FactoryIcon />

                        {/* متن */}
                        <p>{t("industries.factory")}</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`} onClick={closeDropdown}>
                        <ProjectIcon />

                        {/* متن */}
                        <p>{t("industries.creative")}</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* ===== BRANDS SUBMENU ===== */}
            {activeMenu === "brands" && (
              <>
                <li>
                  <Link href="/geze">Geze</Link>
                </li>
                <li>
                  <Link href="/geze">Genrance</Link>
                </li>
              </>
            )}

            {/* ===== SERVICES SUBMENU ===== */}
            {activeMenu === "services" && (
              <>
                <li>
                  <Link href="/installation">
                    {locale === "fa" ? "نصب و راه‌اندازی" : "Installation"}
                  </Link>
                </li>

                <li>
                  <Link href="/maintenance">
                    {locale === "fa" ? "پشتیبانی" : "Support"}
                  </Link>
                </li>
              </>
            )}

            {/* ===== MEDIA SUBMENU ===== */}
            {activeMenu === "media" && (
              <>
                <li>
                  <Link href="/media/news">
                    {locale === "fa" ? "اخبار" : "News"}
                  </Link>
                </li>

                <li>
                  <Link href="/media/gallery">
                    {locale === "fa" ? "گالری" : "Gallery"}
                  </Link>
                </li>
              </>
            )}
            <div className="flex mt-4">
              <LanguageSwitcher />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
