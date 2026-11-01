import { IconCertificate, IconFlag, IconHeadphones } from "@tabler/icons-react";
import Image from "next/image";
import AccordionCustions from "../../components/pages/AccordionCustions";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";

export const metadata: Metadata = {
  title: "پرشیادُر | نصب",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function page() {
  const t = await getTranslations("ServicesPage");

  return (
    <div className="my-10 lg:my-20">
      <div className="p-4">
        <Breadcrumbs />
      </div>
      {/* Hero */}
      <div className="bg-[#003F5D] lg:h-[429px] grid grid-cols-2 text-white space-y-8 lg:flex lg:justify-around ">
        <div className=" lg:flex lg:flex-col lg:items-start lg:justify-center space-y-4">
          <p className="text-[#FAB21F] text-[19px] lg:text-[28px] lg:font-bold ">
            {t("hero.title")}
          </p> 
          <p className="lg:w-[552px] text-[14px] lg:text-[16px]">{t("hero.text")}</p>
          <div className="flex justify-start items-center gap-x-4 mt-8">
            <button className="btn ">{t("hero.consultButton")}</button>
            <button className="btn bg-[#FAB21F] border-0">
              {t("hero.serviceButton")}
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <img
            src="\images\تعمیرکار 1.png"
            alt=""
            className="h-[242px] lg:w-[456px] lg:h-[492px]"
          />
        </div>
      </div>

      <div className="relative w-full ">
        <div className="absolute top-0 -z-1 w-full lg:h-[254px] bg-zinc-100"></div>
        <div className=" max-w-5xl m-auto">
          <div className="p-4 space-y-4">
            {/* Intro */}
            <p className="text-[#003F5D] text-[23px] ">{t("intro.title")}</p>
            <p className="my-6">{t("intro.text")}</p>

            {/* Top tiles */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* Free consulting */}
              <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md lg:h-[263px]  p-4">
                <img src={"/SVGs/headset-one.svg"} className="text-white w-16 h-12" />
                <p className="text-[#FAB21F] text-[18px]">
                  {t("tiles.freeConsulting.title")}
                </p>
                <p className="hidden lg:flex text-white text-[16px] leading-6 mt-4">
                  {t("tiles.freeConsulting.text")}
                </p>
              </div>

              {/* Install & service */}
              <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md min-h-32 p-4">
                <img src={"/SVGs/certificate.svg"} className="text-white w-16 h-12" />
                <p className="text-[#FAB21F] text-[18px]">
                  {t("tiles.installService.title")}
                </p>
                <p className="hidden lg:flex text-white text-[16px] leading-6 mt-4">
                  {t("tiles.installService.text")}
                </p>
              </div>

              {/* Warranty & repair */}
              <div className="flex flex-col items-center justify-around bg-[#003F5D] rounded-md min-h-32 p-4">
                <img src={"/SVGs/tool.svg"} className="text-white w-16 h-12" />
                <p className="text-[#FAB21F] text-[18px]">
                  {t("tiles.warrantyRepair.title")}
                </p>
                <p className="hidden lg:flex text-white text-[16px] leading-6 mt-4">
                  {t("tiles.warrantyRepair.text")}
                </p>
              </div>
            </div>




            {/* Detailed sections */}
            <div className="space-y-4 mt-12">
              {/* Free consultation */}
              <div className="bg-zinc-100 p-4  lg:flex lg:justify-start lg:items-center lg:gap-x-4 bg:w-full">
                <Image
                  src="/images/installation/image 809.png"
                  width={1000}
                  height={1000}
                  alt={t("sections.freeConsulting.title")}
                  className="rounded-md lg:w-[445px] lg:h-[296px]"
                />
                <div className="p-8">
                  <p className="text-[#FAB21F] font-semibold">
                    {t("sections.freeConsulting.title")}
                  </p>
                  <p className="mt-4">{t("sections.freeConsulting.text")}</p>
                </div>
              </div>

              {/* Install & warranty */}
              <div className="bg-zinc-100 p-4  lg:flex lg:justify-start lg:items-center lg:gap-x-4 bg:w-full">
                <Image
                  src="/images/installation/image 809 (1).png"
                  width={1000}
                  height={1000}
                  alt={t("sections.installWarranty.title")}
                  className="rounded-md lg:w-[445px] lg:h-[296px]"
                />
                <div className="p-8">
                  <p className="text-[#FAB21F] font-semibold">
                    {t("sections.installWarranty.title")}
                  </p>
                  <p className="mt-4">{t("sections.installWarranty.text")}</p>
                </div>
              </div>

              {/* Service & repair */}
              <div className="bg-zinc-100 p-4  lg:flex lg:justify-start lg:items-center lg:gap-x-4 bg:w-full">
                <Image
                  src="/images/installation/image 809 (2).png"
                  width={1000}
                  height={1000}
                  alt={t("sections.serviceRepair.title")}
                  className="rounded-md lg:w-[445px] lg:h-[296px] object-contain"
                />
                <div className="p-8">
                  <p className="text-[#FAB21F] font-semibold">
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
    </div>
  );
}
