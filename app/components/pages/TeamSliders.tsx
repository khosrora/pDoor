"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

export default function TeamSliders() {
  const t = useTranslations("TeamSliders");

  return (
    <div className="my-8 bg-zinc-200 py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-white px-4">
        <p className="text-lg font-semibold mb-1 text-zinc-950">
          <span className="text-[#FAB21F]">{t("sectionTitlePrefix")} </span>
          {t("sectionTitleBrand")}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
        }}
        className="w-full px-4"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SwiperSlide key={i}>
            <div className="card bg-white border-2 rounded-md border-zinc-200 overflow-hidden">
              <figure>
                <img
                  src="https://persiadoorco.com/wp-content/uploads/2025/04/selling.jpg"
                  alt={t("items.sales.imageAlt")}
                  className="w-full h-36 object-cover"
                />
              </figure>
              <div className="p-4">
                <p className="text-[#005E8B] font-semibold mb-1">
                  {t("items.sales.title")}
                </p>
                <p className="text-xs text-gray-600">
                  {t("items.sales.description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <div className="bg-zinc-50 flex justify-between items-center p-4 mt-4 rounded">
        <div className="flex justify-start items-center w-1/2 gap-x-2">
          <p className="text-[#FAB21F]">{t("cta.joinText")}</p>
        </div>
        <button className="btn btn-sm bg-[#005E8B] text-white">
          {t("cta.jobsButton")}
        </button>
      </div>
    </div>
  );
}
