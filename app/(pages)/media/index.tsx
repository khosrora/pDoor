"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import Gallery from "./gallery";
import News from "./news";
import Breadcrumbs from "./Breadcrumbs";

export enum Type {
  N = "news",
  G = "gallery",
}

function Index() {
  const t = useTranslations("NewsGalleryTabs");
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");

  const [type, setType] = useState<Type>(Type.G);

  // sync state with URL
  useEffect(() => {
    if (tabParam === Type.N || tabParam === Type.G) {
      setType(tabParam as Type);
    }
  }, [tabParam]);

  const handleTabChange = (value: Type) => {
    setType(value);
    router.push(`/media?tab=${value}`, { scroll: false });
  };

  return (
    <>
      <div className="p-4">
        <Breadcrumbs />
      </div>

      <div>
        <div
          role="tablist"
          className="max-w-7xl mx-auto tabs tabs-border my-4 px-8"
        >
          <button
            role="tab"
            type="button"
            className={`tab px-8 ${
              type === Type.G ? "tab-active text-[#007EBA]" : ""
            }`}
            onClick={() => handleTabChange(Type.G)}
          >
            {t("tabs.gallery")}
          </button>

          <button
            role="tab"
            type="button"
            className={`tab px-8 ${
              type === Type.N ? "tab-active text-[#007EBA]" : ""
            }`}
            onClick={() => handleTabChange(Type.N)}
          >
            {t("tabs.news")}
          </button>
        </div>

        {type === Type.N ? <News /> : <Gallery />}
      </div>
    </>
  );
}

export default Index;
