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
    <div 
    style={{
    backgroundImage: "url('/images/news.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="relative my-8 py-8 lg:pt-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-black px-4">
        <p className="text-[19px] lg:text-[33px] font-semibold mb-1 ">
          {locale === "fa" ? "اخبار و مقالات" : "News & Articles"}
        </p>
        <p className="text-center text-[16px] lg:text-[20px]">
          {locale === "fa"
            ? "آخرین مقالات مرتبط و اخبار پرشیا در را اینجا می‌توانید مشاهده کنید"
            : "Explore the latest related articles and Persiadoor news here."}
        </p>
      </div>

      <div className="max-w-7xl mx-auto lg:my-2 relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          className="w-full h-[300px] lg:h-[460px] "
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3 },
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
                      className={`card w-[223px] h-[284px] lg:w-[420px] lg:h-[421px] bg-white  transition-transform duration-500 ${
                        isActive ? " scale-100 shadow-xl z-10" : "scale-90"
                      }`}
                    >
                      <figure>
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-[168px] lg:h-[293px]"
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
            ref={prevRef}
            className="p-3 border border-[#003F5D] lg:border-white lg:hover:bg-zinc-200 rounded-md z-50"
          >
            <IconArrowRight className="text-[#003F5D] lg:text-white" />
          </button>

          <button
            ref={nextRef}
            className="p-3 border border-[#003F5D] lg:border-white lg:hover:bg-zinc-200 rounded-md z-50"
          >
            <IconArrowLeft  className="text-[#003F5D] lg:text-white" />
          </button>
        </div>

       <div className="lg:absolute lg:h-[400px] lg:w-[1300px] bg-[#003F5D] lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2"></div>
       


      </div>
    </div>
  );
}
