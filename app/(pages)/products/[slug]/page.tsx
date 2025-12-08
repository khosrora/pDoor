import AccordionCustions from "@/app/components/pages/AccordionCustions";
import api from "@/app/lib/axios";
import {
  IconCircleChevronLeft,
  IconDownload,
  IconPhone,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import GalleryImage from "./GalleryImage";
import TabsDetails from "./TabsDetails";
import Link from "next/link";
import ProjectsSlider from "@/app/components/pages/ProjectsSlider";
import CategoriesSwiper from "@/app/components/pages/CategoriesSwiper";
import ProductsSwiper from "@/app/components/pages/ProductsSwiper";

interface Props {
  params: any;
}

export default async function ProductDetailPage({ params }: Props) {
  const t = await getTranslations("ProductDetailPage");

  // ---------------------------
  // Fetch Product Data
  // ---------------------------
  const { slug } = await params;

  let product: any = null;
  try {
    const res = await api.get(`/v1/products/${slug}/`);
    product = res.data;
  } catch (error) {
    console.error("Product fetch error:", error);
    return (
      <div className="text-center py-20">
        <p className="text-red-500">{t("errors.notFound")}</p>
      </div>
    );
  }

  // Extract data
  const images = product.images || [];
  const catalogs = product.catalogs || [];
  const specifications = product.specifications || [];

  // Filter highlight benefits
  const highlightBenefits = specifications.filter(
    (s: any) => s.display_section === "highlight"
  );

  // Filter tags
  const tags = specifications.filter((s: any) => s.display_section === "tag");
  return (
    <div className="space-y-4 mt-40">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-x-4 max-w-5xl m-auto">
        <div className="w-full lg:w-1/2">
          <GalleryImage images={images} />
        </div>

        <div className="space-y-2 w-full lg:w-1/2">
          {/* Product name */}
          <p className="font-bold text-2xl">{product.name}</p>

          {/* Category + Brand */}
          <div className="text-sm text-zinc-500">
            {product.category?.name} — {product.brand?.name}
          </div>

          <div className="flex flex-col space-y-4">
            {/* Benefit rows */}
            {highlightBenefits.map((b: any, i: number) => (
              <div
                key={i}
                className="flex flex-row justify-start items-center gap-x-4"
              >
                <div className="flex gap-x-2 items-center text-zinc-500">
                  <IconCircleChevronLeft className="text-[#ADADAD]" />
                  <p className="text-[12px] text-[#ADADAD]">{b.field_name}</p>
                </div>
                <p className="text-[12px]">
                  {b.value} {b.unit}
                </p>
              </div>
            ))}

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-5">
              {tags.map((tag: any, i: number) => (
                <div key={i} className="badge bg-zinc-100 rounded-full p-4">
                  {tag.value}
                </div>
              ))}
            </div> */}

            {/* CTA buttons */}
            <div className="flex justify-center items-center gap-x-2">
              <Link
                href={"/contact_us"}
                className="btn bg-[#005E8B] text-white w-1/2"
              >
                <IconPhone />
                {t("buttons.phoneConsult")}
              </Link>

              {/* Download catalog */}
              {catalogs.length > 0 && (
                <a
                  href={catalogs[0].file}
                  target="_blank"
                  className="btn btn-outline w-1/2"
                >
                  <IconDownload />
                  {t("buttons.downloadCatalog")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <TabsDetails
        description={product.description}
        specifications={specifications}
      />

      {product.projects?.length > 0 && <ProjectsSlider />}

      <ProductsSwiper />
      <AccordionCustions />
    </div>
  );
}
