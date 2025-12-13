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

export default function HotspotImage2() {
  return (
    // درب کشویی
    <div>
      <div className=" flex items-center justify-center px-4 my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-right space-y-4">
            <h1 className="text-2xl font-bold">معرفی درب لولایی</h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              درب لولایی یکی از پرکاربردترین درب‌ها در ساختمان‌های اداری و
              همچنین مسکونی است. با این‌حال ممکن است با این نوع درب آشنا نباشید.
              درب لولایی به درب‌هایی گفته می‌شود که لولاهای آن در کنار درب نصب
              شده و به‌سمت داخل یا خارج باز می‌شود. این نوع درب ساختار ساده و
              نصب آسانی دارد. درب‌های لولایی اتوماتیک را می‌توان به‌صورت تک‌لنگه
              و دو‌لنگه استفاده کرد. به درب لولایی، درب بازشو هم می‌گوییم. این
              درب شامل یک پنل است که از یک‌طرف به‌عنوان لولا عمل کرده و طرف دیگر
              آن باز و بسته می‌شود؛ در حالی‌که درب دو‌لنگه دو پنل دارد که هر
              کدام لولای خود را دارند و در دو جهت باز می‌شوند. درب‌های لولایی دو
              نوع یک‌طرفه و دو‌طرفه دارند. درب‌های یک‌طرفه فقط در یک جهت باز
              می‌شوند و درب‌ دو‌طرفه در هر دو جهت.
            </p>
          </div>
          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Image */}
            <img
              src="/images/doors/fold.-one-side-2.png"
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
