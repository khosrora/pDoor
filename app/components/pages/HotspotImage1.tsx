"use client";

import { useLocale } from "next-intl";

const hotspotsData = {
  fa: [
    {
      id: 1,
      top: "20%",
      left: "45%",
      title: "ریل بالایی",
      description: "ریل اصلی حرکت درب که وزن درب را تحمل می‌کند",
    },
    {
      id: 2,
      top: "50%",
      left: "55%",
      title: "دستگیره",
      description: "دستگیره مخصوص باز و بسته کردن درب",
    },
    {
      id: 3,
      top: "75%",
      left: "48%",
      title: "فریم پایینی",
      description: "پروفیل پایینی جهت افزایش استحکام",
    },
  ],
  en: [
    {
      id: 1,
      top: "20%",
      left: "45%",
      title: "Top Rail",
      description: "Main rail of the door that bears its weight",
    },
    {
      id: 2,
      top: "50%",
      left: "55%",
      title: "Handle",
      description: "Special handle for opening and closing the door",
    },
    {
      id: 3,
      top: "75%",
      left: "48%",
      title: "Bottom Frame",
      description: "Lower profile for increasing strength",
    },
  ],
};

const contentText = {
  fa: {
    heading: "معرفی درب کشویی",
    paragraph: `درب‌های کشویی یکی از انواع درب‌ها هستند که به دلیل طراحی خاص و
              کارایی بالا، در مکان‌های مختلف مورد استفاده قرار می‌گیرند. این
              درب‌ها به دو نوع دستی و اتوماتیک تقسیم می‌شوند و هر یک مزایای خاص
              خود را دارند.درب‌های کشویی دستی به صورت دستی باز و بسته می‌شوند و
              معمولاً از جنس چوب، شیشه یا فلز ساخته می‌شوند. درب‌های کشویی
              اتوماتیک به طور خودکار با استفاده از حسگرهای حرکتی یا دکمه‌های
              فشاری باز و بسته می‌شوند.`,
  },
  en: {
    heading: "Sliding Door Introduction",
    paragraph: `Sliding doors are a type of door that, due to their unique design and
                high efficiency, are used in various places. They come in manual
                and automatic types, each having specific advantages. Manual sliding
                doors are opened and closed by hand, usually made of wood, glass, or metal.
                Automatic sliding doors operate automatically using motion sensors or push buttons.`,
  },
};

export default function HotspotImage1() {
  const locale = useLocale(); // get current locale
  const lang: "fa" | "en" = locale === "fa" ? "fa" : "en"; // map locale to our data
  const hotspots = hotspotsData[lang];
  const content = contentText[lang];

  return (
    <div>
      <div className="flex items-center justify-center px-4 lg:my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-4 ${lang === "fa" ? "text-right" : "text-left"}`}>
            <h1 className="text-[16px] lg:text-2xl lg:font-bold">{content.heading}</h1>
            <p className="text-gray-600 leading-9 text-[14px] lg:text-[16px]">{content.paragraph}</p>
          </div>

          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            <img src="/images/doors/slide.1isde.png" alt="Sliding Door" className="w-full h-auto" />

            {hotspots.map((spot) => (
              <div key={spot.id} className="absolute group" style={{ top: spot.top, left: spot.left }}>
                <span className="block w-3 h-3 bg-orange-400 rounded-full cursor-pointer"></span>

                <div
                  className={`absolute ${lang === "fa" ? "right-6" : "left-6"} top-1/2 -translate-y-1/2
                          w-48 p-3 text-sm bg-gray-900 text-white rounded-lg
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-all duration-200 z-10`}
                >
                  <p className="font-semibold mb-1">{spot.title}</p>
                  <p className="text-xs leading-relaxed">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
