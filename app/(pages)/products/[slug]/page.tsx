import AccordionCustions from "@/app/components/pages/AccordionCustions";
import DetailsProductAttributes from "@/app/components/pages/DetailsProductAttributes";
import ProductsSwiper from "@/app/components/pages/ProductsSwiper";
import ProjectsSlider from "@/app/components/pages/ProjectsSlider";
import api from "@/app/lib/axios";
import { getTranslations } from "next-intl/server";
import GalleryImage from "./GalleryImage";
import TabsDetails from "./TabsDetails";

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
  const specifications = product.specifications || [];
  const projects = product.projects || [];

  return (
    <div className="space-y-4 mt-40">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-x-4 max-w-7xl m-auto">
        <div className="w-full lg:w-1/2">
          <GalleryImage images={images} />
        </div>

        <DetailsProductAttributes
          name={product.name}
          specifications={product.specifications}
        />
      </div>

      <TabsDetails
        description={product.description}
        specifications={specifications}
      />

      {product.projects?.length > 0 && <ProjectsSlider projects={projects} />}

      <ProductsSwiper />
      <AccordionCustions />
    </div>
  );
}
