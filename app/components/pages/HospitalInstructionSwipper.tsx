"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type Step = {
  key: string;
  title: string;
  image: string;
};

export default function HospitalProcessSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps: Step[] = [
    { key: "consulting", title: "مشاوره", image: "/images/consulting.jpg" },
    { key: "problem", title: "شناسایی مسئله", image: "/images/problem.jpg" },
    { key: "solution", title: "راه حل", image: "/images/solution.jpg" },
    { key: "execution", title: "اجرا", image: "/images/execution.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-center text-2xl font-bold mb-12">
        راهکارهای بیمارستانی
      </h2>

      {/* Timeline */}
      <div className="relative flex items-center justify-between mb-16">

        {/* Line */}
        <div className="absolute left-0 right-0 h-[2px] bg-zinc-200 top-1/2 -translate-y-1/2" />

        {/* End Diamond */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 z-20">
          <div className="w-10 h-10 bg-blue-700 rotate-45" />
        </div>

        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isPassed = index <= activeIndex;

          return (
            <div
              key={step.key}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Step Diamond */}
              <div
                className={`w-4 h-4 rotate-45 transition-all duration-300 ${
                  isPassed ? "bg-blue-700" : "bg-zinc-300"
                }`}
              />

              {/* Label */}
              <span
                className={`mt-4 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-blue-700 font-semibold"
                    : "text-zinc-400"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1.3}
        centeredSlides
        spaceBetween={24}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="pb-10"
      >
        {steps.map((step) => (
          <SwiperSlide key={step.key}>
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 scale-95 swiper-slide-active:scale-100">
              <Image
                src={step.image}
                alt={step.title}
                width={800}
                height={500}
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">
                  {step.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
