"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function NewsSwipper() {
  return (
    <div className="my-8 bg-[#003F5D] py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-white px-4">
        <p className="text-lg font-semibold mb-1">اخبار و مقالات</p>
        <p className="text-center text-xs max-w-md">
          آخرین مقالات مرتبط و اخبار پرشیا در را اینجا می‌توانید مشاهده کنید
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.1} // default mobile
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
        }}
        className="w-full px-4"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SwiperSlide key={i}>
            <div className="card bg-white border-2 rounded-md border-zinc-200 overflow-hidden">
              <figure>
                <img
                  src="https://persiadoorco.com/wp-content/uploads/2025/03/%D8%B1%DB%8C%D9%88%D8%A7%D9%84%D9%88%DB%8C%D9%86%DA%AF1-1.jpg"
                  alt="اخبار"
                  className="w-full h-36 object-cover"
                />
              </figure>
              <div className="p-4">
                <p className="text-[#005E8B] font-semibold mb-1">
                  شرکت در نمایشگاه بین‌المللی ساختمان سال
                </p>
                <p className="text-xs text-gray-600">
                  گزارش تصویری و خبری از حضور شرکت در نمایشگاه، معرفی محصولات
                  جدید ...
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
