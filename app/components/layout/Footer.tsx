"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Footer");

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#003f5d]">
      {/* Top Logo Section */}
      <div className="flex justify-end items-center w-full">
        <div className="bg-[#FCCD6E] lg:px-24 p-8 w-full rounded-br-box flex justify-end lg:w-2/4">
          <Image
            src={"/images/logo2.png"}
            width={200}
            height={100}
            alt={"logo"}
          />
        </div>
      </div>

      <footer className="p-6 lg:p-10 text-white max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* About */}
        <div>
          <button
            onClick={() => toggleSection("about")}
            className="w-full flex justify-between items-center text-[#FCCD6E] text-[16px] lg:text-[18px] lg:cursor-default"
          >
            {t("columns.about.title")}
            <IconChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "about" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`mt-3 flex flex-col gap-2 text-[12px] lg:text-[16px]
            ${
              openSection === "about"
                ? "block"
                : "hidden"
            } lg:flex`}
          >
            <Link href="/about_us">{t("columns.about.history")}</Link>
            <Link href="/job_position">{t("columns.about.job")}</Link>
            <Link href="/frequently">{t("columns.about.questions")}</Link>
          </div>
        </div>
        {/* Products */}
        <div>
          <button
            onClick={() => toggleSection("products")}
            className="w-full flex justify-between items-center text-[#FCCD6E] text-[16px] lg:text-[18px]"
          >
            {t("columns.products.title")}
            <IconChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "products" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`mt-3 flex flex-col gap-2 text-[12px] lg:text-[16px]
            ${
              openSection === "products"
                ? "block"
                : "hidden"
            } lg:flex`}
          >
            <Link href="/geze">
              {t("columns.products.brandGeze")}
            </Link>
          </div>
        </div>
        {/* Customer Service */}
        <div>
          <button
            onClick={() => toggleSection("service")}
            className="w-full flex justify-between items-center text-[#FCCD6E] text-[16px] lg:text-[18px]"
          >
            {t("columns.customerService.title")}
            <IconChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "service" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`mt-3 flex flex-col gap-2 text-[12px] lg:text-[16px]
            ${
              openSection === "service"
                ? "block"
                : "hidden"
            } lg:flex`}
          >
            <Link href="/installation">
              {t("columns.customerService.afterSales")}
            </Link>
            <Link href="/installation">
              {t("columns.customerService.maintenance")}
            </Link>
            <Link href="/installation">
              {t("columns.customerService.consulting")}
            </Link>
          </div>
        </div>

        {/* Address */}
        <div>
          <h6 className="text-[#FCCD6E] text-[16px] lg:text-[18px] mb-3">
            {t("address.title")}
          </h6>
          <p className="text-[12px] lg:text-[16px]">
            {t("address.line1")}
            <br />
            {t("address.line2")}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h6 className="text-[#FCCD6E] text-[16px] lg:text-[18px] mb-3">
            {t("contact.title")}
          </h6>
          <div className="flex flex-col gap-2 text-[12px] lg:text-[16px]" dir="ltr">
            <a href="tel:02188775437">021-22591142</a>
            <a href="tel:02188773432">021-22544307</a>
            
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#003148] py-4 text-white flex flex-col lg:flex-row items-center justify-between max-w-7xl m-auto px-6">
        <p className="text-[12px] lg:text-[16px]">{t("bottom.copyright")}</p>
        <div className="flex gap-6 mt-3 lg:mt-0">
          <Link href="https://wa.me/989028863667">
            <img src="/SVGs/Whatsapp.svg" alt="" />
          </Link>
          <Link href="https://www.instagram.com/persiadoor.geze/">
            <img src="/SVGs/Social Icons.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;