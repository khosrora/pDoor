"use client";

import { useState, useEffect, useRef } from "react";
import { IconMenu3, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "../pages/NavItems";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function Header() {
  const t = useTranslations("Header");
  const router = useRouter();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchWidth, setSearchWidth] = useState(40);
  const [isClosing, setIsClosing] = useState(false);
  const searchRef = useRef(null);

  const [search, setSearch] = useState("");
  const searchTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (searchOpen) {
      setIsClosing(false);
      setSearchWidth(40);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSearchWidth(400));
      });
    }
  }, [searchOpen]);

  const handleCloseSearch = () => {
    setIsClosing(true);
    setSearchWidth(40);
    setTimeout(() => {
      setSearchOpen(false);
      setIsClosing(false);
      setSearch("");
    }, 500);
  };

  const handleSearchInput = async (value: string) => {
    setSearch(value);

    if (searchTimer.current) clearTimeout(searchTimer.current);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/products?search=${search}`);
      handleCloseSearch();
    }
  };

  return (
    <div className="fixed top-0 z-10 bg-white w-full">
      <div className="flex justify-between items-center mb-2 p-2 px-2 max-w-7xl m-auto">
        {/* Mobile Drawer */}
        <div className="flex justify-start items-center gap-x-2 lg:hidden">
          <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-1"
                className="btn btn-ghost drawer-button"
              >
                <IconMenu3 />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <li>
                  <Link href="/">{t("brandName")}</Link>
                </li>
                <li>
                  <Link href="/products">{t("navProducts")}</Link>
                </li>
                <li>
                  <Link href="/hospital">{t("navIndustries")}</Link>
                </li>
                <li>
                  <Link href="/geze">{t("navBrands")}</Link>
                </li>
                <li>
                  <Link href="/installation">{t("navServices")}</Link>
                </li>
                <li>
                  <Link href="/media">{t("navMedia")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo + Nav Items */}
        <div className="flex justify-start items-center gap-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              alt={t("logoAlt")}
              className="lg:w-[90px] lg:h-[70px]"
            />
          </Link>
          <NavItems />
        </div>

        {/* Desktop Search + Language */}
        <div className="hidden lg:flex justify-end items-center">
          <div className="mx-8 flex lg:flex">
            {!searchOpen && !isClosing ? (
              <button
                type="button"
                className="h-10 w-10 flex items-center justify-center text-slate-500 hover:text-slate-700 transition"
                onClick={() => setSearchOpen(true)}
              >
                <img src="\SVGs\searchIcon.svg" alt="" />
              </button>
            ) : (
              <div
                ref={searchRef}
                className="flex items-center bg-white rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 overflow-hidden transition-all duration-500 ease-in-out h-10"
                style={{ width: `${searchWidth}px` }}
              >
                <div className="flex items-center gap-2 w-full px-2">
                  <img src="\SVGs\searchIcon.svg" alt="" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => handleSearchInput(e.target.value)}
                    onKeyDown={handleEnter}
                    placeholder="جستجو"
                    className="flex-1 text-neutral-700 text-sm font-normal font-iranyekan outline-none placeholder:text-neutral-400 bg-transparent"
                    // dir="rtl"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={handleCloseSearch}
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-100 transition-colors"
                    aria-label="بستن"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 6L18 18M6 18L18 6"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Header;
