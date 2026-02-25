"use client";

import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";

type Slide = {
  year: string;
  title_fa: string;
  title_en: string;
  desc_fa: string;
  desc_en: string;
  image: string; // قرار بده: /images/.. یا url کامل
};

const slides: Slide[] = [
  {
    year: "1335",
    title_fa: "راه اندازی شیشه بری",
    title_en: "The Beginning – A Small Glass Workshop",
    desc_fa: "داستان شیشه بری در چهارراه پهلوی را شروع کردیم.",
    desc_en: "The story of Persiadoor began with a small glass-cutting workshop at Pahlavi Crossroad.",
    image: "/aboutUs_slider/شیشه-بری.jpg",
  },
  {
    year: "1356",
    title_fa: "تاسیس کالرگلس",
    title_en: "Establishment of ColorGlass",
    desc_fa: "با ورود به حوزه شیشه‌های سکوریت، نام کارگاه به کالرگلس تغییر دادیم.",
    desc_en: "With our entry into the field of tempered glass, we rebranded the workshop as ColorGlass.",
    image: "/aboutUs_slider/کارگاه-کالر-گلس-1.jpg",
  },
  {
    year: "1362",
    title_fa: "تاسیس دربیران",
    title_en: "Founding of Darbiran",
    desc_fa: "با اجرای درب، پارتیشن و نمای شیشه‌ای، دربیران را راه‌اندازی کردیم.",
    desc_en: "Expanding into doors, partitions, and glass facades, we established Darbiran.",
    image: "/aboutUs_slider/دربیران.jpg",
  },
  {
    year: "1368",
    title_fa: "تاسیس کارخانه درب ابزار",
    title_en: "Establishment of DarbAbzar Factory",
    desc_fa: "در کنار فعالیت دربیران، این کارخانه را به تولید یراق‌آلات اختصاص دادیم.",
    desc_en: "Alongside Darbiran, this factory was dedicated to the production of fittings and accessories.",
    image: "/aboutUs_slider/دب-ابزار.jpg",
  },
  {
    year: "1377",
    title_fa: "تاسیس کارخانه آرمان جام",
    title_en: "Establishment of ArmanJam Factory",
    desc_fa: "تولید شیشه‌های سکوریت را بعد از کسب تجارب چندین ساله از این کارخانه شروع کردیم.",
    desc_en: "After years of experience, we started producing tempered glass under Arman Jam.",
    image: "/aboutUs_slider/آرمان-جام.jpg",
  },
  {
    year: "1386",
    title_fa: "ثبت پرشیادُر",
    title_en: "Registration of Persiadoor Company",
    desc_fa: "با دریافت نمایندگی برند گزه آلمان، وارد صنعت درب و پنجره اتوماتیک شدیم.",
    desc_en: "By obtaining exclusive representation of GEZE Germany, we officially entered the industry of automatic doors and windows.",
    image: "/aboutUs_slider/پرشیادُر-تاسیس-1.jpg",
  },
  {
    year: "1389",
    title_fa: "حضور در نمایشگاه بین‌المللی صنعت ساختمان تهران",
    title_en: "Participation in Tehran International Building & Construction Industry Exhibition",
    desc_fa: "با همکاری کمپانی گزه و برای ‌بار نخست، محصولات مدرن این شرکت را به نمایش درآوردیم.",
    desc_en: "In cooperation with GEZE, we presented their modern products for the very first time in Iran.",
    image: "/aboutUs_slider/نمایشگاه-تهران.jpg",
  },
  {
    year: "1391",
    title_fa: "تاسیس کارگاه تولیدی شهرک صنعتی گلگون",
    title_en: "Establishment of Golgoun Industrial Town Workshop",
    desc_fa: "برای خدمت‌رسانی سریع‌تر در تهران و شهرهای اطراف، این کارگاه را راه‌اندازی کردیم.",
    desc_en: "To provide faster service in Tehran and nearby cities, we launched this production workshop.",
    image: "/aboutUs_slider/کارگاه-گلگون.jpg",
  },
  {
    year: "1393",
    title_fa: "همرمی محصولات منحصربه‌فرد و معرفی در نمایشگاه شیراز",
    title_en: "Participation in Shiraz International Building & Construction Industry Exhibition",
    desc_fa: "با هدف معرفی محصولات منحصربه‌فرد گزه آلمان و گسترش همکاری‌ها در ایران در این نمایشگاه شرکت کردیم.",
    desc_en: "With the goal of showcasing GEZE Germany’s unique products and strengthening collaborations in Iran, we took part in this exhibition.",
    image: "/aboutUs_slider/نمایشگاه-شیراز.jpg",
  },
  {
    year: "1397",
    title_fa: "تاسیس کارگاه تولیدی شهرک صنعتی بروجرد",
    title_en: "Establishment of Boroujerd Industrial Town Workshop",
    desc_fa: "با گسترش پروژه‌ها و نیاز به فضای بیشتر، این کارگاه را راه‌اندازی کردیم تا به تمام شهرها خدمات‌رسانی کنیم.",
    desc_en: "As projects expanded and more space was required, we set up this workshop to provide nationwide services.",
    image: "/aboutUs_slider/کارگاه-بروجرد-1.jpg",
  },
  {
    year: "1398",
    title_fa: "تاسیس واحد طراحی و توسعه (D&D)",
    title_en: "Establishment of D&D Unit",
    desc_fa: "با گسترش تقاضا و ورود به طراحی و اجرای سیستم‌ها، این واحد را راه‌اندازی کردیم.",
    desc_en: "With increasing demand and our entry into system design and implementation, we founded this specialized unit.",
    image: "/aboutUs_slider/تاسیس-واحد-dd-1.jpg",
  },
  {
    year: "1399",
    title_fa: "دریافت جایزه  Red Dot & Architecturepriz",
    title_en: "Winning the Red Dot & Architecture Prize",
    desc_fa: "در این مسابقه، برنده طراحی کافه دیدار با استراکچر تمام شیشه‌ای شدیم.",
    desc_en: "We were awarded for the design of Didar Café, featuring a fully glass structure.",
    image: "/aboutUs_slider/رد-دات.jpg",
  },
  {
    year: "1400",
    title_fa: "دریافت جایزه iF آلمان",
    title_en: "Winning the iF Award in Germany",
    desc_fa: "برنده مسابقه بین‌المللی طراحی برای کافه دیدار با استراکچر تمام شیشه‌ای شدیم.",
    desc_en: "We achieved recognition at this international design competition for the same café project.",
    image: "/aboutUs_slider/جرمن-اوارد-1.jpg",
  },
  {
    year: "1401",
    title_fa: "دریافت جایزه German Design Award",
    title_en: "Winning the German Design Award",
    desc_fa: "جایزه طراحی این مسابقه برای کافه دیدار را به‌دست آوردیم.",
    desc_en: "The Didar Café glass structure also earned us this prestigious design award.",
    image: "/aboutUs_slider/جرمن-اوارد-1.jpg",
  },
  {
    year: "1401",
    title_fa: "طراحی و تولید متعلقات سیستم‌های نوین درب و پنجره",
    title_en: "Design and Production of Modern Door & Window Components",
    desc_fa: "برای گسترش کسب و کار خود و ورود به بازار رقابتی درب و پنجره اتوماتیک، قطعات خاص و پیچیده را برای سیستم‌های نوین ساختمانی طراحی کردیم.",
    desc_en: "To expand our business and strengthen our presence in the competitive market of automatic doors and windows, we engineered complex and specialized components for advanced architectural systems.",
    image: "/aboutUs_slider/متعلقات.jpg",
  },
  {
    year: "1402",
    title_fa: "تاسیس واحد خدمات و پشتیبانی پرشیا سرویس",
    title_en: "Establishment of Persia Service Support Unit",
    desc_fa: "این واحد را به منظور توسعه کسب و کار و خدمات‌رسانی بیشتر به مشتریان راه‌اندازی کردیم.",
    desc_en: "To further develop our business and enhance customer service, we launched Persia Service.",
    image: "/aboutUs_slider/image.png",
  },
];


const AboutUsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainSwiperRef = useRef<any>(null);

   const locale = useLocale(); // <-- زبان فعلی

  const lang = locale === "fa"; // اگر زبان فارسی است

  return (
    <div>
      {/* Layout: سه ستون: تصویر | خط و سال | متن */}
      <div className="lg:max-w-7xl mx-auto" dir="rtl">
        <div className="grid grid-cols-12 gap-6 items-center max-w-7xl mx-auto">
{/* عکس بزرگ موبایل */}
<div className="col-span-12 lg:hidden">
            <Swiper
              modules={[Navigation, Thumbs, EffectFade]}
              onSwiper={(s) => (mainSwiperRef.current = s)}
              effect="fade"
              // navigation
              thumbs={{ swiper: thumbsSwiper }}
              speed={800}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              className="rounded-xl overflow-hidden"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[320px] md:h-[420px]">
                    <img
                      src={s.image}
                      alt={s.title_fa}
                      className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                      draggable={false}
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60 pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ستون سمت راست: عنوان و توضیحات */}
          <div className="col-span-12 lg:col-span-5">
            <div className="px-2 md:px-6">
              <h3 className="text-2xl text-[#FAB21F] lg:font-bold  lg:text-slate-800 mb-3">
                {lang ? slides[activeIndex]?.title_fa : slides[activeIndex]?.title_en}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang ? slides[activeIndex]?.desc_fa : slides[activeIndex]?.desc_en}
              </p>
            </div>
          </div>
          {/* ستون مرکزی - خط عمودی و سال */}
          <div className="col-span-12 lg:col-span-2 flex flex-col items-center">
            {/* سال بالای خط */}
            <div className="hidden lg:flex">
              <div className="relative mb-4">
              <span className={`absolute top-0 -left-3 text-3xl md:text-4xl font-extrabold text-[#f6a623] 
              ${!lang ? "en-numbers" : ""}`}>
                {slides[activeIndex]?.year}
              </span>
            </div>
            </div>

            {/* خط عمودی */}
            <div className="hidden lg:flex">
              <div className="relative -bottom-15 left-7 w-0">
              <div className=" w-1 bg-[#0C5273] h-[340px] md:h-[400px]"></div>
            </div>
            </div>
          </div>
          {/* عکس بزرگ دسکتاپ */}
          <div className="hidden lg:flex lg:col-span-5">
            <Swiper
              modules={[Navigation, Thumbs, EffectFade]}
              onSwiper={(s) => (mainSwiperRef.current = s)}
              effect="fade"
              // navigation
              thumbs={{ swiper: thumbsSwiper }}
              speed={800}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              className="rounded-xl overflow-hidden"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[320px] md:h-[420px]">
                    <img
                      src={s.image}
                      alt={s.title_fa}
                      className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                      draggable={false}
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60 pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* تایم‌لاین کوچک */}
        <div className="mt-14 relative">
          {/* خط افقی وسط */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 -translate-y-1/2 z-0">
            <div className="h-px bg-slate-300 w-full"></div>
          </div>

          <Swiper
            onSwiper={(s) => {
              setThumbsSwiper(s);
              // وقتی اسلایدر ساخته شد، فوراً اسلاید اول را وسط کن
              setTimeout(() => s.slideToLoop(0, 0, false), 50);
            }}
            onSlideChange={(s) => {
              setActiveIndex(s.realIndex);
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={40}
            speed={500}
            watchSlidesProgress={true}
            className="py-10 z-10"
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 15 },
              640: { slidesPerView: 5, spaceBetween: 25 },
              1024: { slidesPerView: 7.5, spaceBetween: 0 },
            }}
          >
            {slides.map((s, i) => {
              const active = i === activeIndex;
              return (
                <SwiperSlide key={i} className="flex justify-center">
                  <button
                    onClick={() => {
                      mainSwiperRef.current?.slideToLoop(i, 600, false);
                      thumbsSwiper?.slideToLoop(i, 600, false);
                      setActiveIndex(i);
                    }}
                    className="relative flex flex-col items-center bg-transparent"
                  >
                    {/* دایره عکس */}
                    <div
                      className={`relative rounded-full overflow-hidden transition-all duration-300 
                    ${active ? "w-28 h-28" : "w-20 h-20"}`}
                    >
                      <img
                        src={s.image}
                        className={`w-full h-full object-cover transition-all 
                      ${active ? "" : "grayscale"}`}
                      />

                      {active ? (
                        <span className="absolute inset-0 rounded-full border-4 border-[#0C5273]"></span>
                      ) : (
                        <span className="absolute inset-0 rounded-full ring-1 ring-slate-300 grayscale"></span>
                      )}
                    </div>

                    {/* سال */}
                    <div className={`mt-3 text-sm lg:text-slate-700 ${!lang ? "en-numbers" : ""}`}>{s.year}</div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSwiper;
