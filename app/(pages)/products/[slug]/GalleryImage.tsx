"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "yet-another-react-lightbox/styles.css";

type ProductImage = {
  id: number;
  image: string;
  alt_text: string;
  is_main: boolean;
  order: number;
};

interface Props {
  images: ProductImage[];
}

function GalleryImage({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sort images
  const sorted = [...images].sort((a, b) => {
    if (a.is_main) return -1;
    if (b.is_main) return 1;
    return a.order - b.order;
  });

  return (
    <div className="min-w-0 allprojects">
      {/* Main slider */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sorted.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.alt_text}
              onClick={() => {
                setActiveIndex(index);
                setLightboxOpen(true);
              }}
              className="lg:h-[329px] lg:w-[600px] cursor-zoom-in object-contain border rounded-md border-zinc-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={1}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4"
      >
        {sorted.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.alt_text}
              onClick={() => {
                setActiveIndex(index);
                setLightboxOpen(true);
              }}
              className="lg:w-[107px] lg:h-[101px] cursor-zoom-in object-cover rounded-md border border-zinc-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeIndex}
        plugins={[Zoom]}
        slides={sorted.map((img) => ({
          src: img.image,
          alt: img.alt_text,
        }))}
      />
    </div>
  );
}

export default GalleryImage;
