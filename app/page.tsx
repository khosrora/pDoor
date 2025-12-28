import { IconChecklist } from "@tabler/icons-react";
import Image from "next/image";
import ServicesSection from "@/app/components/pages/ServicesSection";
import NewsSwipper from "@/app/components/pages/NewsSwipper";
import AccordionCustions from "@/app/components/pages/AccordionCustions";
import BannerSliders from "@/app/components/pages/BannerSliders";
import { getTranslations } from "next-intl/server";

// svg's
import Bank_Icon from "@/app/SVGs/industriesIconBig/BankIcon";
import Creative_Icon from "@/app/SVGs/industriesIconBig/CreativeIcon";
import Factory_Icon from "@/app/SVGs/industriesIconBig/FactoryIcon";
import Hotel_Icon from "@/app/SVGs/industriesIconBig/HotelIcon";
import Office_Icon from "@/app/SVGs/industriesIconBig/GovernanceIcon";
import Privacy_Icon from "@/app/SVGs/industriesIconBig/PrivateIcon";
import Shoping_Icon from "@/app/SVGs/industriesIconBig/ShopIcon";
import Terminal_Icon from "@/app/SVGs/industriesIconBig/TerminalIcon";
import hospital_Icon from "@/app/SVGs/industriesIconBig/HospitalIcon";
import airport_Icon from "@/app/SVGs/industriesIconBig/AirportIcon";
import { Metadata } from "next";
import CategoriesSwiper from "./components/pages/CategoriesSwiper";
import Link from "next/link";
import CustomerList from "./components/ui/CustomerList";

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
  { key: "bank", icon: Bank_Icon, link: "/industries/banks" },
  { key: "creative", icon: Creative_Icon, link: "/" },
  { key: "factory", icon: Factory_Icon, link: "/industries/factory" },
  { key: "hotel", icon: Hotel_Icon, link: "/" },
  { key: "office", icon: Office_Icon, link: "/industries/governmental_center" },
  { key: "private", icon: Privacy_Icon, link: "/industries/private_center" },
  { key: "shopping", icon: Shoping_Icon, link: "/industries/shops" },
  { key: "terminal", icon: Terminal_Icon, link: "/industries/terminals" },
  { key: "hospital", icon: hospital_Icon, link: "/industries//hospital" },
  { key: "airport", icon: airport_Icon, link: "/industries/airports" },
];

export const metadata: Metadata = {
  title: "پرشیادُر | صفحه اصلی",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function Home() {
  const t = await getTranslations("HomePage");

  const expertiseKeys = ["1", "2", "3", "4"];

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
    <main className="mt-12 lg:mt-20">
      <BannerSliders />

      {/* Top banner strip */}
      <div className="bg-[#003148] flex justify-between items-center text-white lg:flex-row-reverse h-[94px] lg:h-[134px] lg:justify-around relative py-4 px-2">
        <div className="flex flex-row">
          <div className="flex flex-col text-right lg:text-left">
            <p className="text-[18px] lg:text-[22px]">{t("banner.primary1")}</p>
            <p className="text-[18px] lg:text-[22px]">{t("banner.primary2")}</p>
          </div>

          <div className="hidden lg:flex border border-zinc-200 mx-4" />
          <div className="flex flex-col text-right">
            <p className="hidden lg:flex text-[22px]">
              {t("banner.secondary1")}
            </p>
            <p className="hidden lg:flex text-[22px]">
              {t("banner.secondary2")}
            </p>
          </div>
        </div>
        <button className="btn btn-outline p-1 lg:px-8 text-[13px]">{t("banner.button")}</button>
        <img src="/path486.svg" className="absolute left-150 -top-10 z-2" />
      </div>

      <CategoriesSwiper />

      {/* Expertise + about clip section */}
      <div className="relative" dir="rtl">
        {/* Right big clip cards (desktop) */}
        <div className="my-clip bg-zinc-200 h-72 h-[293px] lg:h-[558px] w-full absolute left-0 -top-4 lg:-top-2 lg:flex lg:justify-end lg:items-center">
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
                  className={`lg:w-[264px]  relative px-4 py-7 rounded-md ${bgClass} ${textClass}`}
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
        <div className="relative top-0 my-clip-rt bg-[#003F5D] h-[254px] lg:h-[370px] w-[90%] lg:w-[50%] lg:top-20">
          <div className="absolute right-12 top-6 lg:w-[376px] lg:mr-30 lg:mt-15">
            <p className="text-[#FAB21F] text-[19px] lg:text-[33px] lg:font-semibold">
              {t("about.brand")}
            </p>
            <p className="text-white text-xs lg:text-[18px] w-42 lg:text-base lg:w-full">
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
        {expertiseKeys.map((key, index) => {
          const bgClass = index % 3 === 0 ? "bg-white" : "bg-[#003F5D]";
          const textClass = index % 3 === 0 ? "text-zinc-900" : "text-white";

          return (
            <div
              key={key}
              className={`relative p-4 rounded-md border border-[#003F5D] ${bgClass} ${textClass}`}
            >
              <p className="font-bold">{t(`expertise.items.${key}.title`)}</p>

              <p className="text-xs mt-1">
                {t(`expertise.items.${key}.description`)}
              </p>

              <div className="absolute -top-5 left-5 bg-white rounded-xl p-2">
                <IconChecklist className="text-zinc-950" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Customers section */}
      <CustomerList />

      {/* Services section */}
      <div
        className="px-4 py-12"
        style={{ backgroundImage: `url('/images/percia oor service.png')` }}
        dir="rtl"
      >
        <div className="text-center mb-8">
          <p className="text[19px] lg:font-bold lg:text-[33px]">
            {t("services.titlePrefix")}{" "}
            <span className="text-[#FAB21F]">
              {t("services.titleHighlight")}
            </span>
          </p>
        </div>
        <ServicesSection />
      </div>

      {/* Industries section */}
      <div className="p-4 lg:flex lg:flex-row lg:justify-around lg:items-center lg:my-30">
        <div>
          <p className="text-[19px] lg:font-extrabold lg:text-[33px] lg:mb-2">
            {t("industriesIntro.title")}{" "}
            <span className="text-[#FAB21F]">
              {t("industriesIntro.titleHighlight")}
            </span>
          </p>
          <p className="whitespace-pre-line  text-[13px] lg:text-[16px]">
            {t("industriesIntro.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-2 lg:grid-cols-5">
          {industries.map((item) => {
            const Icon: any = item.icon;
            return (
              <div
                key={item.key}
                className="group relative bg-white shadow-zinc-200 shadow-xl rounded-md flex flex-col items-center h-[132px] justify-center transition-all duration-300 lg:px-4"
              >
                <Link href={item.link}>
                  <Icon className="text-black mx-auto transition-all duration-300 group-hover:text-[#005E8B] group-hover:scale-110" />

                  <img
                    src="/SVGs/Polygon 33.svg"
                    alt=""
                    sizes="20"
                    className="absolute rotate-180 w-[18px] left-0 top-12 "
                  />

                  {/* متن */}
                  <p className="font-semibold mt-2 text-sm text-black group-hover:text-[#005E8B] text-center">
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
