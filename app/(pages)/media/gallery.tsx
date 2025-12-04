"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Lightbox from "react-awesome-lightbox";

interface Project {
  title: string;
  cover_image: string;
}

export default function Gallery() {
  const locale = useLocale(); // "fa" or "en"
  const t = useTranslations();

  const [projects, setProjects] = useState<Project[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ------------------- Fetch Projects -------------------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/?lang=${locale}`
        );
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
        alert(t("Gallery.fetchError") || "Failed to load projects");
      }
    };

    if (locale) fetchProjects();
  }, [locale, t]);

  // Prepare images for Lightbox
  const images = projects.map((p) => ({
    url: p.cover_image,
    title: p.title,
  }));

  return (
    <div>
      <div className="w-full p-4 max-w-7xl mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-sm overflow-hidden cursor-pointer w-[392px] h-[326px]"
              onClick={() => setOpenIndex(index)}
            >
              <div className="overflow-hidden  hover:shadow-lg transition">
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

        {/* Lightbox */}
        {openIndex !== null && (
          <Lightbox
            images={images}
            startIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}

        {/* relative products */}
      </div>
      <div className="w-full lg:h-[485px] bg-[#003148] my-12">
        <h2 className="text-white lg:text-[25px] lg:font-bold text-center pt-8">{t("GalleryImage.relativeProducts")}</h2>
        {/* slider */}
      </div>
    </div>
  );
}
