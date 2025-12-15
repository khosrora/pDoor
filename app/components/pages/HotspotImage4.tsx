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
      description: "Main rail of the window system that bears its weight",
    },
    {
      id: 2,
      top: "50%",
      left: "55%",
      title: "Handle",
      description: "Special handle for opening and closing the window",
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
    heading: "معرفی پنجره اتوماتیک",
    paragraphs: [
      `سیستم‌های پنجره گزه باعث ایجاد هوای مطبوع و سالم در داخل ساختمان‌ها شده و ایمنی و راحتی را افزایش می‌دهند. هدف از تولید و استفاده از پنجره‌های هوشمند، کاهش مصرف انرژی است. همچنین تنوع ظاهری گسترده‌ این پنجره‌ها باعث شده است تا در تمامی ساختمان‌ها قابل نصب و استفاده باشند. فناوری هوشمند پنجره‌های گزه چه دستی باشد، چه اتوماتیک، به نیازهای مختلف در یک سیستم واحد پاسخ می‌دهد؛ چه برای تهویه روزانه هوا، چه در مواقع آتش‌سوزی. پنجره‌های گزه همه‌چیز را از سیستم‌های محرک تهویه طبیعی تا راهکارهای استخراج کامل دود و حرارت برای ایمنی و پیشگیری در برابر آتش پوشش می‌دهد.`,
      `درایوهای بازکننده الکتریکی شما را از باز و بسته کردن دستی پنجره‌ها بی‌نیاز می‌کند. به‌خصوص زمانی‌که باز کردن پنجره به‌صورت دستی به نیروی زیادی نیاز دارد یا امکان‌پذیر نیست. این‌صورت درایوهای بازکننده پنجره‌ها دو مزیت اصلی را ارائه می‌دهند: ایجاد ایمنی در مواقع خطر و تهویه راحت و آسان. پنجره‌های اتوماتیک با درایوهای زنجیری یا پیستونی به‌عنوان سیستم خروج دود و گرما در مواقع آتش‌سوزی عمل می‌کنند. همچنین این پنجره‌ها برای تهویه کنترل‌شده روزانه نیز به‌کار می‌روند.`,
      `تهویه طبیعی از طریق تهویه خودکار پنجره‌ها، باعث تمیز شدن هوای داخلی ساختمان‌ می‌شود. در مقایسه با سیستم‌های متداول تهویه مطبوع، روش تهویه خودکار گزینه‌ای کم‌مصرف‌تر برای تامین هوای تازه محیط است. در این روش، بدون استفاده از فَن و فقط از طریق پنجره‌ها تبادل هوا انجام شده و با تکیه بر اختلاف دما و فشار باد انجام می‌شود.`,
      `سردرد، خستگی یا آلرژی، کیفیت پایین و جابجا نشدن هوای داخل برای بسیاری از افراد ناخوشایند است. عایق‌کاری ساختمان‌های مدرن یا بازسازی‌شده، باعث می‌شود که تقریبا هوای تازه‌ وارد فضای داخل نشود و بهداشت هوای داخلی، آلودگی و ایجاد کپک را منجر خواهد شد. راه‌حل در بسیاری از موارد ساده است: تهویه طبیعی از طریق پنجره‌ها.`,
    ],
  },
  en: {
    heading: "Automatic Window Introduction",
    paragraphs: [
      `Automatic window systems provide comfortable and healthy indoor air while enhancing safety and convenience. 
      The goal of smart windows is energy efficiency. Their wide variety in design allows installation in almost any building. 
      Smart window technology, manual or automatic, meets diverse needs within a single system, whether for daily ventilation or emergency situations. 
      They cover everything from natural ventilation drives to full smoke and heat extraction for safety and fire prevention.`,
      `Electric actuators free you from manually opening and closing windows, especially when manual operation requires significant force or is not feasible. 
      These actuators provide two main benefits: safety in emergency situations and easy ventilation. 
      Automatic windows with chain or piston drives also function as smoke and heat exhaust systems during fires and provide controlled daily ventilation.`,
      `Natural ventilation through automated windows cleans indoor air. Compared to traditional HVAC systems, automatic window ventilation is a more energy-efficient method for providing fresh air. 
      Air exchange occurs through the windows, relying on temperature and pressure differences without using fans.`,
      `Poor air circulation can cause headaches, fatigue, or allergies. Modern or renovated buildings may prevent fresh air from entering indoor spaces, affecting air quality and potentially leading to mold. 
      In many cases, the solution is simple: natural ventilation through windows.`,
    ],
  },
};

export default function HotspotImage4() {
  const locale = useLocale();
  const lang: "fa" | "en" = locale === "fa" ? "fa" : "en";
  const hotspots = hotspotsData[lang];
  const content = contentText[lang];

  return (
    <div>
      <div className="flex items-center justify-center px-4 my-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className={`space-y-6 ${lang === "fa" ? "text-right" : "text-left"}`}>
            <h1 className="text-2xl font-bold">{content.heading}</h1>
            {content.paragraphs.map((p, index) => (
              <p key={index} className="text-gray-600 leading-9 text-[16px]">{p}</p>
            ))}
          </div>

          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            <img src="/images/doors/untitled.26.png" alt="Automatic Window" className="w-full h-auto" />

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
