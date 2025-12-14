"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface Project {
  title: string;
  slug: string;
  cover_image: string;
}

interface ApiResponse {
  count: number;
  results: Project[];
}

export default function Gallery() {
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/?lang=${locale}`
    )
      .then((res) => res.json())
      .then((data: ApiResponse) => setProjects(data.results))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-[392px] h-[326px] bg-zinc-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="bg-zinc-100 rounded-sm overflow-hidden w-[392px] h-[326px] hover:bg-[#005E8B] hover:text-white"
        >
          <div className="overflow-hidden hover:shadow-lg transition">
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
  );
}
