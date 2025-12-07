"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const SUPPORTED_LOCALES = ["fa", "en"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export default function LanguageSwitcher() {
  const locale = useLocale() as SupportedLocale;
  const router = useRouter();
  const pathname = usePathname();

  // Hide on routes: /media/[id]
  const isMediaPage = /^\/media\/\d+$/.test(pathname || "");
  if (isMediaPage) return null;

 const changeLocale = (newLocale: SupportedLocale) => {
  if (newLocale === locale) return;

  document.cookie = `locale=${newLocale}; path=/; max-age=31536000; sameSite=Lax`;

  router.refresh();
};

  return (
    <div className="flex items-center gap-2 rounded-full px-3 py-1 bg-white w-fit">
      <button
        onClick={() => changeLocale("en")}
        className={`px-2 text-sm transition ${
          locale === "en"
            ? "font-bold text-blue-600"
            : "text-zinc-600 hover:text-zinc-800"
        }`}
      >
        en
      </button>

      <span className="text-zinc-400">/</span>

      <button
        onClick={() => changeLocale("fa")}
        className={`px-2 text-sm transition ${
          locale === "fa"
            ? "font-bold text-blue-600"
            : "text-zinc-600 hover:text-zinc-800"
        }`}
      >
        فا
      </button>
    </div>
  );
}
