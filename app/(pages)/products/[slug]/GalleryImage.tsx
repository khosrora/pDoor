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

type ItemKey = "projectTehran" | "projectZahedan";

type GalleryItem = {
  id: number;
  key: ItemKey;
  link: string;
};

const data: GalleryItem[] = [
  {
    id: 2,
    key: "projectTehran",
    link: "https://persiadoorco.com/wp-content/uploads/2025/07/GEZE_937523_KZPFL_Stefan-Dauth-GEZE-GmbH-1536x1056.png",
  },
  {
    id: 3,
    key: "projectZahedan",
    link: "https://persiadoorco.com/wp-content/uploads/2025/07/revolving-1-150x150.jpg",
  },
];

function GalleryImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const t = useTranslations("GalleryImage");

  const mainSwiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  } as CSSProperties;

  return (
    <div className="min-w-0 allprojects lg:w-1/2">
      {/* Main slider */}
      <Swiper
        style={mainSwiperStyle}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              alt={t(`items.${item.key}.title`)}
              src={item.link}
              className="min-h-80 max-h-80 object-cover"
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              alt={t(`items.${item.key}.title`)}
              src={item.link}
              className="min-h-20 max-h-20 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryImage;
