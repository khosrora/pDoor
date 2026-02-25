"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import api from "@/app/lib/axios";
import type { Swiper as SwiperType } from "swiper";
import { useTranslations } from "next-intl";

interface SlideItem {
  id: number;
  title: string;
  image: string;
  link: string | null;
  order: number;
}

export default function BannerSliders() {
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations("banner");

  useEffect(() => {
    api
      .get<SlideItem[]>("/v1/site_settings/slides/")
      .then((res) => setSlides(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full relative lg:h-[712px]"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                width={1200}
                height={600}
                alt={item.title}
                className="w-full h-full object-cover"
                priority={i === 0}
              />

              {item.link && (
                <Link
                  href={item.link}
                  className="
                    absolute bottom-5 right-5 lg:bottom-20 lg:right-20
                    bg-[#FAB21F] text-black
                    p-2 lg:px-6 lg:py-4 rounded-md
                    text-[12px] lg:text-sm font-medium
                    hover:bg-[#004b6d]
                    hover:text-white
                    transition
                    z-[1000]
                    cursor-pointer
                  "
                >
                  {t("viewDetails")}
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT click area */}
      <div
        className="lg:absolute top-0 left-0 lg:h-[600px] w-1/2 z-1 cursor-swiper-left"
        onClick={() => swiperRef.current?.slideNext()}
      />

      {/* RIGHT click area */}
      <div
        className="lg:absolute top-0 right-0 lg:h-[600px] w-1/2 z-1 cursor-swiper-right"
        onClick={() => swiperRef.current?.slidePrev()}
      />
    </div>
  );
}