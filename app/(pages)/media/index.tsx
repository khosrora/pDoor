"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Gallery from "./gallery";
import News from "./news";
import Breadcrumbs from "./Breadcrumbs";

export enum Type {
  N = "news",
  G = "gallery",
}

function Index() {
  const [type, setType] = useState<Type>(Type.G);
  const t = useTranslations("NewsGalleryTabs");

  return (
    <>
      <div className=" p-4">
        <Breadcrumbs />
      </div>
      <div className="">
        <div role="tablist" className="max-w-7xl mx-auto tabs tabs-border my-4 mx-8 px-8 ">
        <p
          role="tab"
          className={`tab ${type === Type.G ? "tab-active text-[#007EBA]" : ""} px-8`}
          onClick={() => setType(Type.G)}
        >
          {t("tabs.gallery")}
        </p>
        <p
          role="tab"
          className={`tab ${type === Type.N ? "tab-active text-[#007EBA]" : ""} px-8`}
          onClick={() => setType(Type.N)}
        >
          {t("tabs.news")}
        </p>
      </div>
      {type === Type.N ? <News /> : <Gallery />}
      </div>
    </>
  );
}

export default Index;
