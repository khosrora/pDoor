"use client";

import api from "@/app/lib/axios";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* ------------------------------------
      New Category Type
------------------------------------ */
interface CategoryItem {
  name: string;
  name_en: string;
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
    if (swiperRef && swiperRef.params && prevRef.current && nextRef.current) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);

  // Auto-correct direction (RTL/EN)
  const isRTL = locale === "fa";

  return (
    <div className="mt-5 mb-20 lg:my-10 lg:my-20 max-w-7xl m-auto relative p-4">
      <div className=" mb-8 lg:mb-16 flex justify-center gap-2">
        <p className="text-[19px] font-medium lg:text-[33px] lg:font-bold text-center">
          {t("latestProducts1")}
        </p>
        <p className="text-[19px] font-medium lg:text-[33px] lg:font-bold text-center text-[#FAB21F]">
          {t("latestProducts2")}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        dir={isRTL ? "rtl" : "ltr"}
        breakpoints={{
          411: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.65 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.slug}>
            <div className="card w-[182px] h-[283px] border border-[#C5C5C5] lg:w-[305px] lg:h-[468px] lg:border-none bg-base-100 rounded-md ">
              {/* IMAGE */}
              <figure>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-[150px] lg:h-[268px] object-cover rounded-t-md hover:scale-110 transition"
                />
              </figure>

              <div className="card-body p-1 lg:p-3">
                {/* CATEGORY TITLE */}
                <div className="flex flex-row-reverse lg:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-start gap-2">
                    <img src="\SVGs\Polygon 33.svg" alt="polygon" />
                    <img
                      src={cat.logo}
                      alt={cat.name}
                      className="w-[18px] h-[22px] lg:w-[32px] lg:h-10 object-center "
                    />
                  </div>
                  <div className=" hidden lg:flex lg:text-[13px]">
                    {cat.name_en}
                  </div>
                  <p className="flex lg:hidden text-[13px]">{cat.name}</p>
                </div>

                <div className="divider my-2"></div>
                {/* card title */}
                <div>
                  <p className="hidden lg:flex text-[16px]">{cat.name}</p>
                  {/* BUTTON */}
                  <div className="card-actions justify-between items-center lg:leading-15">
                    <Link
                      href={`/products?lang=${locale}&&category=${cat.slug}`}
                      className="flex items-center gap-1 text-[13px] hover:text-[#005E8B]"
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center gap-8 mt-8" dir="rtl">
        <button
          ref={nextRef}
          className="p-3 rounded-sm border border-[#DEDEDE]
             text-[#DEDEDE]
             active:text-[#005E8B] active:border-[#005E8B]
             transition-all"
        >
          <IconArrowRight size={20} />
        </button>

        <button
          ref={prevRef}
          className="p-3 rounded-sm border 
             
             border-[#005E8B] text-[#005E8B]
             active:scale-95
             transition-all"
        >
          <IconArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}
