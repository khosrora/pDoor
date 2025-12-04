"use client";
import { useState, useEffect, useRef } from "react";
import { IconMenu3, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import NavItems from "../pages/NavItems";

function Header() {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchWidth, setSearchWidth] = useState(40);
  const [isClosing, setIsClosing] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchOpen) {
      setIsClosing(false);
      // Reset width to 40 first, then animate to 400
      setSearchWidth(40);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSearchWidth(400);
        });
      });
    }
  }, [searchOpen]);

  const handleCloseSearch = () => {
    setIsClosing(true);
    setSearchWidth(40);
    // Wait for animation to complete before closing
    setTimeout(() => {
      setSearchOpen(false);
      setIsClosing(false);
    }, 500); // Match duration-500
  };

  return (
    <div className=" fixed top-0 z-50 bg-white w-full">
      <div className="flex justify-between items-center mb-2 p-2 px-2 max-w-7xl m-auto ">
      <div className="flex justify-start items-center gap-x-2 lg:hidden">
        <div className="drawer">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
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
          </div>
        </div>
        {/* <IconSearch /> */}
      </div>

      <div className="flex justify-start items-center">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={50}
            height={50}
            alt={t("logoAlt")}
            className="lg:w-16 lg:h-16"
          />
        </Link>

        <NavItems />
      </div>
      <div className="hidden lg:flex justify-end items-center">
        {/* <IconSearch className="ml-2" /> */}
        <div className="mx-8 flex lg:flex">
          {!searchOpen && !isClosing ? (
            <button
              type="button"
              className="h-10 w-10 items-center justify-center text-slate-500 transition hover:border-slate-300 hover:text-slate-700 inline-flex"
              aria-label="جستجو"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_28011_15886)">
                  <path
                    d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
                    fill="#0C0C0C"
                  />
                  <path
                    d="M7.14124 6.6412C8.00003 5.78247 9.18855 5.25 10.5 5.25C11.8114 5.25 13 5.78246 13.8587 6.64122C14.1516 6.93411 14.1516 7.40899 13.8587 7.70188C13.5658 7.99477 13.091 7.99477 12.7981 7.70188C12.2091 7.11294 11.3977 6.75 10.5 6.75C9.60235 6.75 8.79087 7.11293 8.20186 7.7019C7.90896 7.99478 7.43408 7.99476 7.1412 7.70186C6.84832 7.40896 6.84833 6.93408 7.14124 6.6412Z"
                    fill="#0C0C0C"
                  />
                  <path
                    d="M16.0806 16.0806C16.3735 15.7877 16.8483 15.7877 17.1412 16.0806L21.3839 20.3232C21.6768 20.6161 21.6768 21.091 21.3839 21.3839C21.091 21.6768 20.6161 21.6768 20.3232 21.3839L16.0806 17.1412C15.7877 16.8483 15.7877 16.3735 16.0806 16.0806Z"
                    fill="#0C0C0C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28011_15886">
                    <rect width="24" height="24" rx="2" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          ) : searchOpen || isClosing ? (
            <div
              ref={searchRef}
              className="flex items-center bg-white rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 overflow-hidden transition-all duration-500 ease-in-out h-10"
              style={{ width: `${searchWidth}px` }}
            >
              <div className="flex items-center gap-2 w-full px-2">
                {/* Search Icon */}
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_28011_15886)">
                      <path
                        d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M7.14124 6.6412C8.00003 5.78247 9.18855 5.25 10.5 5.25C11.8114 5.25 13 5.78246 13.8587 6.64122C14.1516 6.93411 14.1516 7.40899 13.8587 7.70188C13.5658 7.99477 13.091 7.99477 12.7981 7.70188C12.2091 7.11294 11.3977 6.75 10.5 6.75C9.60235 6.75 8.79087 7.11293 8.20186 7.7019C7.90896 7.99478 7.43408 7.99476 7.1412 7.70186C6.84832 7.40896 6.84833 6.93408 7.14124 6.6412Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M16.0806 16.0806C16.3735 15.7877 16.8483 15.7877 17.1412 16.0806L21.3839 20.3232C21.6768 20.6161 21.6768 21.091 21.3839 21.3839C21.091 21.6768 20.6161 21.6768 20.3232 21.3839L16.0806 17.1412C15.7877 16.8483 15.7877 16.3735 16.0806 16.0806Z"
                        fill="#0C0C0C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_28011_15886">
                        <rect width="24" height="24" rx="2" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="جستجو"
                  className="flex-1 text-neutral-700 text-sm font-normal font-iranyekan outline-none placeholder:text-neutral-400 bg-transparent"
                  dir="rtl"
                  autoFocus
                />

                {/* Close Icon */}
                <button
                  type="button"
                  onClick={handleCloseSearch}
                  className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-100 transition-colors"
                  aria-label="بستن"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          ) : null}
        </div>
        <LanguageSwitcher />
      </div>
    </div>
    </div>
  );
}

export default Header;
