"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

export default function DirectionProvider() {
  const locale = useLocale();

  useEffect(() => {
    const dir = locale === "fa" ? "rtl" : "ltr";

    const html = document.documentElement;

    html.setAttribute("dir", dir);
    html.setAttribute("lang", locale);

    // Force reflow (important)
    document.body.style.direction = dir;
  }, [locale]);

  return null;
}
