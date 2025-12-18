"use client";

import { IconLocationPin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="bg-[#003f5d]">
      <div className="flex justify-end items-center w-full">
        <div className="bg-[#FCCD6E] lg:px-24 p-8 w-full rounded-br-box flex justify-end lg:w-2/4">
          <Image
            src={"/images/logo2.png"}
            width={200}
            height={100}
            alt={"logo"}
            className=""
          />
        </div>
      </div>
      <footer className="footer sm:footer-horizontal p-10 text-white max-w-7xl m-auto">
        {/* Column: About */}
        <nav className="leading-7">
          <h6 className="text-[#FCCD6E] text-[20px]">
            {t("columns.about.title")}
          </h6>
          <Link href={"/about_us"} className="link link-hover text-[16px]">
            {t("columns.about.history")}
          </Link>
          <Link href={"/job_position"} className="link link-hover text-[16px]">
            {t("columns.about.job")}
          </Link>
          <Link href={"/frequently"} className="link link-hover text-[16px]">
            {t("columns.about.questions")}
          </Link>
          {/* <a className="link link-hover text-xs">
            {t("columns.about.mission")}
          </a>
          <a className="link link-hover text-xs">
            {t("columns.about.customers")}
          </a> */}
        </nav>

        {/* Column: Products */}
        <nav className="leading-7">
          <h6 className="text-[#FCCD6E] text-[20px]">
            {t("columns.products.title")}
          </h6>
          <Link href={"/geze"} className="link link-hover text-[16px]">
            {t("columns.products.brandGeze")}
          </Link>
          {/* <a className="link link-hover text-xs">
            {t("columns.products.brandGenrance")}
          </a> */}
          {/* <a className="link link-hover text-xs">
            {t("columns.products.accessories")}
          </a> */}
        </nav>

        {/* Column: Customer Service */}
        <nav className="leading-7">
          <h6 className="text-[#FCCD6E] text-[20px]">
            {t("columns.customerService.title")}
          </h6>
          <Link href={"/installation"} className="link link-hover text-[16px]">
            {t("columns.customerService.afterSales")}
          </Link>
          <Link href={"/installation"} className="link link-hover text-[16px]">
            {t("columns.customerService.maintenance")}
          </Link>
          <Link href={"/installation"} className="link link-hover text-[16px]">
            {t("columns.customerService.consulting")}
          </Link>
        </nav>

        {/* Address */}
        <aside className="leading-7">
          <div className="flex justify-start items-center gap-x-2">
            <img
              src={"/SVGs/Frame 1261157278.svg"}
              className="text-[#FCCD6E] "
            />
            <p className="text-[#FCCD6E] text-[20px]">{t("address.title")}</p>
          </div>
          <p className="text-[16px]">
            {t("address.line1")}
            <br />
            {t("address.line2")}
          </p>
        </aside>

        {/* Contact info */}
        <div className="text-white" dir="ltr">
          <h6 className="text-[#FCCD6E] text-[20px] flex justify-end w-full items-center gap-2">
            {t("contact.title")}
            <img src="/SVGs/call icon.svg" alt="" />
          </h6>
          <div className="container mx-auto px-4 flex  flex-col gap-6">
            {/* HQ */}
            <div className="flex flex-col">
              <div className="flex gap-x-12 text-[16px]">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a
                      href="tel:02188775437"
                      className="hover:text-blue-200 transition"
                    >
                      021-88775437
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:02188773432"
                      className="hover:text-blue-200 transition"
                    >
                      021-88773432
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:02177181018"
                      className="hover:text-blue-200 transition"
                    >
                      021-77181018
                    </a>
                  </li>
                </ul>
                <h2 className="mb-4 ">{t("contact.hqTitle")}</h2>
              </div>
            </div>

            {/* Sales */}
            <div className="flex flex-col text-[16px]">
              <div className="flex gap-x-12">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a
                      href="tel:09022886628"
                      className="hover:text-blue-200 transition"
                    >
                      0902 2886 628
                    </a>
                  </li>
                </ul>
                <h2 className="mb-4">{t("contact.salesTitle")}</h2>
              </div>
            </div>

            {/* Service */}
            <div className="flex flex-col text-[16px]">
              <div className="flex gap-x-12">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a
                      href="tel:09028863667"
                      className="hover:text-blue-200 transition"
                    >
                      090 2886 3667
                    </a>
                  </li>
                </ul>
                <h2 className="mb-4">{t("contact.serviceTitle")}</h2>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="footer footer-horizontal footer-center bg-[#003148] p-10 text-white lg:flex  py-4 lg:justify-around">
        <p>{t("bottom.copyright")}</p>
        <div className="flex gap-6">
          <Link href={"https://wa.me/989028863667"}>
            <img src="/SVGs/Whatsapp.svg" alt="" />
          </Link>
          <Link href={"https://www.instagram.com/persiadoor.geze/"}>
            <img src="/SVGs/Social Icons.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
