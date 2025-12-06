"use client";

import api from "@/app/lib/axios";
import {
  IconArrowLeft,
  IconChevronsRight,
  IconDoorExit
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function ProductsSwipper() {
  const t = useTranslations("ProductsSwiper");

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/v1/products/");
        const list = res.data.results.slice(0, 8); // ⬅ limit to 8 products
        setProducts(list);
      } catch (err) {
        console.error("Error loading products", err);
      }
    };

    fetchProducts();
  }, []);

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
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="card w-[305px] h-[488px] bg-base-100 border rounded-md border-none">
              <figure>
                <img
                  src={
                    product.main_image
                      ? product.main_image
                      : "/images/noimage.jpg"
                  }
                  alt={product.name}
                  className="w-full h-[268px] object-cover rounded-t-md"
                />
              </figure>

              <div className="card-body p-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <IconDoorExit className="text-zinc-400" size={16} />
                    <IconChevronsRight className="text-yellow-600" size={16} />
                  </div>
                </div>

                <div className="divider my-2"></div>

                <div className="flex justify-end items-center gap-x-2">
                  <p className="card-title text-xs font-medium">
                    {product.name}
                  </p>
                 
                </div>

                <div className="card-actions justify-between items-center mt-2 text-zinc-500">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center gap-1"
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
