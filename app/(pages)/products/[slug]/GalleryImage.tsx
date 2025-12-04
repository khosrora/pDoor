"use client";

import { useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

type ProductImage = {
  id: number;
  image: string;
  alt_text: string;
  is_main: boolean;
  order: number;
};

interface Props {
  images: ProductImage[];
}

function GalleryImage({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const t = useTranslations("GalleryImage");

  const mainSwiperStyle: CSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  } as CSSProperties;

  // Sort images by "is_main" first, then by order
  const sorted = [...images].sort((a, b) => {
    if (a.is_main) return -1;
    if (b.is_main) return 1;
    return a.order - b.order;
  });

  return (
    <div className="min-w-0 allprojects">
      {/* Main slider */}
      <Swiper
        style={mainSwiperStyle}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sorted.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              alt={item.alt_text}
              src={item.image}
              className="min-h-80 max-h-80 object-contain border rounded-md border-zinc-400"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sorted.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              alt={item.alt_text}
              src={item.image}
              className="min-h-20 max-h-20 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryImage;
