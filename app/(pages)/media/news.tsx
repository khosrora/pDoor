"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import api from "@/app/lib/axios";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  short_summary: string;
  cover_image: string;
  author: {
    first_name: string;
    last_name: string;
  };
  view_count: number;
}

export default function News() {
  const t = useTranslations("NewsGrid");
  const locale = useLocale(); // "fa" | "en"

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const lang = locale === "fa" ? "fa" : "en";

        const res = await api.get(`/v1/blog/${lang}/posts/`);
        const data = Array.isArray(res.data) ? res.data : [];

        setPosts(data.slice(0, 6)); // only show 6 posts
      } catch (error) {
        console.error("Blog fetch error:", error);
      }
    };

    fetchBlogPosts();
  }, [locale]);
  console.log(posts);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-3 max-w-7xl mx-auto ">
      {posts.map((item) => (
        <div
          key={item.id}
          className="card active:text-[#007EBA] w-[392px] h-[413px] bg-base-100 border border-zinc-200"
        >
          {/* Image */}
          <figure>
            <img
              src={item.cover_image}
              alt={item.title}
              className="w-full h-[252px] object-cover"
            />
          </figure>

          <div className="card-body p-4">
            {/* Title */}
            <h2 className="card-title text-black text-[18px]">{item.title}</h2>

            {/* Author */}
            <p className="text-[13px] text-zinc-500">{item.short_summary}</p>

            {/* Row: Read More + Date */}
            <div className="card-actions flex justify-between items-center mt-2 text-zinc-500 text-[16px]">
              <Link
                href={`/media/${item.id}`}
                className="flex items-center gap-1"
              >
                {t("readMore")} <IconArrowLeft size={16} />
              </Link>

              <p className="text-[12px]">{t("item.date")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
