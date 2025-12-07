"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IconFilter } from "@tabler/icons-react";

import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Breadcrumbs from "./Breadcrumbs";
import Products from "@/app/components/pages/Products";
import CompareAlert from "@/app/components/pages/CompareAlert";
import DeleteIcon from "@/app/components/pages/DeleteIcon";

import { useTranslations } from "next-intl";
import api from "@/app/lib/axios";

export interface Product {
  name: string;
  slug: string;
  main_image: string | null;
  category: {
    name: string;
    logo: string | null;
    slug: string;
    product_count: number;
  };
  brand: {
    name: string;
    logo: string | null;
    slug: string;
    product_count: number;
  } | null;
  specifications: {
    field_name?: string | null;
    value: string | null;
    unit?: string | null;
    display_section: "highlight" | "detail" | "tag";
  }[];
}

export default function ProductsListingPage() {
  const t = useTranslations("ProductsListingPage");
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const category = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const sort = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";
  const doorType = searchParams.get("door_type") || "";

  // -------------------------------
  // Fetch products
  // -------------------------------
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (brand) params.append("brand", brand);
        if (sort) params.append("sort", sort);
        if (search) params.append("search", search);
        if (doorType) params.append("door_type", doorType);

        const locale = navigator.language.startsWith("fa") ? "fa" : "en";
        params.append("lang", locale);

        const res = await api.get(`/v1/products/?${params.toString()}`);
        setProducts(res.data.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, brand, sort, search, doorType]);

  // --------------------------------
  // Skeleton Loader (DaisyUI)
  // --------------------------------
  const SkeletonGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-4 rounded-xl border shadow-sm">
          <div className="skeleton h-40 w-full mb-4"></div>
          <div className="skeleton h-4 w-3/4 mb-2"></div>
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-20">
      <CompareAlert />

      {/* Breadcrumb */}
      <div className="p-4 max-w-7xl m-auto">
        <Breadcrumbs />
      </div>

      <CategorySliders />
      <FilersProducts />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 max-w-7xl m-auto">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <IconFilter />
              <p>{t("filters")}</p>
            </div>

            {(category || brand || sort || search || doorType) && (
              <DeleteIcon label={t("clearFilters")} />
            )}
          </div>

          <Brands />
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          {loading ? (
            <SkeletonGrid />
          ) : products.length > 0 ? (
            <Products products={products} />
          ) : (
            <div className="alert alert-warning shadow-lg">
              <span>{t("noProductsFound")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
