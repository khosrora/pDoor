"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "",
  "/images/customers/image-866.png",
  "",
  "/images/customers/image-861_2.png",
  "/images/customers/image-863.png",
  "",
  "/images/customers/image-859_2.png",
  "",
  "/images/customers/image-864.png",
  "/images/customers/image-862_2.png",
  "/images/customers/image-865.png",
  "/images/customers/image-871.png",
  "/images/customers/image-870.png",
  "/images/customers/image-860_2.png",
  "/images/customers/image-858_2.png",
  "/images/customers/image-857_2.png",
  "",
  "/images/customers/image-868.png",
  "",
  "/images/customers/image-869.png",
  "",
  "/images/customers/image-867.png",
  "",
  "",
];

function CustomerList() {
  const t = useTranslations("HomePage");

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const validIndexes = images
        .map((src, i) => (src ? i : null))
        .filter((i) => i !== null) as number[];

      const randomIndex =
        validIndexes[Math.floor(Math.random() * validIndexes.length)];

      // reset قبلی
      if (activeIndex.current !== null) {
        gsap.to(itemRefs.current[activeIndex.current], {
          scale: 1,
          filter: "grayscale(1)",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      // انیمیشن جدید
      gsap.to(itemRefs.current[randomIndex], {
        scale: 1.6,
        filter: "grayscale(0)",
        duration: 0.5,
        ease: "power3.out",
      });

      activeIndex.current = randomIndex;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 mb-20 lg:flex-row lg:justify-around lg:items-center lg:mt-60">
      {/* Text */}
      <div className="flex flex-col items-start lg:text-[33px]">
        <p className="text-[#FAB21F] font-bold">
          {t("customers.titleHighlight")}
        </p>
        <p className="font-bold">{t("customers.titleRest")}</p>
      </div>

      {/* Mobile */}
      <Image
        src="/images/Customers_mobile (2).png"
        width={1000}
        height={1000}
        alt={t("customers.alt")}
        className="mt-8 lg:hidden"
      />

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-8 lg:grid-rows-3 lg:gap-6 mt-8 lg:mr-16">
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="w-[66px] h-[66px] flex items-center justify-center overflow-hidden grayscale"
          >
            {src && (
              <img
                src={src}
                alt={`logo-${index}`}
                className="w-[64px] h-[64px] object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
