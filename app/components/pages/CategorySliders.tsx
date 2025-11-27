"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

type CategoryId = "sliding" | "hinged" | "glass" | "industrial" | "automatic";

const categories: { id: CategoryId; image: string }[] = [
  { id: "sliding", image: "/images/geze/sliding door.svg" },
  { id: "hinged", image: "/images/geze/sliding door.svg" },
  { id: "glass", image: "/images/geze/sliding door.svg" },
  { id: "industrial", image: "/images/geze/sliding door.svg" },
  { id: "automatic", image: "/images/geze/sliding door.svg" },
];

export default function CategorySliders() {
  const t = useTranslations("Categories");

  return (
    <div className="my-8 bg-zinc-200 py-8">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          0: {
            slidesPerView: 2.3,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3.8,
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
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2 bg-white">
              <Image
                src={category.image}
                width={40}
                height={40}
                alt={t(`${category.id}.imageAlt`)}
              />
              <p className="text-[10px]">{t(`${category.id}.title`)}</p>
              <p className="text-[8px]">{t(`${category.id}.subtitle`)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
