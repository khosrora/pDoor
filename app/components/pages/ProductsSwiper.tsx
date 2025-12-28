"use client";

import api from "@/app/lib/axios";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FormOrderProducts from "@/app/components/pages/FormOrderProducts";
import Image from "next/image";

interface Accessory {
  name: string;
  slug: string;
  main_image: string;
  category: { name: string; slug: string };
  brand: { name: string; logo: string; slug: string };
}

export default function ProductsSwiper({
  slug,
  productId,
}: {
  slug: string;
  productId: number;
}) {
  const t = useTranslations("ProductsSwiper");
  const [accessories, setAccessories] = useState<Accessory[]>([]);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  useEffect(() => {
    async function fetchAccessories() {
      try {
        const res = await api.get(`/v1/products/${slug}/`);
        if (res.data?.accessories) {
          setAccessories(res.data.accessories);
        }
      } catch (error) {
        console.error("Accessories fetch error:", error);
      }
    }

    if (slug) fetchAccessories();
  }, [slug]);

  // Attach navigation
  useEffect(() => {
    if (swiperRef && prevRef.current && nextRef.current) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;

      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);

  // ---------------------------------------------------------------------
  // CONDITION: If no accessories → Show only FormOrderProducts
  // ---------------------------------------------------------------------

  if (!accessories.length) {
    return (
      <div className="my-10 max-w-7xl m-auto">
        <FormOrderProducts idProduct={productId} />
      </div>
    );
  }

  // ---------------------------------------------------------------------
  // If accessories exist → Show Swiper + Form
  // ---------------------------------------------------------------------

  return (
    <div className="my-10 max-w-7xl m-auto relative">
      <p className="text-[16px] font-bold mb-6 text-[#003F5D]">
        {t("latestProducts")}
      </p>

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 4 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {accessories.map((acc) => (
          <SwiperSlide key={acc.slug}>
            <Link
              href={`/products/${acc.slug}`}
              className="card w-[182px] h-[250px] lg:w-[288px] lg:h-[266px] bg-white rounded-md shadow-sm border border-zinc-200"
            >
              <figure>
                <img
                  src={acc.main_image || "/images/noimage.jpg"}
                  alt={acc.name}
                  className="w-full h-[210px] object-cover rounded-t-md"
                />
                {/* Brand Logo */}
                {acc.brand?.logo && (
                  <div className="absolute left-3 top-3">
                    <Image
                      src={acc.brand.logo}
                      width={50}
                      height={50}
                      alt={acc.brand.name || "brand"}
                    />
                  </div>
                )}
              </figure>
              <div className="mr-2 absolute bottom-18">
                <Image
                  alt="Categories"
                  width={64}
                  height={48}
                  src={"/images/Frame-1261157978.png"}
                  className="w-[100px] h-9"
                />
              </div>
              <div className="card-body p-0">
                <div className="divider m-0"></div>

                <Link href={"/"}>
                  <p className="font-semibold text-[14px] text-right p-3">
                    {acc.name}
                  </p>
                </Link>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center gap-8 mt-8">
        <button
          ref={nextRef}
          className="p-3 rounded-sm border border-[#DEDEDE]
             text-[#DEDEDE]
             active:text-[#636363] active:border-[#636363]
             transition-all"
        >
          <IconArrowRight size={20} />
        </button>

        <button
          ref={prevRef}
          className="p-3 rounded-sm border border-[#DEDEDE]
             text-[#DEDEDE]
             active:text-[#636363] active:border-[#636363]
             transition-all"
        >
          <IconArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}
