"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  slug: string;
  cover_image: string;
}

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

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
          slidesPerView={1.1} // mobile default
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 28,
            },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="card block bg-white border rounded-md border-zinc-200 shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <figure className="relative w-full h-44">
                  <Image
                    src={project.cover_image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="p-4">
                  <p className="text-[#005E8B] font-semibold mb-1">
                    {project.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
