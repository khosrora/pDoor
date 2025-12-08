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
  author?: {
    first_name: string;
    last_name: string;
  };
  view_count: number;
}

export default function NewsSwipper() {
  const locale = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperRef, setSwiperRef] = useState<any>(null);

  // Fetch posts
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

  // Fix Swiper button bind after mount
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

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="relative my-8 bg-zinc-200 py-8">
      <div className="absolute lg:w-[1220px] lg:h-[332px] bg-[#0C5273] bottom-0 left-0 right-0 mx-auto"></div>

      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-black px-4">
        <p className="text-[33px] font-semibold mb-1">
          {locale === "fa" ? "اخبار و مقالات" : "News & Articles"}
        </p>
        <p className="text-center text-[20px] max-w-md">
          {locale === "fa"
            ? "آخرین مقالات مرتبط و اخبار پرشیا در را اینجا می‌توانید مشاهده کنید"
            : "See the latest related articles and Persiadoor news here."}
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-4">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={3}
          className="w-full px-4"
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 2.9 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="card lg:w-[360px] lg:h-[421px] bg-white border-2 rounded-md border-zinc-200 overflow-hidden">
                <figure>
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-[240px] object-fill"
                  />
                </figure>
                <div className="p-4">
                  <p className="text-[#005E8B] text-[18px] font-medium mb-2">
                    {post.title}
                  </p>

                  <p className="text-[13px] text-gray-500 mb-1">
                    {post.short_summary}
                  </p>

                  <Link
                    href={`/media/${post.id}`}
                    className="text-[13px] text-gray-600"
                  >
                    {locale === "fa"
                      ? "مشاهده بیشتر"
                      : "Click to see more details..."}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
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
      </div>
    </div>
  );
}
