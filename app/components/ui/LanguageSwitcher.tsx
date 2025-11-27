// app/components/layout/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const SUPPORTED_LOCALES = ["fa", "en"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export default function LanguageSwitcher() {
  const locale = useLocale() as SupportedLocale;
  const router = useRouter();

  const changeLocale = (newLocale: SupportedLocale) => {
    if (newLocale === locale) return;

    // Persist locale for next-intl
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Re-render on server with new locale
    router.refresh();
  };

  const isEnglish = locale === "en";

  return (
    <label
      className="flex items-center gap-2 cursor-pointer"
      aria-label="Language switcher"
    >
      <span className={`text-xs ${!isEnglish ? "font-semibold" : ""}`}>
        فارسی
      </span>

      <input
        type="checkbox"
        className="toggle toggle-success"
        checked={isEnglish}
        onChange={(e) => changeLocale(e.target.checked ? "en" : "fa")}
      />

      <span className={`text-xs ${isEnglish ? "font-semibold" : ""}`}>EN</span>
    </label>
  );
}
