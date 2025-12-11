import { IconChecklist } from "@tabler/icons-react";
import Image from "next/image";
import ServicesSection from "@/app/components/pages/ServicesSection";
import NewsSwipper from "@/app/components/pages/NewsSwipper";
import AccordionCustions from "@/app/components/pages/AccordionCustions";
import BannerSliders from "@/app/components/pages/BannerSliders";
import { getTranslations } from "next-intl/server";

// svg's
import Bank_Icon from "@/public/icons/Bank_Icon.svg";
import Creative_Icon from "@/public/icons/Creative_Icon.svg";
import Factory_Icon from "@/public/icons/Factory_Icon.svg";
import Hotel_Icon from "@/public/icons/Hotel_Icon.svg";
import Office_Icon from "@/public/icons/Office_Icon.svg";
import Privacy_Icon from "@/public/icons/Privacy_Icon.svg";
import Shoping_Icon from "@/public/icons/Shoping_Icon.svg";
import Terminal_Icon from "@/public/icons/Terminal_Icon.svg";
import hospital_Icon from "@/public/icons/hospital_Icon.svg";
import airport_Icon from "@/public/icons/airport_Icon.svg";
import { Metadata } from "next";
import CategoriesSwiper from "./components/pages/CategoriesSwiper";
import Link from "next/link";

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

const industries: { key: IndustryKey; icon: React.ComponentType }[] = [
  { key: "bank", icon: Bank_Icon },
  { key: "creative", icon: Creative_Icon },
  { key: "factory", icon: Factory_Icon },
  { key: "hotel", icon: Hotel_Icon },
  { key: "office", icon: Office_Icon },
  { key: "private", icon: Privacy_Icon },
  { key: "shopping", icon: Shoping_Icon },
  { key: "terminal", icon: Terminal_Icon },
  { key: "hospital", icon: hospital_Icon },
  { key: "airport", icon: airport_Icon },
];

