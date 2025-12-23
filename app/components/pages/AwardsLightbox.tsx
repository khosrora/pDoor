"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function AwardsLightbox() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    "/images/geze/awards-card-component-1.png",
    "/images/geze/awards-card-component-2.png",
    "/images/geze/awards-card-component.png",
  ];

  return (
    <>
      <div className="flex justify-around lg:max-w-3xl lg:mx-auto my-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              width={184}
              height={253}
              alt={`geze-award-${index + 1}`}
              className="lg:w-[184px] lg:h-[253px]"
            />
          </div>
        ))}
      </div>

      {activeImage && (
        <Lightbox
          image={activeImage}
          title="GEZE Award"
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
