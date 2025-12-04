import { IconFilter, IconSquareRoundedCheckFilled } from "@tabler/icons-react";
import { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Breadcrumbs from "./Breadcrumbs";
import Products from "@/app/components/pages/Products";
import CompareAlert from "@/app/components/pages/CompareAlert";

export const metadata: Metadata = {
  title: "پرشیادُر | محصولات",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export interface Product {
  name: string;
  slug: string;
  main_image: string | null;

  category: {
    name: string;
    logo: string;
    slug: string;
    product_count: number;
  };

  brand: {
    name: string;
    logo: string;
    slug: string;
    product_count: number;
  };

  specifications: {
    field_name?: string | null;
    value: string | null;
    unit?: string | null;
    display_section: "highlight" | "detail" | "tag";
  }[];
}

export default async function ProductsListingPage() {
  const locale = await getLocale();
  const t = await getTranslations("ProductsListingPage");

  // ------------------- Fetch Products -------------------
  let products: Product[] = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/products/?lang=${locale}`
    );
    if (res.ok) {
      products = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  return (
    <div className="my-20">
      <CompareAlert />

      <div className="p-4 max-w-7xl m-auto">
        <Breadcrumbs />
      </div>

      <CategorySliders />
      <FilersProducts />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 max-w-7xl m-auto">
        {/* Left sidebar (desktop) */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-2">
              <IconFilter />
              <p>{t("filters")}</p>
            </div>
            <p className="text-red-600">{t("clearFilters")}</p>
          </div>
          <Brands />
        </div>

        <Products products={products} />
      </div>
    </div>
  );
}
