"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IconFilter } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

import api from "@/app/lib/axios";

import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Breadcrumbs from "./Breadcrumbs";
import Products from "@/app/components/pages/Products";
import CompareAlert from "@/app/components/pages/CompareAlert";
import DeleteIcon from "@/app/components/pages/DeleteIcon";

const ITEMS_PER_PAGE = 12;

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
    display_section: string;
  }[];
}

export default function ProductsListingPage() {
  const t = useTranslations("ProductsListingPage");
  const t2 = useTranslations("Categories");
  const locale = useLocale();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);
  const [next, setNext] = useState<string | null>(null);
  const [prev, setPrev] = useState<string | null>(null);

  const page = Number(searchParams.get("page") || 1);
  const category = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const sort = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";
  const doorType = searchParams.get("door_type") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const params = new URLSearchParams();

        if (category) params.set("category", category);
        if (brand) params.set("brand", brand);
        if (sort) params.set("sort", sort);
        if (search) params.set("search", search);
        if (doorType) params.set("door_type", doorType);

        params.set("lang", locale);
        params.set("page", String(page));

        const res = await api.get(`/v1/products/?${params.toString()}`);

        setProducts(res.data.results || []);
        setCount(res.data.count || 0);
        setNext(res.data.next || null);
        setPrev(res.data.previous || null);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, brand, sort, search, doorType, locale]);

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  const goToPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    router.push(`?${params.toString()}`);
  };

  const ProductSkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="card bg-base-100 shadow-md">
          <div className="h-40 w-full skeleton" />
          <div className="card-body space-y-2">
            <div className="h-4 w-3/4 skeleton" />
            <div className="h-4 w-1/2 skeleton" />
            <div className="h-4 w-full skeleton" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-20">
      <CompareAlert />

      <div className="p-4 max-w-7xl mx-auto">
        <Breadcrumbs />
      </div>

      <div className="bg-[#f4f4f4] py-5">
        <p className="font-bold text-base text-[#003f5d] lg:text-2xl max-w-7xl mx-auto">
          {t2("header")}
        </p>
        <CategorySliders />
        <FilersProducts />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        {/* FILTER SIDEBAR */}
        <aside className="hidden lg:flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <IconFilter />
              <span>{t("filters")}</span>
            </div>

            {(category || brand || sort || search || doorType) && (
              <DeleteIcon label={t("clearFilters")} />
            )}
          </div>

          {loading ? (
            <div className="space-y-3">
              <div className="h-4 w-24 skeleton" />
              <div className="h-4 w-32 skeleton" />
              <div className="h-4 w-20 skeleton" />
            </div>
          ) : (
            <Brands />
          )}
        </aside>

        {/* PRODUCTS */}
        <main className="lg:col-span-3">
          {loading ? (
            <ProductSkeleton />
          ) : products.length > 0 ? (
            <>
              <Products products={products} count={count} />

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center my-10">
                  <div className="join">
                    <button
                      className="join-item btn"
                      disabled={!prev}
                      onClick={() => goToPage(page - 1)}
                    >
                      «
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNumber = i + 1;

                      return (
                        <button
                          key={pageNumber}
                          className={`join-item btn ${
                            page === pageNumber ? "btn-active" : ""
                          }`}
                          onClick={() => goToPage(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    <button
                      className="join-item btn"
                      disabled={!next}
                      onClick={() => goToPage(page + 1)}
                    >
                      »
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="alert alert-warning">
              <span>{t("noProductsFound")}</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
