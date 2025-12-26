"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

interface HospitalProject {
  title: string;
  slug: string;
  cover_image: string;
}

export default function PrivateSlider() {
  const t = useTranslations("PrivatePage");
  const [projects, setProjects] = useState<HospitalProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.persiadoorco.com/api/v1/projects/?category=marakez")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.results || []);
      })
      .catch((err) => {
        console.error("Hospital projects fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="my-8 py-16 text-center text-white bg-[#003F5D]">
        در حال بارگذاری...
      </div>
    );
  }

  if (projects.length === 0) return null;

  return (
    <div className="my-8 bg-[#003F5D] py-8">
      {/* Header */}
      <div className="flex flex-col items-start mb-6 text-white px-4 max-w-7xl mx-auto">
        <p className="text-[16px] lg:text-[23px] font-regular">
          {t("sectionTitle")}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".hospital-pagination",
        }}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.8 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-7xl px-4"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.slug}>
            <div className="w-[182px] h-[215px] m-2 lg:w-[392px] lg:h-[326px] bg-white rounded-sm overflow-hidden flex flex-col">
              <figure>
                <img
                  src={item.cover_image}
                  alt={item.title}
                  className="w-full h-[163px] lg:h-[254px] object-cover"
                />
              </figure>

              <div className="lg:p-4">
                <p className="text-[#005E8B] font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination under cards */}
      <div className="hospital-pagination mt-6 flex justify-center" />
    </div>
  );
}
