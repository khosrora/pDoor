"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations, useLocale } from "next-intl";

interface Category {
  name: string;
  logo: string;
  slug: string;
  product_count: number;
}

export default function CategorySliders() {
  const t = useTranslations("Categories");
  const locale = useLocale(); // "fa" | "en"
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/categories/?lang=${locale}`
        );
        const data = await res.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [locale]);

  return (
    <div className="bg-[#f4f4f4] py-2">
      <div className="my-8 max-w-7xl m-auto px-4">
        <p className="font-bold text-base mb-4 text-[#003f5d] lg:text-2xl">
          {t("header")}
        </p>

        {loading ? (
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-28 bg-white border border-zinc-300 rounded skeleton"
              ></div>
            ))}
          </div>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              0: { slidesPerView: 2.3 },
              640: { slidesPerView: 2.3 },
              768: { slidesPerView: 3.8 },
              1024: { slidesPerView: 4.5 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.slug}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="block"
                >
                  <div
                    className="
                      group flex flex-col items-center justify-center 
                      border border-zinc-300 rounded p-4 space-y-4 bg-white 
                      transition-all duration-300 
                      hover:shadow-lg hover:border-[#007EBA] cursor-pointer
                    "
                  >
                    <Image
                      src={category.logo || "/images/noimage.jpg"}
                      width={40}
                      height={40}
                      alt={category.name}
                      className="transition-transform duration-300 group-hover:scale-110 object-contain"
                    />

                    <p className="text-[10px] lg:text-[14px] font-medium group-hover:text-[#003f5d] transition-colors">
                      {category.name}
                    </p>

                    <p className="text-[8px] lg:text-[12px] text-zinc-400 group-hover:text-[#007EBA] transition-colors">
                      {t("productsCount", { count: category.product_count })}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
