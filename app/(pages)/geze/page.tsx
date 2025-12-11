import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";
import CategorySliders from "@/app/components/pages/CategorySliders";

export const metadata: Metadata = {
  title: "پرشیادُر | درباره گزه GEZE",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function GezePage() {
  const t = await getTranslations("GezePage");

  return (
    <div className="my-20">
      {/* Hero */}
      <div className="p-4">
        <Breadcrumbs />
      </div>
      <div className="bg-[#003F5D] text-white lg:flex lg:items-center lg:justify-center lg:h-[400px]">
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
        >
          <div className="lg:max-w-7xl mx-auto pt-30">
            {/* title */}
            <p className="my-10 text-[28px] font-bold">
              {t("about.heading")} <span className="text-[#FAB21F]">GEZE</span>
            </p>
            {/* about geze */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-60 text-[16px]">
              {/* ستون چپ (ارزش برند) */}
              <div className="flex items-center lg:w-[520px] lg:h-[291px]  bg-transparent border border-zinc-300 py-8 rounded-sm ">
                <div className="flex flex-col justify-center items-center px-4 w-full">
                  <p className="text-slate-600 leading-relaxed text-center text-[16px] ">
                    {t("about.paragraph1")}
                  </p>
                </div>
                <div className=" flex justify-center items-start relative -left-18">
                  <div className="relative w-[144px] h-[144px] flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                    <div className="transform -rotate-45 flex items-center justify-center">
                      <img src="/images/image 864 (1).png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ستون راست (چشم‌انداز) */}
              <div className="flex flex-row-reverse items-center gap-4 relative top-25 bg-transparent border border-zinc-300 py-2.5 rounded-sm">
                <div className="flex flex-col justify-center items-center px-4 w-full">
                  <p className="text-slate-600 leading-relaxed text-center ">
                    {t("about.paragraph2")}
                  </p>
                </div>
                <div className=" flex justify-center items-start relative left-18 ">
                  <div className="relative w-[144px] h-[144px] flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                    <div className="transform -rotate-45 flex items-center justify-center">
                      <img src="/images/image 864 (1).png" alt="گواهینامه" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GEZE products */}
        <div className="space-y-4 max-w-7xl mx-auto">
          <p className="flex gap-2">
            <span className="  text-[28px] font-bold text-[#FAB21F]">
              {t("products.heading1")}
            </span>
            <span className="text-[28px] font-bold ">{t("products.heading2")}</span>
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
          <div className="flex justify-around lg:max-w-3xl lg:mx-auto my-10">
            <Image
              src="/images/geze/awards-card-component-1.png"
              width={100}
              height={100}
              alt="geze-award-1"
              className="lg:w-[184px] lg:h-[253px]"
            />
            <Image
              src="/images/geze/awards-card-component-2.png"
              width={100}
              height={100}
              alt="geze-award-2"
              className="lg:w-[184px] lg:h-[253px]"
            />
            <Image
              src="/images/geze/awards-card-component.png"
              width={100}
              height={100}
              alt="geze-award-3"
              className="lg:w-[184px] lg:h-[253px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
