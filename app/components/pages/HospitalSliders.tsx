"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {useTranslations} from "next-intl";

type HospitalId = "hospital1" | "hospital2" | "hospital3" | "hospital4";

const slides: {id: HospitalId; image: string}[] = [
  {
    id: "hospital1",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital2",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital3",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital4",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital4",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital4",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital4",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
  {
    id: "hospital4",
    image: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
  },
];

export default function HospitalSliders() {
  const t = useTranslations("HospitalSliders");

  return (
    <div className="my-8 bg-[#003F5D] py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-white px-4">
        <p className="text-lg font-semibold mb-1">
          {t("sectionTitle")}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        pagination={{clickable: true}}
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
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card bg-white border-2 rounded-md border-zinc-200 overflow-hidden">
              <figure>
                <img
                  src={item.image}
                  alt={t(`items.${item.id}.imageAlt`)}
                  className="w-full h-36 object-cover"
                />
              </figure>
              <div className="p-4">
                <p className="text-[#005E8B] font-semibold mb-1">
                  {t(`items.${item.id}.title`)}
                </p>
                <p className="text-xs text-gray-600">
                  {t(`items.${item.id}.description`)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
