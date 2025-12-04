"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronsRight,
  IconDoor,
  IconDoorExit,
} from "@tabler/icons-react";

export default function NewsSwipper() {
  return (
    <div className="relative my-8  bg-zinc-200 py-8">
      <div className="absolute lg:w-[1220px] lg:h-[332px] bg-[#0C5273] bottom-0 left-0 right-0 mx-auto"></div>
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-black px-4">
        <p className="text-[33px] font-semibold mb-1">اخبار و مقالات</p>
        <p className="text-center text-[20px] max-w-md">
          آخرین مقالات مرتبط و اخبار پرشیا در را اینجا می‌توانید مشاهده کنید
        </p>
      </div>
      <div className="max-w-6xl mx-auto mb-4">
        {/* Swiper */}
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={3} // default mobile
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2.9,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 2.9,
              spaceBetween: 0,
            },
          }}
          className="w-full px-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <SwiperSlide key={i}>
              <div className="card lg:w-[360px] lg:h-[421px] bg-white border-2 rounded-md border-zinc-200 overflow-hidden">
                <figure>
                  <img
                    src="https://persiadoorco.com/wp-content/uploads/2025/03/%D8%B1%DB%8C%D9%88%D8%A7%D9%84%D9%88%DB%8C%D9%86%DA%AF1-1.jpg"
                    alt="اخبار"
                    className="w-full h-[421px] object-cover"
                  />
                </figure>
                <div className="p-4">
                  <p className="text-[#005E8B] text-[18px] font-medium mb-1">
                    شرکت در نمایشگاه بین‌المللی ساختمان سال
                  </p>
                  <p className="text-[13px] text-gray-600">
                    گزارش تصویری و خبری از حضور شرکت در نمایشگاه، معرفی محصولات
                    گزارش تصویری و خبری از حضور شرکت در نمایشگاه، معرفی محصولات
                    جدید ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8">
          <button className="p-3 border border-white hover:bg-zinc-200  rounded-md z-50">
            <IconArrowRight color="white" />
          </button>
          <button className="p-3 border border-white hover:bg-zinc-200  rounded-md z-50">
            <IconArrowLeft color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
