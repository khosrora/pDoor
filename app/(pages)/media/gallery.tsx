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
  results: Project[];
}

export default function Gallery() {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");

  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  /* Load categories */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/projects/categories/?lang=${locale}`)
      .then((res) => res.json())
      .then((data) => setCategories(data || []))
      .catch(console.error);
  }, [locale]);

  /* Load projects (API-based filtering) */
  useEffect(() => {
    setLoading(true);

    const categoryParam = activeCategory
      ? `&category=${activeCategory}`
      : "";

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/?lang=${locale}${categoryParam}`
    )
      .then((res) => res.json())
      .then((data: ProjectsResponse) => setProjects(data.results || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [locale, activeCategory]);

  const handleTabClick = (slug: string | null) => {
    if (!slug) {
      router.push("/media", { scroll: false });
    } else {
      router.push(`/media?category=${slug}`, { scroll: false });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => handleTabClick(null)}
          className={`px-4 py-2  transition
            ${
              !activeCategory
                ? "border-b-3 border-[#005E8B] text-[#005E8B]e"
                : " hover:bg-zinc-200"
            }`}
        >
          همه
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleTabClick(cat.slug)}
            className={`px-4 py-2 transition
              ${
                activeCategory === cat.slug
                  ? "  border-b-3 border-[#005E8B] text-[#005E8B]"
                  : " hover:bg-zinc-200"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-[392px] h-[326px] bg-zinc-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bg-zinc-100 rounded-sm overflow-hidden w-[392px] h-[326px]
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
                <p className="text-[16px] font-medium">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
