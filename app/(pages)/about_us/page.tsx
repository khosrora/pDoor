import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import TeamSection from "@/app/components/pages/TeamSection";
import Image from "next/image";
import { IconDownload, IconPlus } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import AboutUsSwiper from "@/app/components/pages/AboutUsSwiper";

export default async function TimelineSlider() {
  const t = await getTranslations("TimelineSlider");

  // {t("hero.title")}

  return (
    <div dir="rtl" className="w-full  mx-auto px-4 py-12 my-20">
      <AboutUsSwiper />

      {/* بخش ارزش‌ها، چشم‌انداز و ماموریت */}
      <section
        dir="rtl"
        className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col"
      >
        {/* ردیف بالا: ارزش برند و چشم‌انداز */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 mb-10">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 ">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
                {t("vision_title")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                {t("vision_text")}
              </p>
            </div>
            <div className=" flex justify-center items-start">
              <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\binoculars_4771110 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 ">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                {t("brand_value")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                {t("vision_paragraph")}
              </p>
            </div>
            <div className=" flex justify-center items-start">
              <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\mountain_16899770 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ردیف پایین: ماموریت */}
        <div className="flex flex-col items-center text-center max-w-[460px] mx-auto">
          <div className="flex justify-center items-start">
            <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
              <div className="transform -rotate-45 flex items-center justify-center">
                <img src="\SVGs\target-two.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-base font-semibold text-[#005E8B] my-6">
              {t("mission_title")}
            </h5>
            <p className="text-slate-600 leading-relaxed">
              {t("mission_text")}
            </p>
          </div>
        </div>
      </section>

      {/* our team */}
      <div className=" w-full bg-zinc-100 p-8 ">
        <p className="flex justify-center gap-2 font-bold text-[28px] my-4">
          <span className="text-[#FAB21F]">{t("team")}</span>
          {t("persia")}
        </p>
        <TeamSection />

        <div className="flex justify-around items-center bg-zinc-50 lg:w-[732px] lg:h-[113px] my-10 mx-auto border border-1 border-zinc-200 rounded-md">
          <p className="text-[#FAB21F] text-[25px] font-semibold">
            {t("join_us_title")}
          </p>
          <button className="border border-1 border-[#005E8B] text-[#005E8B] py-2 px-4 rounded-md">
            {t("job_positions_button")}
          </button>
        </div>
      </div>

      {/* our service */}
      <div className="flex flex-col w-full mx-auto mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 mb-10 ">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 bg-zinc-100 py-8">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
                {t("ourServises")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center text-[16px] ">
                {t("ourServises_text")}
              </p>
            </div>
            <div className=" flex justify-center items-start relative -left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\settings_8941361 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 relative top-25 bg-zinc-100 py-2.5">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
               {t("representation")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                {t("representation_text")}
              </p>
            </div>
            <div className=" flex justify-center items-start relative left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\certificate.svg" alt="گواهینامه" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 my-10">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 bg-zinc-100 py-8">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
               {t("honors_title")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center text-[16px] ">
                {t("honors_desc")}
              </p>
            </div>
            <div className=" flex justify-center items-start relative -left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\five-star-badge.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 relative top-25 bg-zinc-100 py-2.5">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
               {t("solutions_title")}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                {t("solutions_desc")}
              </p>
            </div>
            <div className=" flex justify-center items-start relative left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\target.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customers section */}
      <div className="flex flex-col items-center mt-40 lg:flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col items-start lg:text-[33px] ">
          <p className="text-[#FAB21F] font-bold">{t("customers_title")}</p>
          <p className="font-bold">{t("customers_subtitle")}</p>
        </div>
        <Image
          src="/images/Customers_mobile (2).png"
          width={1000}
          height={1000}
          alt="مشتریان ما"
          className="mt-8 lg:hidden"
        />
        <Image
          src="/images/Customers (2).png"
          width={1000}
          height={1000}
          alt="مشتریان ما"
          className="hidden mt-8 lg:flex"
        />
      </div>

      {/* counter */}
      <div className="flex justify-center items-center w-full lg:h-[430px] bg-[#003F5D] leading-15">
        <div className="grid grid-cols-3 max-w-6xl gap-20">
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157189.svg" alt="" />
            <p className="text-white text-[33px]">+600</p>
            <p className="text-white">{t("iran_cities")}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157188.svg" alt="" />
            <p className="text-white text-[33px]">+10,000</p>
            <p className="text-white ">{t("our_experience")}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157187.svg" alt="" />
            <p className="text-white text-[33px] ">+20</p>
            <p className="text-white">{t("different_industries")}</p>
          </div>
        </div>
      </div>

      {/* certificate show */}

      <div className="mt-15 max-w-7xl mx-auto px-4 py-12">
        <div className="w-full border border-1 border-zinc-200 bg-zinc-100 p-8 flex justify-between items-center ">
          <div className="flex gap-2">
            <IconDownload stroke={2} color={"#FAB21F"} />
            <p>{t("agency_page")}</p>
          </div>
          <IconPlus stroke={2} />
        </div>
      </div>
    </div>
  );
}
