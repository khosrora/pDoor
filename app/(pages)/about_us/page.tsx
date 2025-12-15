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
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import CounterItem from "@/app/components/pages/CounterItem";
import ImageLightbox from "@/app/components/pages/ImageLightbox";

export default async function TimelineSlider() {
  const t = await getTranslations("TimelineSlider");
  const t1 = await getTranslations("HomePage");

  // {t("hero.title")}

  return (
    <div className="my-20">
      <Breadcrumbs />
      <div className="w-full  mx-auto px-4 py-12 ">
        <AboutUsSwiper />

        {/* بخش ارزش‌ها، چشم‌انداز و ماموریت */}
        <section
          // dir="rtl"
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
            <Link href={`/job_position`}>
              <button className="border border-1 border-[#005E8B] text-[#005E8B] hover:bg-[#005E8B] hover:text-white py-2 px-4 rounded-md">
                {t("job_positions_button")}
              </button>
            </Link>
          </div>
        </div>

        {/* our service */}
        <div className="flex flex-col w-full mx-auto mt-15 gap-y-20" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 mb-10 ">
            {/* ستون چپ (ارزش برند) */}
            <div className="flex justify-end items-center gap-4 bg-zinc-100 py-8 w-full">
              <div className="flex flex-col justify-center px-4 w-1/2">
                <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                  {t("ourServises")}
                </h4>
                <p className="text-slate-600 leading-relaxed text-[16px] ">
                  {t("ourServises_text")}
                </p>
              </div>
              {/* div and icon */}
              <div className=" flex justify-center items-start">
                <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md -left-20">
                  <div className="transform -rotate-45 flex items-center justify-center">
                    <img src="\SVGs\settings_8941361 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* ستون راست (چشم‌انداز) */}
            <div className="flex flex-row-reverse items-center justify-end gap-4 relative top-40 bg-zinc-100 py-2.5">
              <div className="flex flex-col justify-center px-4 w-1/2">
                <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                  {t("representation")}
                </h4>
                <p className="text-slate-600 leading-relaxed  ">
                  {t("representation_text")}
                </p>
              </div>
              <div className=" flex justify-center items-start">
                <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md left-20">
                  <div className="transform -rotate-45 flex items-center justify-center">
                    <img src="\SVGs\certificate.svg" alt="گواهینامه" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 mb-10 ">
            {/* ستون چپ (ارزش برند) */}
            <div className="flex justify-end items-center gap-4 bg-zinc-100 py-8 w-full">
              <div className="flex flex-col justify-center px-4 w-1/2">
                <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                  {t("honors_title")}
                </h4>
                <p className="text-slate-600 leading-relaxed text-[16px] ">
                  {t("ourServises_text")}
                </p>
              </div>
              {/* div and icon */}
              <div className=" flex justify-center items-start">
                <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md -left-20">
                  <div className="transform -rotate-45 flex items-center justify-center">
                    <img src="\SVGs\five-star-badge.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* ستون راست (چشم‌انداز) */}
            <div className="flex flex-row-reverse items-center justify-end gap-4 relative top-40 bg-zinc-100 py-2.5">
              <div className="flex flex-col justify-center px-4 w-1/2">
                <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                  {t("solutions_title")}
                </h4>
                <p className="text-slate-600 leading-relaxed  ">
                  {t("solutions_desc")}
                </p>
              </div>
              <div className=" flex justify-center items-start">
                <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md left-20">
                  <div className="transform -rotate-45 flex items-center justify-center">
                    <img src="\SVGs\target.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customers section */}
        {/* //////////////////////////////////////////////////// */}
        <div className="flex flex-col items-center mt-60 mb-20 lg:flex-row lg:justify-around lg:items-center">
          {/* متن سمت راست */}
          <div className="flex flex-col items-start lg:text-[33px]">
            <p className="text-[#FAB21F] font-bold">
              {t1("customers.titleHighlight")}
            </p>
            <p className="font-bold">{t1("customers.titleRest")}</p>
          </div>

          {/* نسخه موبایل (عکس) */}
          <Image
            src="/images/Customers_mobile (2).png"
            width={1000}
            height={1000}
            alt={t("customers.alt")}
            className="mt-8 lg:hidden"
          />

          {/* نسخه دسکتاپ – جدول 8×3 */}
          <div className="hidden lg:grid lg:grid-cols-8 lg:grid-rows-3 lg:gap-6 mt-8 lg:mr-16">
            {[
              "",
              "/images/customers/image-866.png",
              "",
              "/images/customers/image-861_2.png",
              "/images/customers/image-863.png",
              "",
              "/images/customers/image-859_2.png",
              "",
              "/images/customers/image-864.png",
              "/images/customers/image-862_2.png",
              "/images/customers/image-865.png",
              "/images/customers/image-871.png",
              "/images/customers/image-870.png",
              "/images/customers/image-860_2.png",
              "/images/customers/image-858_2.png",
              "/images/customers/image-857_2.png",

              "",
              "/images/customers/image-868.png",
              "",
              "/images/customers/image-869.png",
              "",
              "/images/customers/image-867.png",
              "",
              "",
            ].map((src, index) => (
              <div
                key={index}
                className=" w-[66px] h-[66px] flex items-center justify-center 
                                  overflow-hidden transition-all duration-300  border-none hover:scale-160 filter grayscale transition-all hover:grayscale-0 duration-300"
              >
                {/* اگر خانه خالی بود، فقط یک div سفید نمایش بده */}
                {src ? (
                  <img
                    src={src}
                    alt={`logo-${index}`}
                    className="w-[64px] h-[64px] object-contain    hover:border-[#0C5273] hover:border-2 hover:rounded-lg "
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:h-[430px] bg-[#003F5D]">
          <div className="grid grid-cols-3 max-w-6xl gap-20">
            <CounterItem
              end={600}
              label={t("cities")} // ترجمه شهرهای ایران
              icon="/SVGs/Frame 1261157189.svg"
            />
            <CounterItem
              end={10000}
              label={t("experience")} // ترجمه سابقه فعالیت
              icon="/SVGs/Frame 1261157188.svg"
            />
            <CounterItem
              end={20}
              label={t("industries")} // ترجمه صنایع مختلف
              icon="/SVGs/Frame 1261157187.svg"
            />
          </div>
        </div>

        {/* certificate show */}

        <div className="mt-15 max-w-7xl mx-auto border border-zinc-200 bg-zinc-100">
          <details className="group">
            {/* HEADER */}
            <summary
              className="w-full  p-8
                     flex justify-between items-center cursor-pointer
                     list-none"
            >
              <div className="flex items-center gap-2">
                <IconDownload stroke={2} color="#FAB21F" />
                <p className="font-medium">{t("agency_page")}</p>
              </div>

              {/* Icon rotate on open */}
              <IconPlus
                stroke={2}
                className="transition-transform duration-300 group-open:rotate-45"
              />
            </summary>

            {/* DROPDOWN CONTENT */}
            <div className="m-4">
              <div className="w-[200px] h-[300px] flex gap-4">
                <ImageLightbox />
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
