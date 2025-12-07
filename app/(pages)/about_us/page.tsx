"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import TeamSection from "@/app/components/pages/TeamSection";
import Image from "next/image";
import { IconDownload, IconPlus } from "@tabler/icons-react";

type Slide = {
  year: string;
  title: string;
  desc: string;
  image: string; // قرار بده: /images/.. یا url کامل
};

const slides: Slide[] = [
  {
    year: "1335",
    title: "راه اندازی شیشه بری",
    desc: "داستان شیشه بری در چهارراه پهلوی را شروع کردیم.  ",
    image: "/aboutUs_slider/شیشه-بری.jpg",
  },
  {
    year: "1356",
    title: "تاسیس کالرگلس",
    desc: "با ورود به حوزه شیشه‌های سکوریت، نام کارگاه به کالرگلس تغییر دادیم.",
    image: "/aboutUs_slider/کارگاه-کالر-گلس-1.jpg",
  },
  {
    year: "1362",
    title: "تاسیس دربیران",
    desc: "با اجرای درب، پارتیشن و نمای شیشه‌ای، دربیران را راه‌اندازی کردیم.",
    image: "/aboutUs_slider/دربیران.jpg",
  },
  {
    year: "1368",
    title: "تاسیس کارخانه درب ابزار",
    desc: "در کنار فعالیت دربیران، این کارخانه را به تولید یراق‌آلات اختصاص دادیم.",
    image: "/aboutUs_slider/دب-ابزار.jpg",
  },
  {
    year: "1377",
    title: "تاسیس کارخانه آرمان جام",
    desc: "تولید شیشه‌های سکوریت را بعد از کسب تجارب چندین ساله از این کارخانه شروع کردیم.",
    image: "/aboutUs_slider/آرمان-جام.jpg",
  },
  {
    year: "1386",
    title: "ثبت پرشیادُر",
    desc: "با دریافت نمایندگی برند گزه آلمان، وارد صنعت درب و پنجره اتوماتیک شدیم",
    image: "/aboutUs_slider/پرشیادر-تاسیس-1.jpg",
  },
  {
    year: "1389",
    title: "حضور در نمایشگاه بین‌المللی صنعت ساختمان تهران",
    desc: "با همکاری کمپانی گزه و برای ‌بار نخست، محصولات مدرن این شرکت را به نمایش درآوردیم.",
    image: "/aboutUs_slider/نمایشگاه-تهران.jpg",
  },
  {
    year: "1391",
    title: "تاسیس کارگاه تولیدی شهرک صنعتی گلگون",
    desc: "برای خدمت‌رسانی سریع‌تر در تهران و شهرهای اطراف، این کارگاه را راه‌اندازی کردیم.",
    image: "/aboutUs_slider/کارگاه-گلگون.jpg",
  },
  {
    year: "1393",
    title: "همرمی محصولات منحصربه‌فرد و معرفی در نمایشگاه شیراز",
    desc: "با هدف معرفی محصولات منحصربه‌فرد گزه آلمان و گسترش همکاری‌ها در ایران در این نمایشگاه شرکت کردیم.",
    image: "/aboutUs_slider/نمایشگاه-شیراز.jpg",
  },
  {
    year: "1397",
    title: "تاسیس کارگاه تولیدی شهرک صنعتی بروجرد",
    desc: "با گسترش پروژه‌ها و نیاز به فضای بیشتر، این کارگاه را راه‌اندازی کردیم تا به تمام شهرها خدمات‌رسانی کنیم.",
    image: "/aboutUs_slider/کارگاه-بروجرد-1.jpg",
  },
  {
    year: "1398",
    title: "تاسیس واحد طراحی و توسعه (D&D)",
    desc: "با گسترش تقاضا و ورود به طراحی و اجرای سیستم‌ها، این واحد را راه‌اندازی کردیم.",
    image: "/aboutUs_slider/تاسیس-واحد-dd-1.jpg",
  },
  {
    year: "1399",
    title: "دریافت جایزه  Red Dot & Architecturepriz",
    desc: "در این مسابقه، برنده طراحی کافه دیدار با استراکچر تمام شیشه‌ای شدیم.",
    image: "/aboutUs_slider/رد-دات.jpg",
  },
  {
    year: "1400",
    title: "دریافت جایزه iF آلمان",
    desc: "برنده مسابقه بین‌المللی طراحی برای کافه دیدار با استراکچر تمام شیشه‌ای شدیم.",
    image: "/aboutUs_slider/جرمن-اوارد-1.jpg",
  },
  {
    year: "1401",
    title: "دریافت جایزه German Design Award",
    desc: "جایزه طراحی این مسابقه برای کافه دیدار را به‌دست آوردیم.",
    image: "/aboutUs_slider/جرمن-اوارد-1.jpg",
  },
  {
    year: "1401",
    title: "طراحی و تولید متعلقات سیستم‌های نوین درب و پنجره",
    desc: "برای گسترش کسب و کار خود و ورود به بازار رقابتی درب و پنجره اتوماتیک، قطعات خاص و پیچیده را برای سیستم‌های نوین ساختمانی طراحی کردیم.",
    image: "/aboutUs_slider/متعلقات.jpg",
  },
  {
    year: "1402",
    title: "تاسیس واحد خدمات و پشتیبانی پرشیا سرویس",
    desc: "این واحد را به منظور توسعه کسب و کار و خدمات‌رسانی بیشتر به مشتریان راه‌اندازی کردیم.",
    image: "/aboutUs_slider/image.png",
  },
];

