"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Gallery from "./gallery";
import News from "./news";

export enum Type {
  N = "news",
  G = "gallery",
}

function Index() {
  const [type, setType] = useState<Type>(Type.N);
  const t = useTranslations("NewsGalleryTabs");

  return (
    <>
      <div role="tablist" className="tabs tabs-border my-4">
        <p
          role="tab"
          className={`tab ${type === Type.G ? "tab-active" : ""}`}
          onClick={() => setType(Type.G)}
        >
          {t("tabs.gallery")}
        </p>
        <p
          role="tab"
          className={`tab ${type === Type.N ? "tab-active" : ""}`}
          onClick={() => setType(Type.N)}
        >
          {t("tabs.news")}
        </p>
      </div>
      {type === Type.N ? <News /> : <Gallery />}
    </>
  );
}

export default Index;
