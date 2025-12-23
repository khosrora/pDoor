"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import HingedIcon from "@/app/SVGs/HingedIcon";
import RevolvingIcon from "@/app/SVGs/RevolvingIcon";
import SwingIcon from "@/app/SVGs/categoryslider/SwingIcon";
import RevolveIcon from "@/app/SVGs/categoryslider/RevolveIcon";
import SlideIcon from "@/app/SVGs/categoryslider/SlideIcon";
import AutowinIcon from "@/app/SVGs/categoryslider/AutowinIcon";
import AccessoryIcon from "@/app/SVGs/categoryslider/AccessoryIcon";

interface Category {
  name: string;
  logo: string;
  slug: string;
  product_count: number;
}

export default function CategorySliders() {
  const t = useTranslations("Categories");

  const locale = useLocale();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category"); // ✔ selected category from URL

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
    <div className=" py-2">
      <div className="my-8 max-w-7xl m-auto ">
        {/* <p className="font-bold text-base mb-4 text-[#003f5d] lg:text-2xl">
          {t("header")}
        </p> */}

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
            {categories.map((category) => {
              const isActive = activeCategory === category.slug; // ✔ check if selected
              return (
                <SwiperSlide key={category.slug}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="block"
                  >
                    <div
                      className={`
                        group flex flex-col items-center justify-center 
                        border rounded p-4 space-y-4 bg-white transition-all duration-300 cursor-pointer
                        ${
                          isActive
                            ? "border-[#007EBA] shadow-lg"
                            : "border-zinc-300 group-hover:border-[#007EBA] group-hover:shadow-lg"
                        }
                      `}
                    >
                      {category.slug === "swing-door" ? (
                        <SwingIcon
                          className={`
    text-[10px] lg:text-[14px] font-medium transition-all
    ${
      isActive
        ? "text-[#007EBA] scale-115"
        : "text-[#949494] group-hover:text-[#007EBA] group-hover:scale-115"
    }
  `}
                        />
                      ) : category.slug === "revolving-door" ? (
                        <RevolveIcon
                          className={`
    text-[10px] lg:text-[14px] font-medium transition-all
    ${
      isActive
        ? "text-[#007EBA] scale-115"
        : "text-[#949494] group-hover:text-[#007EBA] group-hover:scale-115"
    }
  `}
                        />
                      ) : category.slug === "sliding-door" ? (
                        <SlideIcon
                          className={`
    text-[10px] lg:text-[14px] font-medium transition-all
    ${
      isActive
        ? "text-[#007EBA] scale-115"
        : "text-[#949494] group-hover:text-[#007EBA] group-hover:scale-115"
    }
  `}
                        />
                      ) : category.slug === "automatic-window" ? (
                        <AutowinIcon
                          className={`
    text-[10px] lg:text-[14px] font-medium transition-all
    ${
      isActive
        ? "text-[#007EBA] scale-115"
        : "text-[#949494] group-hover:text-[#007EBA] group-hover:scale-115"
    }
  `}
                        />
                      ) : (
                        <AccessoryIcon
                          className={`
    text-[10px] lg:text-[14px] font-medium transition-all
    ${
      isActive
        ? "text-[#007EBA] scale-115"
        : "text-[#949494] group-hover:text-[#007EBA] group-hover:scale-115"
    }
  `}
                        />
                      )}

                      <p
                        className={`
                          text-[10px] lg:text-[14px] font-medium transition-colors
                          ${
                            isActive
                              ? "text-[#007EBA]"
                              : "text-black group-hover:text-[#007EBA]"
                          }
                        `}
                      >
                        {category.name}
                      </p>

                      <p
                        className={`
                          text-[8px] lg:text-[12px] transition-colors
                           text-[#949494]
                        `}
                      >
                        {t("productsCount", { count: category.product_count })}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
