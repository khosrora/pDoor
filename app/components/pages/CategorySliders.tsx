"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations, useLocale } from "next-intl";

interface Category {
  name: string;
  logo: string;
  slug: string;
  product_count: number;
}

export default function CategorySliders() {
  const t = useTranslations("Categories");
  const locale = useLocale(); // 'fa' or 'en'
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/categories/?lang=${locale}`
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        alert(t("fetchError") || "خطا در بارگذاری دسته‌بندی‌ها");
      }
    };

    fetchCategories();
  }, [locale, t]);

  return (
    <div className="bg-[#f4f4f4] py-2">
      <div className="my-8 max-w-7xl m-auto">
        <p className="font-bold text-base mb-4 text-[#003f5d] lg:text-2xl">
          {t("header")}
        </p>

        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            0: { slidesPerView: 2.3, spaceBetween: 16 },
            640: { slidesPerView: 2.3, spaceBetween: 16 },
            768: { slidesPerView: 3.8, spaceBetween: 20 },
            1024: { slidesPerView: 4.2, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 28 },
          }}
          className="w-full px-4"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.slug}>
              <div
                className="
                  group
                  flex flex-col items-center justify-center 
                  border border-zinc-300 rounded p-4 space-y-4 bg-white 
                  transition-all duration-300 
                  hover:shadow-lg hover:border-[#007EBA] 
                  cursor-pointer
                "
              >
                <Image
                  src={category.logo || "/images/noimage.jpg"}
                  width={40}
                  height={40}
                  alt={category.name}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <p className="text-[10px] lg:text-[14px] font-medium transition-colors duration-300 group-hover:text-[#003f5d]">
                  {category.name}
                </p>

                <p className="text-[8px] lg:text-[12px] text-zinc-400 transition-colors duration-300 group-hover:text-[#007EBA]">
                  {t("productsCount", { count: category.product_count })}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
