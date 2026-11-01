import { IconBuilding, IconTimeDuration10 } from "@tabler/icons-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";
import Jobs from "./Jobs";

export const metadata: Metadata = {
  title: "پرشیادُر | فرصت همکاری با پرشیادُر",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function CareersPage() {
  const t = await getTranslations("CareersPage");

  const perks = [
    { key: "events", icon: "/images/job/fireworks.png", alt: "events" },
    { key: "bonus", icon: "/images/job/diamond.png", alt: "bonus" },
    { key: "gifts", icon: "/images/job/gift.png", alt: "gifts" },
    {
      key: "promotion",
      icon: "/images/job/five-star-badge.png",
      alt: "promotion",
    },
    {
      key: "insurance",
      icon: "/images/job/file-addition.png",
      alt: "insurance",
    },
    { key: "training", icon: "/images/job/book-open.png", alt: "training" },
  ] as const;


  return (
    <div className="my-20">
      <div className="p-4">
        <Breadcrumbs />
      </div>
      {/* Hero */}
      <div className="bg-[#003F5D] text-white lg:grid lg:grid-cols-2 lg:h-[400px] overflow-hidden">
        <div className="lg:flex lg:flex-col lg:justify-center py-10 px-40 w-full ">
          <p className="text-[#FAB21F] text-[25px] font-bold">
          {t("hero.career_title")}
          </p>
          <p className="text-[18px] mt-4 lg:w-[541px] leading-10">
          {t("hero.career_description")}
          </p>
        </div>

        {/* banner image */}
        <div className="lg:w-full">
          <img src="\images\عکس پرسنل.png" alt="" className="w-full h-[400px] object-cover " />
        </div>
      </div>

      <div className="max-w-5xl m-auto">
        <div className="mt-8 p-4 space-y-8">
          {/* Culture text */}
          <p className="text-[20px] font-bold text-center">
            {t("culture.text")}
          </p>

          {/* Perks grid */}
          <div className="grid grid-cols-3 mt-4 gap-4 lg:grid-cols-6">
            {perks.map((perk) => (
              <div
                key={perk.key}
                className="flex flex-col items-center justify-center"
              >
                <Image src={perk.icon} width={60} height={60} alt={perk.alt} />
                <p className="text-[16px] mt-8 ">{t(`perks.${perk.key}`)}</p>
              </div>
            ))}
          </div>

          {/* Jobs section intro */}
          <div className="text-center mt-20">
            <p className="text-[#FAB21F] text-[20px] font-semibold  mb-10">{t("jobsSection.title")}</p>
            <p className="lg:w-[673px] mx-auto">{t("jobsSection.text")}</p>
          </div>

          {/* Job cards */}
          <Jobs />
        </div>
      </div>
    </div>
  );
}