export const metadata: Metadata = {
  title: "پرشیادُر | صفحه اصلی",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function Home() {
  const t = await getTranslations("HomePage");

  const expertiseCards = [
    {
      title: t("expertise.items.1.title"),
      description: t("expertise.items.1.description"),
      icon: "/SVGs/headset.svg",
    },
    {
      title: t("expertise.items.2.title"),
      description: t("expertise.items.2.description"),
      icon: "/SVGs/certificate1.svg",
    },
    {
      title: t("expertise.items.3.title"),
      description: t("expertise.items.3.description"),
      icon: "/SVGs/protect.svg",
    },
    {
      title: t("expertise.items.4.title"),
      description: t("expertise.items.4.description"),
      icon: "/SVGs/bookmark.svg",
    },
  ];

  return (
    <main className="mt-20">
      <BannerSliders />

      {/* Top banner strip */}
      <div className="bg-[#003148] flex justify-between items-center p-4 text-white lg:flex-row-reverse lg:h-[134px] lg:justify-around">
        <div className="flex flex-row">
          <div className="flex flex-col text-left">
            <p>{t("banner.primary1")}</p>
            <p>{t("banner.primary2")}</p>
          </div>

          <div className="hidden lg:flex border border-zinc-200 mx-4" />
          <div className="flex flex-col text-right">
            <p className="hidden lg:flex">{t("banner.secondary1")}</p>
            <p className="hidden lg:flex">{t("banner.secondary2")}</p>
          </div>
        </div>
        <button className="btn btn-outline px-8">{t("banner.button")}</button>
      </div>

      <CategoriesSwiper />

      {/* Expertise + about clip section */}
      <div className="relative">
        {/* Right big clip cards (desktop) */}
        <div className="my-clip bg-zinc-200 h-40 lg:h-[558px] w-full absolute left-0 -top-2 lg:flex lg:justify-end lg:items-center">
          <div className="hidden lg:grid grid-cols-2 gap-45 gap-y-8 p-4 max-w-md lg:ml-80">
            {expertiseCards.map((item, index) => {
              const bgClass =
                index % 3 === 0
                  ? "bg-transparent border border-[#007EBA]"
                  : "bg-[#003F5D]";
              const textClass =
                index % 3 === 0 ? "text-zinc-900" : "text-white";

              return (
                <div
                  key={index}
                  className={`lg:w-[264px] lg:h-[166px] relative px-4 py-7 rounded-md ${bgClass} ${textClass}`}
                >
                  <p className="font-medium text-[20px]">{item.title}</p>

                  <p className="text-[13px] font-regular">{item.description}</p>

                  <div className="absolute -top-5 left-5 bg-zinc-200 rounded-xl p-2">
                    <img src={item.icon} alt={item.title} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Left blue clip */}
        <div className="relative top-22  my-clip-rt bg-[#003F5D] h-[320px] lg:h-[370px] w-[90%] lg:w-[50%] space-y-1 lg:flex  lg:justify-start lg:pr-30 lg:items-center lg:mt-10">
          <div className="flex flex-col space-y-2 lg:w-[376px] ">
            <p className="text-[#FAB21F] text-[33px] font-semibold">
              {t("about.brand")}
            </p>
            <p className="text-white text-xs w-52 lg:text-base w-full">
              {t("about.text")}
            </p>
            <div className="flex justify-start items-center gap-x-2 text-white mt-8">
             <Link href={`/about_us`}>
              <button className="btn btn-xs btn-outline p-4">
                {t("about.buttons.learnMore")}
              </button>
             </Link>
              <button className="btn btn-xs p-4">
                {t("about.buttons.call")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise cards on mobile */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 p-4 mt-20 lg:hidden">
        {expertiseCards.map((_, index) => {
          const bgClass = index % 3 === 0 ? "bg-white" : "bg-[#003F5D]";
          const textClass = index % 3 === 0 ? "text-zinc-900" : "text-white";

          return (
            <div
              key={index}
              className={`relative p-4 rounded-xl ${bgClass} ${textClass}`}
            >
              <p className="font-bold">{t("expertise.title")}</p>

              <p className="text-xs">{t("expertise.description")}</p>

              <div className="absolute -top-5 left-5 bg-white rounded-xl p-2">
                <IconChecklist className="text-zinc-950" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Customers section */}
      <div className="flex flex-col items-center mt-40 lg:flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col items-start lg:text-[33px] ">
          <p className="text-[#FAB21F] font-bold">
            {t("customers.titleHighlight")}
          </p>
          <p className="font-bold">{t("customers.titleRest")}</p>
        </div>
        <Image
          src="/images/Customers_mobile (2).png"
          width={1000}
          height={1000}
          alt={t("customers.alt")}
          className="mt-8 lg:hidden"
        />
        <Image
          src="/images/Customers (2).png"
          width={1000}
          height={1000}
          alt={t("customers.alt")}
          className="hidden mt-8 lg:flex"
        />
      </div>

      {/* Services section */}
      <div className=" px-4 py-8"
      style={{ backgroundImage: `url('/images/percia oor service.png')` }}
      >
        <div className="text-center mb-8">
          <p className="lg:font-bold lg:text-[33px] mt-8">
            {t("services.titlePrefix")}{" "}
            <span className="text-[#FAB21F]">
              {t("services.titleHighlight")}
            </span>
          </p>
        </div>
        <ServicesSection />
      </div>

      {/* Industries section */}
      <div className="p-4 lg:flex lg:flex-row lg:justify-around lg:items-center lg:my-16">
        <div>
          <p className="font-extrabold text-[33px] lg:mb-2">
            {t("industriesIntro.title")}{" "}
            <span className="text-[#FAB21F]">
              {t("industriesIntro.titleHighlight")}
            </span>
          </p>
          <p className="whitespace-pre-line font-light text-[16px]">
            {t("industriesIntro.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-5 py-15">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group relative bg-white shadow-zinc-200 shadow-xl rounded-md flex flex-col items-center w-[124px] h-[132px] justify-center transition-all duration-300"
              >
                <Link href={`/`}>
                  {/* آیکن */}
                  <Icon className="text-gray-600 mx-auto transition-all duration-300 group-hover:text-[#0C5273] group-hover:scale-110" />

                  {/* مثلث کناری */}
                  <img
                    src="/SVGs/Polygon 33.svg"
                    alt=""
                    sizes="20"
                    className="absolute rotate-180 w-[20px] left-0 top-12 "
                  />

                  {/* متن */}
                  <p className="font-semibold mt-2 text-sm text-gray-700 group-hover:text-[#0C5273] text-center">
                    {t(`industries.${item.key}`)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <NewsSwipper />
      <AccordionCustions />
    </main>
  );
}
