"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { IconDownload, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

import HotspotImage1 from "@/app/components/pages/HotspotImage1";
import HotspotImage2 from "@/app/components/pages/HotspotImage2";
import HotspotImage3 from "@/app/components/pages/HotspotImage3";
import HotspotImage4 from "@/app/components/pages/HotspotImage4";

type TabKey = "product" | "technical" | "download";

type CategorySlug =
  | "swing-door"
  | "revolving-door"
  | "sliding-door"
  | "automatic-window"
  | "accessories";

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
  catalogs: Catalog[];
  category: {
    name: string;
    name_en: string;
    logo: string;
    image: string;
    slug: CategorySlug;
    product_count: number;
  };
}

export default function TabsDetails({
  description,
  specifications,
  catalogs,
  category,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("product");
  const t = useTranslations("TabsDetails");

  const technicalSpecs = specifications.filter(
    (s) => s.display_section === "detail"
  );

  const activeCatalogs = catalogs?.filter((c) => c.is_active) || [];

  /* =======================
     Hotspot switch case
  ======================= */
  const renderHotspot = () => {
    switch (category.slug) {
      case "swing-door":
        return <HotspotImage2 />;

      case "revolving-door":
        return <HotspotImage3 />;

      case "sliding-door":
        return <HotspotImage1 />;

      case "automatic-window":
        return <HotspotImage4 />;

      case "accessories":
      default:
        return null;
    }
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto bg-zinc-50 m-0 lg:mt-15 p-4 overflow-x-hidden">
      {/* ================= Tabs Header ================= */}
      <div role="tablist" className="tabs tabs-border my-4 ">
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

      {/* ================= PRODUCT TAB ================= */}
      {activeTab === "product" && (
        <div className="bg-white p-4 rounded space-y-4 leading-12">
          <div
            className="prose prose-zinc w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* <button className="btn btn-outline text-[#005E8B]">
            {t("product.button")}
          </button> */}
          {/* ================= HOTSPOT SECTION ================= */}
      <div className="mt-12">{renderHotspot()}</div>
        </div>
      )}

      {/* ================= TECHNICAL TAB ================= */}
      {activeTab === "technical" && (
        <div className="bg-white p-4 rounded space-y-4">
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
            <p className="text-center text-zinc-500">{t("technical.empty")}</p>
          )}
                
        </div>

      )}

      {/* ================= DOWNLOAD TAB ================= */}
      {activeTab === "download" && (
        <div className="space-y-4">
          {["catalog", "certificate", "datasheet", "technicalDrawing"].map(
            (type) => (
              <div key={type} className="p-4 rounded">
                {activeCatalogs.length > 0 ? (
                  <div className="border border-zinc-200 bg-white">
                    <details className="group">
                      <summary className="w-full p-8 flex justify-between items-center cursor-pointer list-none">
                        <div className="flex items-center gap-2">
                          <IconDownload stroke={2} color="#FAB21F" />
                          <p className="font-medium">{t(`tabs.${type}`)}</p>
                        </div>

                        <IconPlus
                          stroke={2}
                          className="transition-transform duration-300 group-open:rotate-45"
                        />
                      </summary>

                      <div className="m-4 space-y-4">
                        {activeCatalogs.map((catalog) => (
                          <Link
                            key={catalog.id}
                            href={catalog.file}
                            target="_blank"
                            className="flex items-center gap-2 text-[#005E8B] hover:underline"
                          >
                            <IconDownload stroke={2} />
                            <span className="font-medium">{catalog.title}</span>
                          </Link>
                        ))}
                      </div>
                    </details>
                  </div>
                ) : (
                  null
                )}
              </div>
            )
          )}
        </div>
      )}


    </div>
  );
}
