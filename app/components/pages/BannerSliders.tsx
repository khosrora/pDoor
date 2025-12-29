"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import api from "@/app/lib/axios";
import type { Swiper as SwiperType } from "swiper";

interface SlideItem {
  id: number;
  title: string;
  image: string;
  link: string | null;
  order: number;
}

export default function BannerSliders() {
  const [images, setImages] = useState<string[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get<SlideItem[]>("/v1/site_settings/slides/");
        setImages(res.data.map((item) => item.image));
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
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              width={1200}
              height={600}
              alt={`slide-${i}`}
              className="w-full h-auto object-cover"
              priority={i === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT hover area */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 cursor-swiper-left z-2"
        onClick={() => swiperRef.current?.slidePrev()}
      />

      {/* RIGHT hover area */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 cursor-swiper-right z-2"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
}
