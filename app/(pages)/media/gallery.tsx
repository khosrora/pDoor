"use client";

import React, { useState } from "react";

import Lightbox from "react-awesome-lightbox";

const images = [
  {
    url: "https://persiadoorco.com/wp-content/uploads/2025/08/7d.jpg",
    title: "Image 1",
  },
  {
    url: "https://persiadoorco.com/wp-content/uploads/2025/08/9d.jpg",
    title: "Image 2",
  },
  {
    url: "https://persiadoorco.com/wp-content/uploads/2025/08/3d.jpg",
    title: "Image 3",
  },
  {
    url: "https://persiadoorco.com/wp-content/uploads/2025/07/1d-37.jpg",
    title: "Image 4",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full p-4">
      <div role="tablist" className="tabs tabs-border my-4">
        <p role="tab" className={`tab tab-active`}>
          همه
        </p>
        <p role="tab" className={`tab`}>
          بانک ها
        </p>
        <p role="tab" className={`tab`}>
          ترمینال ها
        </p>
        <p role="tab" className={`tab`}>
          فرودگاه ها
        </p>
        <p role="tab" className={`tab`}>
          کارخانه ها
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-zinc-100 rounded-xl"
            onClick={() => setOpenIndex(index)}
          >
            <div
              key={index}
              className="cursor-pointer group overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <p>{img.title}</p>
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
    </div>
  );
}
