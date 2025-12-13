"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type TabKey = "product" | "technical" | "download";

interface Specification {
  field_name?: string;
  value?: string | number | null;
  unit?: string;
  display_section: string;
}

interface Catalog {
  id: number;
  title: string;
  file: string;
  file_type: string;
  cover_image: string;
  is_active: boolean;
  order: number;
}

interface Props {
  description: string;
  specifications: Specification[];
  catalogs: Catalog[]; // 👈 catalogs list
}

export default function TabsDetails({
  description,
  specifications,
  catalogs,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("product");
  const t = useTranslations("TabsDetails");

  const technicalSpecs = specifications.filter(
    (s) => s.display_section === "detail"
  );

  const activeCatalogs = catalogs?.filter((c) => c.is_active) || [];

  return (
    <div className="max-w-7xl mx-auto bg-zinc-50 mt-15 p-4">
      {/* Tabs header */}
      <div role="tablist" className="tabs tabs-border my-4 mx-auto">
        <button
          type="button"
          role="tab"
          className={`tab ${
            activeTab === "product"
              ? "tab-active text-[#007EBA] text-[19px]"
              : "text-[19px]"
          }`}
          onClick={() => setActiveTab("product")}
        >
          {t("tabs.product")}
        </button>

        <button
          type="button"
          role="tab"
          className={`tab ${
            activeTab === "technical"
              ? "tab-active text-[#007EBA] text-[19px]"
              : "text-[19px]"
          }`}
          onClick={() => setActiveTab("technical")}
        >
          {t("tabs.technical")}
        </button>

        <button
          type="button"
          role="tab"
          className={`tab ${
            activeTab === "download"
              ? "tab-active text-[#007EBA] text-[19px]"
              : "text-[19px]"
          }`}
          onClick={() => setActiveTab("download")}
        >
          {t("tabs.downloads")}
        </button>
      </div>

      {/* PRODUCT TAB */}
      {activeTab === "product" && (
        <div className="bg-white p-4 rounded space-y-4 leading-12">
          <div
            className="prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <button className="btn btn-outline text-[#005E8B]">
            {t("product.button")}
          </button>
        </div>
      )}

      {/* TECHNICAL TAB */}
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
                      {item.value || "-"}
                      <span className="text-sm text-zinc-400">
                        {" "}
                        {item.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-zinc-500">
              {t("technical.empty")}
            </p>
          )}
        </div>
      )}

      {/* DOWNLOAD TAB */}
      {activeTab === "download" && (
        <div className="bg-white p-4 rounded space-y-4">
          {activeCatalogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCatalogs.map((catalog) => (
                <div
                  key={catalog.id}
                  className="flex items-center justify-between border rounded-md p-4 hover:shadow transition"
                >
                  <div>
                    <p className="font-medium text-zinc-700">
                      {catalog.title}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {catalog.file_type.toUpperCase()}
                    </p>
                  </div>

                  <Link
                    href={catalog.file}
                    target="_blank"
                    className="btn btn-sm btn-outline text-[#005E8B]"
                  >
                    {t("downloads.button")}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500">
              {t("downloads.empty")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
