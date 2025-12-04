"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import api from "@/app/lib/axios";

interface SlideItem {
  id: number;
  title: string;
  image: string;
  link: string | null;
  order: number;
}

export default function BannerSliders() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get<SlideItem[]>("/v1/site_settings/slides/");
        
        const imgList = res.data.map((item) => item.image);
        setImages(imgList);
      } catch (error) {
        console.error("Failed to fetch slides:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full">
              <Image
                src={src}
                width={1200}
                height={600}
                alt={`slide-${i}`}
                className="w-full object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
