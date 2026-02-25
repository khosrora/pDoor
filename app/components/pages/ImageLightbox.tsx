"use client";

import { useState } from "react";

export default function ImageLightbox() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    "/images/20250602_GEZE_Certificate-of-Authorization-no-pass-768x1135.jpg",
    "/images/license-high-768x1132.jpg",
  ];

  return (
    <>
      {/* Thumbnails */}
      <div className="mt-4">
        <div className="w-[150px] h-[250px] lg:w-[200px] lg:h-[300px] flex gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              onClick={() => setActiveImage(src)}
              className="w-full h-full border cursor-pointer object-cover"
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        >
          <img
            src={activeImage}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </>
  );
}
