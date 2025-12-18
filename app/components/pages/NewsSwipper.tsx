"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useLocale } from "next-intl";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import api from "@/app/lib/axios";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  cover_image: string;
  short_summary: string;
}

export default function NewsSwipper() {
  const locale = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get(`/v1/blog/${locale}/posts/`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [locale]);

  useEffect(() => {
    if (swiperRef && swiperRef.params && prevRef.current && nextRef.current) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="relative my-8 py-8 p-4 lg:p-0 lg:py-4 lg:my-0 bg-[#003F5D]">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-black px-4">
        <p className="text-[33px] font-semibold mb-1 text-white">
          {locale === "fa" ? "اخبار و مقالات" : "News & Articles"}
        </p>
        <p className="text-center text-[20px] text-white">
          {locale === "fa"
            ? "آخرین مقالات مرتبط و اخبار پرشیا در را اینجا می‌توانید مشاهده کنید"
            : "See the latest related articles and Persiadoor news here."}
        </p>
      </div>

      <div className="max-w-6xl mx-auto my-20 relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          className="w-full lg:h-[460px] px-4"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 2.9 },
          }}
        >
          {posts.map((post, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={post.id}>
                <Link href={`/media/${post.id}`}>
                  {/* div پس‌زمینه کارت حفظ شد */}
                  <div className="relative w-full h-[450px]">
                    <div
                      className={`card lg:w-[390px] lg:h-[421px] bg-white border-2 rounded-md border-zinc-200 transition-transform duration-500 ${
                        isActive ? " scale-100 shadow-xl z-10" : "scale-90"
                      }`}
                    >
                      <figure>
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-[293px] object-cover"
                        />
                      </figure>
                      <div className="p-4">
                        <p className="text-[#003F5D] text-[18px] font-medium mb-2">
                          {post.title}
                        </p>
                        <p className="text-[13px] text-gray-500 mb-1">
                          {post.short_summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-8" dir="rtl">
          <button
            ref={nextRef}
            className="p-3 border border-white hover:bg-zinc-200 rounded-md z-50"
          >
            <IconArrowRight color="white" />
          </button>

          <button
            ref={prevRef}
            className="p-3 border border-white hover:bg-zinc-200 rounded-md z-50"
          >
            <IconArrowLeft color="white" />
          </button>
        </div>

       {/* <div className="absolute h-[400px] w-7xl bg-[#003F5D] -bottom-10 left-1/2 -translate-x-1/2"></div> */}
       


      </div>
    </div>
  );
}
