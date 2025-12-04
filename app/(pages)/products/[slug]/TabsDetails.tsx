"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type TabKey = "product" | "technical";

interface Specification {
  field_name?: string;
  value?: string | number | null;
  unit?: string;
  display_section: string;
}

interface Props {
  description: string;
  specifications: Specification[];
}

export default function TabsDetails({ description, specifications }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("product");
  const t = useTranslations("TabsDetails");

  // Filter spec sections
  const technicalSpecs = specifications.filter(
    (s) => s.display_section === "detail"
  );

  return (
    <div className="max-w-7xl m-auto">
      {/* Tabs header */}
      <div role="tablist" className="tabs tabs-border my-4 max-w-5xl m-auto">
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

      {/* PRODUCT DETAILS TAB */}
      {activeTab === "product" && (
        <div className="bg-zinc-50 p-4 rounded space-y-4">
          <div
            className="prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* OPTIONAL BUTTON */}
          {/* <button className="btn btn-outline">{t("product.button")}</button> */}
        </div>
      )}

      {/* TECHNICAL DETAILS TAB */}
      {activeTab === "technical" && (
        <div className="bg-zinc-50 p-4 rounded space-y-4">
          {technicalSpecs.length > 0 ? (
            <table className="table">
              <tbody>
                {technicalSpecs.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="font-medium text-zinc-600">
                      {item.field_name || "-"}
                    </td>
                    <td>
                      {item.value || "-"}{" "}
                      <span className="text-sm text-zinc-400">{item.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-zinc-500">{t("technical.empty")}</p>
          )}
        </div>
      )}
    </div>
  );
}
