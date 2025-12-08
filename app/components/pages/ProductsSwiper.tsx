"use client";

import api from "@/app/lib/axios";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronsRight,
  IconDoorExit,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Product {
  name: string;
  slug: string;
  main_image: string | null;

  category: {
    name: string;
    logo: string;
    slug: string;
    product_count: number;
  };

  brand: {
    name: string;
    logo: string;
    slug: string;
    product_count: number;
  };

  specifications: {
    field_name?: string | null;
    value: string | null;
    unit?: string | null;
    display_section: "highlight" | "detail" | "tag";
  }[];
}

export default function ProductsSwiper() {
  const t = useTranslations("ProductsSwiper");

  const [products, setProducts] = useState<Product[]>([]);

  // Navigation refs
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/v1/products/");
        const list = res.data.results.slice(0, 8);
        setProducts(list);
      } catch (err) {
        console.error("Error loading products", err);
      }
    };

    fetchProducts();
  }, []);

  // Bind navigation buttons
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

  return (
    <div className="my-8 max-w-7xl m-auto relative">
      <div className="mb-4">
        <p className="text-[33px] font-bold text-center">
          {t("latestProducts")}
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug}>
            <div className="card w-[305px] h-[488px] bg-base-100 rounded-md">
              {/* IMAGE */}
              <figure>
                <img
                  src={product.main_image || "/images/noimage.jpg"}
                  alt={product.name}
                  className="w-full h-[268px] object-cover rounded-t-md"
                />
              </figure>

              <div className="card-body p-3">
                {/* CATEGORY + BRAND */}
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <IconDoorExit size={16} className="text-zinc-400" />
                  <p>{product.category?.name}</p>
                  <IconChevronsRight size={16} className="text-yellow-600" />
                  <p>{product.brand?.name}</p>
                </div>

                <div className="divider my-2"></div>

                {/* PRODUCT NAME */}
                <p className="font-medium text-sm text-right">{product.name}</p>

                {/* HIGHLIGHT SPECS */}
                <div className="mt-2 space-y-1 text-xs text-zinc-500">
                  {product.specifications
                    .filter((s) => s.display_section === "highlight")
                    .map((spec, index) => (
                      <p key={index}>
                        {spec.field_name} : {spec.value}
                        {spec.unit ? ` ${spec.unit}` : ""}
                      </p>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="card-actions justify-between items-center mt-4">
                  <Link
                    href={`/products/${product.slug}`}
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
