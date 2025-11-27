"use client";

import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function ClientLangProvider({ children }: Props) {
  const [lang, setLang] = useState<"en" | "fa">("fa");
  const [dir, setDir] = useState<"ltr" | "rtl">("rtl");

  useEffect(() => {
    const storedLang = (localStorage.getItem("locale") as "en" | "fa") || "fa";
    setLang(storedLang);
    setDir(storedLang === "fa" ? "rtl" : "ltr");

    document.documentElement.lang = storedLang;
    document.documentElement.dir = storedLang === "fa" ? "rtl" : "ltr";
  }, []);

  return <>{children}</>;
}
