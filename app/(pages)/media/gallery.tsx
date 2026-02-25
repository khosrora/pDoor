"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Category {
  name: string;
  slug: string;
}

interface Project {
  title: string;
  slug: string;
  cover_image: string;
}

interface ProjectsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}

export default function Gallery() {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");
  const pageParam = Number(searchParams.get("page")) || 1;

  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [count, setCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  /* Load categories */
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/categories/?lang=${locale}`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data || []))
      .catch(console.error);
  }, [locale]);

  /* Load projects */
  useEffect(() => {
    setLoading(true);

    const categoryParam = activeCategory
      ? `&category=${activeCategory}`
      : "";

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/?lang=${locale}&page=${pageParam}${categoryParam}`
    )
      .then((res) => res.json())
      .then((data: ProjectsResponse) => {
        const results = data.results || [];

        setProjects(results);
        setCount(data.count || 0);

        if (data.count && results.length) {
          const pageSize = results.length;
          setTotalPages(Math.ceil(data.count / pageSize));
        } else {
          setTotalPages(1);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [locale, activeCategory, pageParam]);

  /* Prevent invalid page */
  useEffect(() => {
    if (!loading && pageParam > totalPages && totalPages > 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(totalPages));
      router.replace(`/media?${params.toString()}`, { scroll: false });
    }
  }, [loading, pageParam, totalPages, router, searchParams]);

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    if (activeCategory) {
      params.set("category", activeCategory);
    }

    router.push(`/media?${params.toString()}`, { scroll: false });
  };

  const handleTabClick = (slug: string | null) => {
    const params = new URLSearchParams();
    if (slug) params.set("category", slug);
    params.set("page", "1");

    router.push(`/media?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Tabs - Horizontal scroll on mobile */}
      <div className="mb-12">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <button
            onClick={() => handleTabClick(null)}
            className={`px-4 py-2 shrink-0 transition ${
              !activeCategory
                ? "border-b-2 border-[#005E8B] text-[#005E8B]"
                : "hover:text-[#005E8B]"
            }`}
          >
            همه
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleTabClick(cat.slug)}
              className={`px-4 py-2 shrink-0 transition ${
                activeCategory === cat.slug
                  ? "border-b-2 border-[#005E8B] text-[#005E8B]"
                  : "hover:text-[#005E8B]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[326px] bg-zinc-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="bg-zinc-100 rounded-sm overflow-hidden w-full h-[326px]
                  hover:bg-[#005E8B] hover:text-white transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.cover_image}
                    alt={project.title}
                    className="w-full h-[254px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[16px] font-medium">
                    {project.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {count > 0 && totalPages > 1 && pageParam <= totalPages && (
            <div className="flex justify-center items-center gap-2 mb-16">
              <button
                disabled={pageParam === 1}
                onClick={() => changePage(pageParam - 1)}
                className="px-3 py-1 disabled:opacity-40"
              >
                قبلی
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => changePage(page)}
                    className={`w-8 h-8 rounded border ${
                      page === pageParam
                        ? "bg-[#005E8B] text-white"
                        : "text-[#005E8B] hover:bg-zinc-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                disabled={pageParam === totalPages}
                onClick={() => changePage(pageParam + 1)}
                className="px-3 py-1 disabled:opacity-40"
              >
                بعدی
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}