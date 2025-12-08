"use client";

import api from "@/app/lib/axios";
import { IconArrowLeft, IconChevronsLeft } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <div className="my-8 max-w-7xl m-auto">
      <div className="mb-4">
        <p className="text-[33px] font-bold text-center">
          {t("latestProducts")}
        </p>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
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
                      className="w-5 h-5 object-contain"
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
                    <IconArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
