"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";

type TabKey = "product" | "technical";

function TabsDetails() {
  const [activeTab, setActiveTab] = useState<TabKey>("product");
  const t = useTranslations("TabsDetails");

  const repeatedLines = [1, 2, 3, 4, 5];

  return (
    <>
      {/* Tabs header */}
      <div role="tablist" className="tabs tabs-border my-4">
        <button
          type="button"
          role="tab"
          className={`tab ${activeTab === "product" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("product")}
        >
          {t("tabs.product")}
        </button>
        <button
          type="button"
          role="tab"
          className={`tab ${activeTab === "technical" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          {t("tabs.technical")}
        </button>
      </div>

      {/* Product details */}
      {activeTab === "product" && (
        <div className="bg-zinc-50 p-4 rounded space-y-4">
          <img
            src="https://persiadoorco.com/wp-content/uploads/2025/07/window.jpg"
            alt={t("product.imageAlt")}
            className="w-full object-contain rounded-t-md"
          />
          {repeatedLines.map((i) => (
            <p key={i}>{t("product.paragraph")}</p>
          ))}
          <button className="btn btn-outline">
            {t("product.button")}
          </button>
        </div>
      )}

      {/* Technical details */}
      {activeTab === "technical" && (
        <div className="bg-zinc-50 p-4 rounded space-y-4">
          <img
            src="https://persiadoorco.com/wp-content/uploads/2025/07/window.jpg"
            alt={t("technical.imageAlt")}
            className="w-full object-contain rounded-t-md"
          />
          {repeatedLines.map((i) => (
            <p key={i}>{t("technical.paragraph")}</p>
          ))}
          <img
            src="https://persiadoorco.com/wp-content/uploads/2025/07/window.jpg"
            alt={t("technical.imageAlt")}
            className="w-full object-contain rounded-t-md"
          />
        </div>
      )}
    </>
  );
}

export default TabsDetails;
