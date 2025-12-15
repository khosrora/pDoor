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
    heading: "معرفی درب لولایی",
    paragraph: `درب لولایی یکی از پرکاربردترین درب‌ها در ساختمان‌های اداری و
              همچنین مسکونی است. با این‌حال ممکن است با این نوع درب آشنا نباشید.
              درب لولایی به درب‌هایی گفته می‌شود که لولاهای آن در کنار درب نصب
              شده و به‌سمت داخل یا خارج باز می‌شود. این نوع درب ساختار ساده و
              نصب آسانی دارد. درب‌های لولایی اتوماتیک را می‌توان به‌صورت تک‌لنگه
              و دو‌لنگه استفاده کرد. به درب لولایی، درب بازشو هم می‌گوییم. این
              درب شامل یک پنل است که از یک‌طرف به‌عنوان لولا عمل کرده و طرف دیگر
              آن باز و بسته می‌شود؛ در حالی‌که درب دو‌لنگه دو پنل دارد که هر
              کدام لولای خود را دارند و در دو جهت باز می‌شوند. درب‌های لولایی دو
              نوع یک‌طرفه و دو‌طرفه دارند. درب‌های یک‌طرفه فقط در یک جهت باز
              می‌شوند و درب‌ دو‌طرفه در هر دو جهت.`,
  },
  en: {
    heading: "Hinged Door Introduction",
    paragraph: `Hinged doors are among the most commonly used doors in office and residential buildings.
                However, you may not be familiar with this type. A hinged door has hinges installed
                on the side, allowing it to open inward or outward. This type of door is simple in structure
                and easy to install. Automatic hinged doors can be single or double leaf. A hinged door
                consists of one panel that acts as a hinge on one side and opens/closes on the other side;
                while a double-leaf hinged door has two panels, each with its own hinge, opening in two directions.
                Hinged doors can be one-way or two-way. One-way doors open in only one direction, 
                while two-way doors open in both directions.`,
  },
};

export default function HotspotImage2() {
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
            <img src="/images/doors/fold.-one-side-2.png" alt="Hinged Door" className="w-full h-auto" />

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
