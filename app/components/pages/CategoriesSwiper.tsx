"use client";

import api from "@/app/lib/axios";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronsLeft,
} from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

/* ------------------------------------
      New Category Type
------------------------------------ */
interface CategoryItem {
  name: string;
  slug: string;
  logo: string;
  image: string;
  product_count: number;
}

export default function CategoriesSwiper() {
  const t = useTranslations("ProductsSwiper");
  const locale = useLocale(); // fa | en

  const [categories, setCategories] = useState<CategoryItem[]>([]);

  // Navigation refs
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  /* ------------------------------------
      Fetch Categories (with lang)
  ------------------------------------ */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get(`/v1/categories/?lang=${locale}`);
        const list = res.data.slice(0, 8); // first 8 items
        setCategories(list);
      } catch (err) {
        console.error("Error loading categories", err);
      }
    };

    fetchCategories();
  }, [locale]);

  // Bind navigation buttons properly
  useEffect(() => {
    if (
      swiperRef &&
      swiperRef.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);

  // Auto-correct direction (RTL/EN)
  const isRTL = locale === "fa";

  return (
    <div className="my-8 max-w-7xl m-auto relative">
      <div className="mb-4">
        <p className="text-[33px] font-bold text-center">
          {t("latestProducts")}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        dir={isRTL ? "rtl" : "ltr"}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.slug}>
            <div className="card w-[305px] h-[488px] bg-base-100 rounded-md">
              {/* IMAGE */}
              <figure>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-[268px] object-cover rounded-t-md"
                />
              </figure>

              <div className="card-body p-3">
                {/* CATEGORY TITLE */}
                <div className="flex items-center justify-between gap-2 text-xs text-zinc-600">
                  <div className="flex items-center justify-start">
                    <IconChevronsLeft size={16} className="text-yellow-600" />
                    <img
                      src={cat.logo}
                      alt={cat.name}
                      className="w-5 h-5 object-center"
                    />
                  </div>

                  <p>{cat.name}</p>
                </div>

                <div className="divider my-2"></div>

                {/* BUTTON */}
                <div className="card-actions justify-between items-center">
                  <Link
                    href={`/products?lang=${locale}&&category=${cat.slug}`}
                    className="flex items-center gap-1 text-sm text-blue-600"
                  >
                    {t("card.moreLink")}
                    {isRTL ? (
                      <IconArrowLeft size={16} />
                    ) : (
                      <IconArrowRight size={16} />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={nextRef}
          className="p-3 bg-[#0C5273] rounded-full shadow-lg"
        >
          <IconArrowRight color="white" size={20} />
        </button>

        <button
          ref={prevRef}
          className="p-3 bg-[#0C5273] rounded-full shadow-lg"
        >
          <IconArrowLeft color="white" size={20} />
        </button>
      </div>
    </div>
  );
}
