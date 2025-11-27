"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImageSwiperProps {
  images: string[];
}

export default function BannerSliders({ images }: ImageSwiperProps) {
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
                alt={`image-${i}`}
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