export default function TimelineSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainSwiperRef = useRef<any>(null);

  return (
    <div dir="rtl" className="w-full  mx-auto px-4 py-12 my-20">
      {/* Layout: سه ستون: تصویر | خط و سال | متن */}
      <div className="lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center max-w-7xl mx-auto">
          {/* ستون سمت راست: عنوان و توضیحات */}
          <div className="col-span-12 lg:col-span-5">
            <div className="px-2 md:px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                {slides[activeIndex]?.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {slides[activeIndex]?.desc}
              </p>
            </div>
          </div>
          {/* ستون مرکزی - خط عمودی و سال */}
          <div className="col-span-12 lg:col-span-2 flex flex-col items-center">
            {/* سال بالای خط */}
            <div className="relative mb-4">
              <span className="absolute top-0 -left-3 text-3xl md:text-4xl font-extrabold text-[#f6a623]">
                {slides[activeIndex]?.year}
              </span>
            </div>

            {/* خط عمودی */}
            <div className="relative -bottom-15 left-7 w-0">
              <div className=" w-1 bg-[#0C5273] h-[340px] md:h-[400px]"></div>
            </div>
          </div>
          {/* عکس بزرگ (سمت چپ در تصویر: در RTL این ستون اول قرار می‌گیرد) */}
          <div className="col-span-12 lg:col-span-5">
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
                      alt={s.title}
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
                    <div className="mt-3 text-sm text-slate-700">{s.year}</div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* بخش ارزش‌ها، چشم‌انداز و ماموریت */}
      <section
        dir="rtl"
        className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col"
      >
        {/* ردیف بالا: ارزش برند و چشم‌انداز */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 mb-10">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 ">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
                چشم انداز ما{" "}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                شرکت درب اتوماتیک پرشیا با حفظ ثبات در کیفیت خدمات و محصولات،
                همواره نسبت به تحولات و بازارهای جدید کنجکاو و پویا است
              </p>
            </div>
            <div className=" flex justify-center items-start">
              <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\binoculars_4771110 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 ">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                ارزش برند
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                شرکت درب اتوماتیک پرشیا با حفظ ثبات در کیفیت خدمات و محصولات،
                همواره نسبت به تحولات و بازارهای جدید کنجکاو و پویا است
              </p>
            </div>
            <div className=" flex justify-center items-start">
              <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\mountain_16899770 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ردیف پایین: ماموریت */}
        <div className="flex flex-col items-center text-center max-w-[460px] mx-auto">
          <div className="flex justify-center items-start">
            <div className="relative w-24 h-24 flex items-center justify-center bg-[#005E8B] text-white rounded-md transform rotate-45 shadow-md">
              <div className="transform -rotate-45 flex items-center justify-center">
                <img src="\SVGs\target-two.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-base font-semibold text-[#005E8B] my-6">
              ماموریت ما
            </h5>
            <p className="text-slate-600 leading-relaxed">
              ما در شرکت درب اتوماتیک پرشیا به نحوه تعامل با مشتریان خود اهمیت
              ویژه‌ای می‌دهیم. از مراحل اولیه پروژه‌ها، با مشتریان در ارتباط
              هستیم و در تمام مراحل زندگی ساختمان، نقش فعالی ایفا می‌کنیم
            </p>
          </div>
        </div>
      </section>

      {/* our team */}
      <div className="lg:h-[1147px] w-full bg-zinc-100 p-8 ">
        <p className="flex justify-center gap-2 font-bold text-[28px] my-4">
          <span className="text-[#FAB21F]">تیم</span>
          پرشیادر
        </p>
        <TeamSection />

        <div className="flex justify-around items-center bg-zinc-50 lg:w-[732px] lg:h-[113px] my-10 mx-auto border border-1 border-zinc-200 rounded-md">
          <p className="text-[#FAB21F] text-[25px] font-semibold">
            به پرشیادر بپیوندید
          </p>
          <button className="border border-1 border-[#005E8B] text-[#005E8B] py-2 px-4 rounded-md">
            موقعیت های شغلی
          </button>
        </div>
      </div>

      {/* our service */}
      <div className="flex flex-col w-full mx-auto mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 mb-10 ">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 bg-zinc-100 py-8">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
                خدمات ما{" "}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center text-[16px] ">
                پرشیادُر برای ارایه ی تخصصی خدمات خود واحد پرشیا سرویس را راه
                اندازی کرده است تا امور خدماتی را به بهترین شکل انجام دهد
              </p>
            </div>
            <div className=" flex justify-center items-start relative -left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\settings_8941361 1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 relative top-25 bg-zinc-100 py-2.5">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                ارزش برند
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                شرکت درب اتوماتیک پرشیا با حفظ ثبات در کیفیت خدمات و محصولات،
                همواره نسبت به تحولات و بازارهای جدید کنجکاو و پویا است
              </p>
            </div>
            <div className=" flex justify-center items-start relative left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\certificate.svg" alt="گواهینامه" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 my-10">
          {/* ستون چپ (ارزش برند) */}
          <div className="flex items-center gap-4 bg-zinc-100 py-8">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4 ">
                خدمات ما{" "}
              </h4>
              <p className="text-slate-600 leading-relaxed text-center text-[16px] ">
                پرشیادُر برای ارایه ی تخصصی خدمات خود واحد پرشیا سرویس را راه
                اندازی کرده است تا امور خدماتی را به بهترین شکل انجام دهد
              </p>
            </div>
            <div className=" flex justify-center items-start relative -left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\five-star-badge.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چشم‌انداز) */}
          <div className="flex flex-row-reverse items-center gap-4 relative top-25 bg-zinc-100 py-2.5">
            <div className="flex flex-col justify-center items-center px-4 w-full">
              <h4 className="text-lg font-semibold text-[#005E8B] mb-4">
                ارزش برند
              </h4>
              <p className="text-slate-600 leading-relaxed text-center ">
                شرکت درب اتوماتیک پرشیا با حفظ ثبات در کیفیت خدمات و محصولات،
                همواره نسبت به تحولات و بازارهای جدید کنجکاو و پویا است
              </p>
            </div>
            <div className=" flex justify-center items-start relative left-20">
              <div className="relative w-40 h-40 flex items-center justify-center bg-[#005E8B] text-white rounded-md border border-5 border-[#D1F0FF] transform rotate-45 shadow-md">
                <div className="transform -rotate-45 flex items-center justify-center">
                  <img src="\SVGs\target.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customers section */}
      <div className="flex flex-col items-center mt-40 lg:flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col items-start lg:text-[33px] ">
          <p className="text-[#FAB21F] font-bold">مشتریان ما</p>
          <p className="font-bold">ارزشمندترین سرمایه ما هستند</p>
        </div>
        <Image
          src="/images/Customers_mobile (2).png"
          width={1000}
          height={1000}
          alt="مشتریان ما"
          className="mt-8 lg:hidden"
        />
        <Image
          src="/images/Customers (2).png"
          width={1000}
          height={1000}
          alt="مشتریان ما"
          className="hidden mt-8 lg:flex"
        />
      </div>

      {/* counter */}
      <div className="flex justify-center items-center w-full lg:h-[430px] bg-[#003F5D] leading-15">
        <div className="grid grid-cols-3 max-w-6xl gap-20">
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157189.svg" alt="" />
            <p className="text-white text-[33px]">+600</p>
            <p className="text-white">شهرهای ایران</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157188.svg" alt="" />
            <p className="text-white text-[33px]">+10,000</p>
            <p className="text-white ">تجربه ی ما</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/SVGs/Frame 1261157187.svg" alt="" />
            <p className="text-white text-[33px] ">+20</p>
            <p className="text-white">صنایع مختلف</p>
          </div>
        </div>
      </div>

      {/* certificate show */}

      <div className="mt-15 max-w-7xl mx-auto px-4 py-12">
        <div className="w-full border border-1 border-zinc-200 bg-zinc-100 p-8 flex justify-between items-center ">
          <div className="flex gap-2">
            <IconDownload stroke={2} color={"#FAB21F"} />
            <p>برگه نمایندگی</p>
          </div>
          <IconPlus stroke={2} />
        </div>
      </div>
    </div>
  );
}
