import { IconBuilding, IconTimeDuration10 } from "@tabler/icons-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function CareersPage() {
  const t = await getTranslations("CareersPage");

  const perks = [
    { key: "training", icon: "/images/job/book-open.png", alt: "training" },
    { key: "bonus", icon: "/images/job/diamond.png", alt: "bonus" },
    {
      key: "insurance",
      icon: "/images/job/file-addition.png",
      alt: "insurance",
    },
    { key: "events", icon: "/images/job/fireworks.png", alt: "events" },
    {
      key: "promotion",
      icon: "/images/job/five-star-badge.png",
      alt: "promotion",
    },
    { key: "gifts", icon: "/images/job/gift.png", alt: "gifts" },
  ] as const;

  const jobs = [1, 2, 3, 4];

  return (
    <div className="mb-12">
      {/* Hero */}
      <div className="bg-[#003F5D] p-4 text-white space-y-8 lg:flex lg:flex-col lg:items-center">
        <p className="text-[#FAB21F]">{t("hero.title")}</p>
        <p>{t("hero.text")}</p>
        <div className="flex justify-start items-center gap-x-4">
          <button className="btn">{t("hero.consultButton")}</button>
          <button className="btn bg-[#FAB21F] border-0">
            {t("hero.serviceButton")}
          </button>
        </div>
      </div>

      <div className="max-w-5xl m-auto">
        <div className="mt-8 p-4 space-y-8">
          {/* Culture text */}
          <p className="text-xs text-center">
            {t("culture.text")} <span className="text-[#FAB21F]">پرشیادُر</span>
          </p>

          {/* Perks grid */}
          <div className="grid grid-cols-3 mt-4 gap-4 lg:grid-cols-6">
            {perks.map((perk) => (
              <div
                key={perk.key}
                className="flex flex-col items-center justify-center"
              >
                <Image src={perk.icon} width={40} height={40} alt={perk.alt} />
                <p className="text-xs">{t(`perks.${perk.key}`)}</p>
              </div>
            ))}
          </div>

          {/* Jobs section intro */}
          <div className="text-center">
            <p className="text-[#FAB21F]">{t("jobsSection.title")}</p>
            <p>{t("jobsSection.text")}</p>
          </div>

          {/* Job cards */}
          <div className="flex flex-col space-y-4">
            {jobs.map((id) => (
              <div
                key={id}
                className="bg-zinc-100 rounded p-4 flex justify-between items-center py-8"
              >
                <div className="flex flex-col space-y-4">
                  <p>{t("jobCard.title")}</p>
                  <div className="flex justify-start items-center gap-x-4">
                    <div className="flex justify-start items-center gap-x-2">
                      <IconTimeDuration10 />
                      <span>{t("jobCard.typePartTime")}</span>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <IconBuilding />
                      <span>{t("jobCard.locationOnsite")}</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-xs btn-outline lg:btn-md">
                  {t("jobCard.sendCvButton")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}