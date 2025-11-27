import { IconCertificate, IconFlag, IconHeadphones } from "@tabler/icons-react";
import Image from "next/image";
import AccordionCustions from "../../components/pages/AccordionCustions";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("ServicesPage");

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
        <div className="p-4 space-y-4">
          {/* Intro */}
          <p className="text-[#003F5D]">{t("intro.title")}</p>
          <p>{t("intro.text")}</p>

          {/* Top tiles */}
          <div className="grid grid-cols-3 gap-4">
            {/* Free consulting */}
            <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md min-h-32 p-2">
              <IconHeadphones className="text-white w-16 h-12" />
              <p className="text-[#FAB21F] text-xs">
                {t("tiles.freeConsulting.title")}
              </p>
              <p className="hidden lg:flex text-white text-xs leading-6 mt-4">
                {t("tiles.freeConsulting.text")}
              </p>
            </div>

            {/* Install & service */}
            <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md min-h-32 p-2">
              <IconCertificate className="text-white w-16 h-12" />
              <p className="text-[#FAB21F] text-xs">
                {t("tiles.installService.title")}
              </p>
              <p className="hidden lg:flex text-white text-xs leading-6 mt-4">
                {t("tiles.installService.text")}
              </p>
            </div>

            {/* Warranty & repair */}
            <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md min-h-32 p-2">
              <IconFlag className="text-white w-16 h-12" />
              <p className="text-[#FAB21F] text-xs">
                {t("tiles.warrantyRepair.title")}
              </p>
              <p className="hidden lg:flex text-white text-xs leading-6 mt-4">
                {t("tiles.warrantyRepair.text")}
              </p>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="space-y-4">
            {/* Free consultation */}
            <div className="bg-zinc-200 p-4 space-y-4 lg:flex lg:justify-start lg:items-center lg:gap-x-4">
              <Image
                src="/images/installation/consulting.jpg"
                width={1000}
                height={1000}
                alt={t("sections.freeConsulting.title")}
                className="rounded-md"
              />
              <div>
                <p className="text-[#FAB21F]">
                  {t("sections.freeConsulting.title")}
                </p>
                <p className="mt-4">{t("sections.freeConsulting.text")}</p>
              </div>
            </div>

            {/* Install & warranty */}
            <div className="bg-zinc-200 p-4 space-y-4 lg:flex lg:justify-start lg:items-center lg:gap-x-4">
              <Image
                src="/images/installation/warranty.jpg"
                width={1000}
                height={1000}
                alt={t("sections.installWarranty.title")}
                className="rounded-md"
              />
              <div>
                <p className="text-[#FAB21F]">
                  {t("sections.installWarranty.title")}
                </p>
                <p className="mt-4">{t("sections.installWarranty.text")}</p>
              </div>
            </div>

            {/* Service & repair */}
            <div className="bg-zinc-200 p-4 space-y-4 lg:flex lg:justify-start lg:items-center lg:gap-x-4">
              <Image
                src="/images/installation/repair.jpg"
                width={1000}
                height={1000}
                alt={t("sections.serviceRepair.title")}
                className="rounded-md object-contain"
              />
              <div>
                <p className="text-[#FAB21F]">
                  {t("sections.serviceRepair.title")}
                </p>
                <p className="mt-4">{t("sections.serviceRepair.text")}</p>
              </div>
            </div>
          </div>

          {/* FAQ accordion (already i18n-aware) */}
          <AccordionCustions />
        </div>
      </div>
    </div>
  );
}
