"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import api from "@/app/lib/axios";
import type { Swiper as SwiperType } from "swiper";

interface SlideItem {
  id: number;
  title: string;
  image: string;
  link: string | null; // blog link
  order: number;
}

export default function BannerSliders() {
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get<SlideItem[]>("/v1/site_settings/slides/");
        setSlides(res.data);
      } catch (error) {
        console.error("Failed to fetch slides:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full">
              {/* Image */}
              <Image
                src={item.image}
                width={1200}
                height={600}
                alt={item.title}
                className="w-full h-auto object-cover"
                priority={i === 0}
              />

              {/* Blog Button */}
              {item.link && (
                <Link
                  href={item.link}
                  className="
                    absolute top-100 right-4
                    bg-[#003148] text-white
                    px-4 py-2 rounded-md
                    text-sm font-medium
                    hover:bg-[#004b6d]
                    transition
                    z-50
                  "
                >
                  مشاهده مقاله
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT click area */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 cursor-swiper-left z-20"
        onClick={() => swiperRef.current?.slideNext()}
      />

      {/* RIGHT click area */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 cursor-swiper-right z-20"
        onClick={() => swiperRef.current?.slidePrev()}
      />
    </div>
  );
}
