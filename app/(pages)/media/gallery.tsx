"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Lightbox from "react-awesome-lightbox";

interface Project {
  title: string;
  cover_image: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}

export default function Gallery() {
  const locale = useLocale();
  const t = useTranslations("Gallery");

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 9; // 3 columns * 3 rows

  // ------------------- Fetch page -------------------
  const fetchPage = async (page: number) => {
    try {
      setLoading(true);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/?lang=${locale}&page=${page}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");

      const data: ApiResponse = await res.json();

      setProjects(data.results);

      // Calculate total pages based on API count
      setTotalPages(Math.ceil(data.count / pageSize));

      // Empty check
      if (data.results.length === 0) {
        alert(locale === "fa" ? "هیچ پروژه‌ای یافت نشد." : "No projects found.");
      }
    } catch (error) {
      console.error(error);
      alert(
        locale === "fa"
          ? "خطا در بارگذاری پروژه‌ها"
          : "Failed to load projects"
      );
    } finally {
      setLoading(false);
    }
  };

  // Load when locale or page changes
  useEffect(() => {
    if (locale) fetchPage(currentPage);
  }, [locale, currentPage]);

  const images = projects.map((p) => ({
    url: p.cover_image,
    title: p.title,
  }));

  return (
    <div className="w-full p-4 max-w-7xl mx-auto">

      {/* ------------------- Loading Skeleton ------------------- */}
      {loading && projects.length === 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-[392px] h-[326px] bg-zinc-200 animate-pulse rounded-sm"
            ></div>
          ))}
        </div>
      )}

      {/* ------------------- Grid ------------------- */}
      {!loading && projects.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-sm overflow-hidden cursor-pointer w-[392px] h-[326px]"
              onClick={() => setOpenIndex(index)}
            >
              <div className="overflow-hidden hover:shadow-lg transition">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-[254px] object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-[16px] font-medium">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ------------------- Pagination (DaisyUI join) ------------------- */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <div className="join">

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`join-item btn ${
                  page === currentPage ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

          </div>
        </div>
      )}

      {/* ------------------- Lightbox ------------------- */}
      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}

      {/* Spinner for page change */}
      {loading && projects.length > 0 && (
        <div className="flex justify-center py-6">
          <div className="w-10 h-10 rounded-full border-4 border-zinc-300 border-t-zinc-700 animate-spin"></div>
        </div>
      )}
    </div>
  );
}
