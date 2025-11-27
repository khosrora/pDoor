import AccordionCustions from "@/app/components/pages/AccordionCustions";
import ProductsSwipper from "@/app/components/pages/ProductsSwipper";
import { IconChevronLeft, IconDownload, IconPhone } from "@tabler/icons-react";
import GalleryImage from "./GalleryImage";
import TabsDetails from "./TabsDetails";
import { getTranslations } from "next-intl/server";

export default async function ProductDetailPage() {
  const t = await getTranslations("ProductDetailPage");

  const badges = [1, 2];
  const benefits = [1, 2, 3, 4];
  const tags = [1, 2];

  return (
    <div className="p-4 space-y-4 max-w-7xl m-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-x-4">
        <GalleryImage />

        <div className="space-y-2 w-full lg:w-1/2">
          {/* Product name */}
          <p>{t("name")}</p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((i) => (
              <div key={i} className="badge badge-xs bg-zinc-100 rounded-full">
                {t("featureBadge")}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            {/* Benefit rows */}
            {benefits.map((i) => (
              <div
                key={i}
                className="flex flex-row justify-start items-center gap-x-4"
              >
                <div className="flex gap-x-2 items-center text-zinc-500">
                  <IconChevronLeft />
                  <p>{t("benefit.label")}</p>
                </div>
                <p>{t("benefit.value")}</p>
              </div>
            ))}

            {/* Tags */}
            <div className="grid grid-cols-3 gap-5">
              {tags.map((i) => (
                <div key={i} className="badge bg-zinc-100">
                  {t("tag")}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex justify-center items-center gap-x-2">
              <button className="btn bg-[#005E8B] text-white">
                <IconPhone />
                {t("buttons.phoneConsult")}
              </button>
              <button className="btn btn-outline">
                <IconDownload />
                {t("buttons.downloadCatalog")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <TabsDetails />
      <ProductsSwipper />
      <AccordionCustions />
    </div>
  );
}
