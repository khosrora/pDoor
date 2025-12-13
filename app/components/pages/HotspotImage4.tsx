"use client";

const hotspots = [
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
];

export default function HotspotImage4() {
  return (
    // درب کشویی
    <div>
      <div className=" flex items-center justify-center px-4 my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-right space-y-4">
            <h1 className="text-2xl font-bold">معرفی پنجره اتوماتیک</h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              سیستم‌های پنجره گزه باعث ایجاد هوای مطبوع و سالم در داخل
              ساختمان‌ها شده و ایمنی و راحتی را افزایش می‌دهند. هدف از تولید و
              استفاده از پنجره‌های هوشمند، کاهش مصرف انرژی است. همچنین تنوع
              ظاهری گسترده‌ این پنجره‌ها باعث شده است تا در تمامی ساختمان‌ها
              قابل نصب و استفاده باشند. فناوری هوشمند پنجره‌های گزه چه دستی
              باشد، چه اتوماتیک، به نیازهای مختلف در یک سیستم واحد پاسخ می‌دهد؛
              چه برای تهویه روزانه هوا، چه در مواقع آتش‌سوزی. پنجره‌های گزه
              همه‌چیز را از سیستم‌های محرک تهویه طبیعی تا راهکارهای استخراج کامل
              دود و حرارت برای ایمنی و پیشگیری در برابر آتش پوشش می‌دهد.
            </p>
            <h1 className="text-2xl font-bold">درایوهای پنجره‌ هوشمند</h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              درایوهای بازکننده الکتریکی شما را از باز و بسته کردن دستی پنجره‌ها
              بی‌نیاز می‌کند. به‌خصوص زمانی‌که باز کردن پنجره به‌صورت دستی به
              نیروی زیادی نیاز دارد یا امکان‌پذیر نیست. در این‌صورت درایوهای
              بازکننده پنجره‌ها دو مزیت اصلی را ارائه می‌دهند: ایجاد ایمنی در
              مواقع خطر و تهویه راحت و آسان. پنجره‌های اتوماتیک با درایوهای
              زنجیری یا پیستونی به‌عنوان سیستم خروج دود و گرما در مواقع آتش‌سوزی
              عمل می‌کنند. همچنین این پنجره‌ها به‌طور همزمان، برای تهویه
              کنترل‌شده روزانه به‌کار می‌روند و نقش سیستم تهویه پنجره را ایفا
              می‌کنند.
            </p>
            <h1 className="text-2xl font-bold">
              تهویه خودکار از طریق پنجره‌؛ طبیعی و کم‌مصرف
            </h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              تهویه طبیعی از طریق تهویه خودکار پنجره‌ها، باعث تمیز شدن هوای
              داخلی ساختمان‌ می‌شود. در مقایسه با سیستم‌های متداول تهویه مطبوع،
              روش تهویه خودکار گزینه‌ای کم‌مصرف‌تر برای تامین هوای تازه محیط
              است. در این روش، بدون استفاده از فَن و فقط از طریق پنجره‌ها تبادل
              هوا انجام شده و با تکیه بر اختلاف دما و فشار باد انجام می‌شود.
            </p>
            <h1 className="text-2xl font-bold">
              سیستم‌های تهویه پنجره: هوای تازه برای یک محیط سالم
            </h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              سردرد، خستگی یا آلرژی، کیفیت پایین و جابجا نشدن هوای داخل برای
              بسیاری از افراد ناخوشایند است. عایق‌کاری ساختمان‌های مدرن یا
              بازسازی‌شده، باعث می‌شود که تقریبا هوای تازه‌ وارد فضای داخل نشود
              و بهداشت هوای داخلی، آلودگی و ایجاد کپک را منجر خواهد شد. راه‌حل
              در بسیاری از موارد ساده است: تهویه طبیعی از طریق پنجره‌ها.
            </p>
          </div>
          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Image */}
            <img
              src="/images/doors/untitled.26.png"
              alt="Sliding Door"
              className="w-full h-auto"
            />

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute group"
                style={{ top: spot.top, left: spot.left }}
              >
                {/* Dot */}
                <span className="block w-3 h-3 bg-orange-400 rounded-full cursor-pointer"></span>

                {/* Tooltip */}
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2
                          w-48 p-3 text-sm bg-gray-900 text-white rounded-lg
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-all duration-200 z-10"
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
