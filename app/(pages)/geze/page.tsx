import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";
import CategorySliders from "@/app/components/pages/CategorySliders";
import AwardsLightbox from "@/app/components/pages/AwardsLightbox";

export const metadata: Metadata = {
  title: "پرشیادُر | درباره گزه GEZE",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function GezePage() {
  const t = await getTranslations("GezePage");

  return (
    <div className=" my-10 lg:my-20">
      {/* Hero */}
      <div className="p-4">
        <Breadcrumbs />
      </div>
      <div className="bg-[#003F5D] text-white flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center lg:h-[400px] pb-4 lg:pb-0">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          {/* title */}
          <p className="flex flex-col font-semibold text-[25px]">
            <span className="text-[#FAB21F]">{t("hero.titlePrefix")} </span>
            {t("hero.titleRest")}
          </p>
          {/* buttons */}
          <div className="flex justify-start items-center gap-x-4 mt-10">
            <button className="btn px-8">{t("hero.consultButton")}</button>
            <button className="btn bg-[#FAB21F] border-0 px-8">
              {t("hero.gezeWebsiteButton")}
            </button>
          </div>
        </div>
        {/* image banner */}
        <div className="lg:w-1/2">
          <img
            src="/images/geze-banner 1.png"
            alt="geze_banner"
            className="lg:w-full lg:h-[400px]"
          />
        </div>
      </div>

      <div className="mx-auto">
        {/* About GEZE */}
        <div
          className="lg:h-[850px] mt-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/image 784 (1).png')" }}
          dir="rtl"
        >
          <div className="lg:max-w-7xl mx-auto pt-10 lg:pt-30">
            {/* title */}
            <p className="my-10 lg:text-[28px] font-bold">
              {t("about.heading")} <span className="text-[#FAB21F]">GEZE</span>
            </p>
            {/* about geze */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 w-[300px] lg:w-full lg:gap-x-30 text-[16px] ">
              {/* ستون چپ (ارزش برند) */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center mx-10 lg:mx-0 w-full lg:w-[520px] lg:h-[291px] bg-transparent border border-zinc-300 py-6 lg:py-8 rounded-sm">
                {/* Diamond */}
                <div className="absolute -left-9 top-1/2 -translate-y-1/2 lg:static lg:translate-y-0 lg:-left-18">
                  <div className="lg:relative lg:-left-18 w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] rotate-45 shadow-md">
                    <div className="-rotate-45 flex items-center justify-center">
                      <img src="/images/image 864 (1).png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center items-start px-6 w-full">
                  <p className="text-slate-600 leading-relaxed text-center text-[16px]">
                    {t("about.paragraph1")}
                  </p>
                </div>
              </div>

              {/* ستون راست (چشم‌انداز) */}
              <div className="relative flex flex-col lg:flex-row items-center w-full lg:w-[520px] mx-19 lg:mx-0lg:h-[291px] bg-transparent border border-zinc-300 py-6 lg:py-8 rounded-sm lg:top-25">
                {/* Diamond */}
                <div className="absolute -right-9 top-1/2 -translate-y-1/2 lg:static lg:translate-y-0 lg:left-18">
                  <div className="lg:relative lg:left-18 w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] rotate-45 shadow-md">
                    <div className="-rotate-45 flex items-center justify-center">
                      <img src="/images/image 864 (1).png" alt="گواهینامه" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center items-center px-6 w-full">
                  <p className="text-slate-600 leading-relaxed text-center">
                    {t("about.paragraph2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GEZE products */}
        <div className="space-y-4 max-w-7xl mx-auto mt-8">
          <p className="flex gap-2">
            <span className="  lg:text-[28px] lg:font-bold text-[#FAB21F]">
              {t("products.heading1")}
            </span>
            <span className="lg:text-[28px] lg:font-bold ">
              {t("products.heading2")}
            </span>
          </p>

          <div className="mb-10">
            <CategorySliders />
          </div>
        </div>

        {/* Collaboration section */}
        <div className="bg-zinc-100 p-4 space-y-4 lg:flex lg:flex-row lg:justify-between lg:items-center max-w-7xl mx-auto mb-17">
          <Image
            src="/images/geze/image-823.jpg"
            width={500}
            height={500}
            alt="geze"
          />
          <div className="space-y-6 p-6">
            <p className="text-[28px] font-semibold">
              {t("collaboration.headingPrefix")}{" "}
              <span className="text-[#FAB21F]">
                {t("collaboration.headingBrand")}
              </span>{" "}
              {t("collaboration.headingRest")}
            </p>
            <p className="leading-8">{t("collaboration.text")}</p>
          </div>
        </div>

        {/* Representative section */}
        <div className="bg-zinc-100 p-6 max-w-7xl mx-auto">
          <p className="text-[#FAB21F] text-[28px] font-semibold">
            {t("representative.brandName")}
          </p>
          <p className="text-[28px] font-semibold">
            {t("representative.subtitle")}
          </p>

          <AwardsLightbox />
        </div>
      </div>
    </div>
  );
}
