import {IconChecklist} from "@tabler/icons-react";
import Image from "next/image";
import ProductsSwipper from "@/app/components/pages/ProductsSwipper";
import ServicesSection from "@/app/components/pages/ServicesSection";
import NewsSwipper from "@/app/components/pages/NewsSwipper";
import AccordionCustions from "@/app/components/pages/AccordionCustions";
import BannerSliders from "@/app/components/pages/BannerSliders";
import {getTranslations} from "next-intl/server";

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

const industries: {key: IndustryKey; icon: React.ComponentType}[] = [
  {key: "bank", icon: Bank_Icon},
  {key: "creative", icon: Creative_Icon},
  {key: "factory", icon: Factory_Icon},
  {key: "hotel", icon: Hotel_Icon},
  {key: "office", icon: Office_Icon},
  {key: "private", icon: Privacy_Icon},
  {key: "shopping", icon: Shoping_Icon},
  {key: "terminal", icon: Terminal_Icon},
  {key: "hospital", icon: hospital_Icon},
  {key: "airport", icon: airport_Icon},
];

export default async function Home() {
  const t = await getTranslations("HomePage");

  const expertiseCards = [1, 2, 3, 4];

  return (
    <main>
      <BannerSliders
        images={[
          "/images/baner1.jpg",
          "/images/baner3.5.1404-06-scaled.jpg",
          "/images/baner3.5.1404-08-scaled.jpg",
          "/images/baner3.5.1404-09-scaled.jpg",
          "/images/baner3.5.1404-13-scaled.jpg",
        ]}
      />

      {/* Top banner strip */}
      <div className="bg-[#003148] flex justify-between items-center p-4 text-white lg:flex-row-reverse lg:justify-around">
        <div className="flex flex-row">
          <p>{t("banner.primary")}</p>
          <div className="hidden lg:flex border border-zinc-200 mx-4" />
          <p className="hidden lg:flex">{t("banner.secondary")}</p>
        </div>
        <button className="btn btn-outline">
          {t("banner.button")}
        </button>
      </div>

      <ProductsSwipper />

      {/* Expertise + about clip section */}
      <div className="relative">
        {/* Right big clip cards (desktop) */}
        <div className="my-clip bg-zinc-200 h-40 lg:h-96 w-[60%] lg:w-[90%] absolute left-0 -top-2 lg:flex lg:justify-end lg:items-center">
          <div className="hidden lg:grid grid-cols-2 gap-2 gap-y-6 p-4 max-w-md lg:ml-32">
            {expertiseCards.map((_, index) => {
              const bgClass = index % 3 === 0 ? "bg-white" : "bg-[#003F5D]";
              const textClass =
                index % 3 === 0 ? "text-zinc-900" : "text-white";

              return (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl ${bgClass} ${textClass}`}
                >
                  <p className="font-bold">{t("expertise.title")}</p>

                  <p className="text-xs">
                    {t("expertise.description")}
                  </p>

                  <div className="absolute -top-5 left-5 bg-white rounded-xl p-2">
                    <IconChecklist className="text-zinc-950" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Left blue clip */}
        <div className="my-clip-rt bg-[#003F5D] h-36 lg:h-80 w-[90%] lg:w-[40%] p-2 space-y-1 lg:flex lg:justify-center lg:items-center">
          <div className="flex flex-col space-y-2 mr-4 lg:mr-0">
            <p className="text-[#FAB21F]">
              {t("about.brand")}
            </p>
            <p className="text-white text-xs w-52">
              {t("about.text")}
            </p>
            <div className="flex justify-start items-center gap-x-2 text-white">
              <button className="btn btn-xs btn-outline">
                {t("about.buttons.learnMore")}
              </button>
              <button className="btn btn-xs">
                {t("about.buttons.call")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise cards on mobile */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 p-4 mt-8 lg:hidden">
        {expertiseCards.map((_, index) => {
          const bgClass = index % 3 === 0 ? "bg-white" : "bg-[#003F5D]";
          const textClass = index % 3 === 0 ? "text-zinc-900" : "text-white";

          return (
            <div
              key={index}
              className={`relative p-4 rounded-xl ${bgClass} ${textClass}`}
            >
              <p className="font-bold">{t("expertise.title")}</p>

              <p className="text-xs">
                {t("expertise.description")}
              </p>

              <div className="absolute -top-5 left-5 bg-white rounded-xl p-2">
                <IconChecklist className="text-zinc-950" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Customers section */}
      <div className="flex flex-col items-center my-8 lg:flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col items-center">
          <p className="text-[#FAB21F] font-bold">
            {t("customers.titleHighlight")}
          </p>
          <p>{t("customers.titleRest")}</p>
        </div>
        <Image
          src="/images/customers.png"
          width={1000}
          height={1000}
          alt={t("customers.alt")}
          className="mt-8 lg:hidden"
        />
        <Image
          src="/images/customers2.png"
          width={1000}
          height={1000}
          alt={t("customers.alt")}
          className="hidden mt-8 lg:flex"
        />
      </div>

      {/* Services section */}
      <div className="bg-zinc-200 p-4">
        <div className="text-center mb-8">
          <p className="lg:font-bold">
            {t("services.titlePrefix")}{" "}
            <span className="text-[#FAB21F]">
              {t("services.titleHighlight")}
            </span>
          </p>
        </div>
        <ServicesSection />
      </div>

      {/* Industries section */}
      <div className="p-4 lg:flex lg:flex-row lg:justify-around lg:items-center">
        <div>
          <p className="font-extrabold">
            {t("industriesIntro.title")}{" "}
            <span className="text-[#FAB21F]">
              {t("industriesIntro.titleHighlight")}
            </span>
          </p>
          <p className="whitespace-pre-line">
            {t("industriesIntro.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-4">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="bg-white shadow rounded-md flex flex-col items-center p-2"
              >
                <Icon />
                <p className="mt-2 text-sm">
                  {t(`industries.${item.key}`)}
                </p>
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
