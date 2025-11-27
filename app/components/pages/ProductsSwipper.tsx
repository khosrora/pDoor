"use client";

import {
  IconArrowLeft,
  IconChevronsRight,
  IconDoor,
  IconDoorExit,
} from "@tabler/icons-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

export default function ProductsSwipper() {
  const t = useTranslations("ProductsSwiper");

  return (
    <div className="my-8">
      <div className="flex flex-col items-center mb-4">
        <p className="text-lg">
          {t("sectionTitlePrefix")}{" "}
          <span className="text-[#FAB21F]">{t("sectionTitleBrand")}</span>
        </p>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
        }}
        className="w-full"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide key={i}>
            <div className="card bg-base-100 border rounded-md border-zinc-200">
              <figure>
                <img
                  src="https://persiadoorco.com/wp-content/uploads/2025/07/window.jpg"
                  alt={t("card.imageAlt")}
                  className="w-full h-40 object-contain rounded-t-md"
                />
              </figure>
              <div className="card-body p-2">
                <div className="flex justify-between items-center">
                  <p className="card-title text-xs font-medium">
                    {t("card.title")}
                  </p>
                  <div className="flex justify-end items-center gap-1">
                    <IconDoorExit className="text-zinc-400" size={16} />
                    <IconChevronsRight className="text-yellow-600" size={16} />
                  </div>
                </div>

                <div className="divider my-2"></div>

                <div className="flex justify-end items-center gap-x-2">
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <IconDoor className="text-zinc-400" size={16} />
                      <p className="text-[8px] text-zinc-400">
                        {t("card.featureLabel")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-between items-center mt-2 text-zinc-500">
                  <Link href="/" className="flex items-center gap-1">
                    {t("card.moreLink")} <IconArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
