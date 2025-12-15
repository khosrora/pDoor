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
    heading: "معرفی درب گردان",
    paragraph: `درب‌ گردان یک راهکار هوشمندانه در طراحی معماری است که امکان عبور و
              مرور راحت را فراهم می‌کند. این درب‌ها همچنین باعث افزایش امنیت
              ساختمان‌ها شده و در مصرف انرژی صرفه‌جویی می‌کنند. ساختار آن‌ها به
              گونه‌ای است که در یک محفظه گرد قرار گرفته و به افراد اجازه عبور و
              مرور می‌دهند. درب‌های گردان یا Revolving به‌طور معمول دارای سه یا
              چهار لنگه هستند، حول یک محور مرکزی عمودی می‌چرخند و می‌توانند
              به‌صورت دستی یا اتوماتیک عمل کنند. این درب‌ها در یک محفظه گرد قرار
              می‌گیرند و بازشوهایی در داخل و خارج برای عبور افراد دارند. درب‌های
              گردان ممکن است به‌صورت دستی یا اتوماتیک عمل کنند و اگر قطر آن‌ها
              زیاد باشد قابلیت عبور دادن چمدان‌های چرخ‌دار را نیز دارند. این
              درب‌ها بیشتر در ساختمان‌های عمومی بزرگ مانند هتل‌ها و مراکز تجاری
              نصب می‌شوند.`,
  },
  en: {
    heading: "Revolving Door Introduction",
    paragraph: `Revolving doors are an innovative solution in architectural design, allowing smooth passage.
                They also increase building security and save energy. Their structure is such that they
                are placed inside a circular enclosure, allowing people to pass through. Revolving doors
                typically have three or four wings, rotating around a central vertical axis, and can operate
                manually or automatically. They may also accommodate wheeled luggage if the diameter is large.
                These doors are commonly installed in large public buildings like hotels and shopping centers.`,
  },
};

export default function HotspotImage3() {
  const locale = useLocale();
  const lang: "fa" | "en" = locale === "fa" ? "fa" : "en";
  const hotspots = hotspotsData[lang];
  const content = contentText[lang];

  return (
    <div>
      <div className="flex items-center justify-center px-4 my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-4 ${lang === "fa" ? "text-right" : "text-left"}`}>
            <h1 className="text-2xl font-bold">{content.heading}</h1>
            <p className="text-gray-600 leading-9 text-[16px]">{content.paragraph}</p>
          </div>

          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            <img src="/images/doors/revolve-1.png" alt="Revolving Door" className="w-full h-auto" />

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
