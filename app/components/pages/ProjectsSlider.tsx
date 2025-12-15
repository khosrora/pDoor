"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";

interface Project {
  title: string;
  slug: string;
  cover_image: string;
}

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
   const router = useRouter();
  if (!projects || projects.length === 0) return null;

 

  const images = projects.map((p) => ({
    url: p.cover_image,
    title: p.title,
  }));

  return (
    <div className="my-8 bg-[#003F5D] py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-white px-4">
        <p className="text-lg font-semibold mb-1">پروژه‌ها</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: 16 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
         className="w-full projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug}>
              <div
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="group card lg:h-[326px] bg-white border border-zinc-200 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              >
                {/* Image */}
                <figure className="relative w-full  overflow-hidden lg:h-[254px]">
                  <Image
                    src={project.cover_image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 "
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition"
                  >
                    <IconSearch size={36} className="text-white" />
                  </div>
                </figure>

                {/* Title */}
                <div className="p-4">
                  <p className="text-[#005E8B] font-semibold mb-1">
                    {project.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
    </div>
  );
}
