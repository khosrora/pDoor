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

export default function HotspotImage3() {
  return (
    // درب کشویی
    <div>
      <div className=" flex items-center justify-center px-4 my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-right space-y-4">
            <h1 className="text-2xl font-bold">معرفی درب گردان</h1>
            <p className="text-gray-600 leading-9 text-[16px]">
              درب‌ گردان یک راهکار هوشمندانه در طراحی معماری است که امکان عبور و
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
              نصب می‌شوند.
            </p>
          </div>
          {/* Image with hotspots */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Image */}
            <img
              src="/images/doors/revolve-1.png"
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
