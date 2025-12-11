"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IconFilter } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";

import api from "@/app/lib/axios";

import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Breadcrumbs from "./Breadcrumbs";
import Products from "@/app/components/pages/Products";
import CompareAlert from "@/app/components/pages/CompareAlert";
import DeleteIcon from "@/app/components/pages/DeleteIcon";

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

  const searchParams = useSearchParams();
  const router = useRouter();

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
      } catch (err) {
        console.error("Error loading products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, brand, sort, search, doorType, locale]);

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`);
  };

  const lastPage = Math.ceil(count / 20);

  const ProductSkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="card bg-base-100 shadow-md" key={i}>
          <div className="w-full h-40 skeleton"></div>
          <div className="card-body space-y-2">
            <div className="h-4 w-3/4 skeleton"></div>
            <div className="h-4 w-1/2 skeleton"></div>
            <div className="h-4 w-full skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-20">
      <CompareAlert />

      <div className="p-4 max-w-7xl m-auto">
        <Breadcrumbs />
      </div>
      <div>
        <div className="bg-[#f4f4f4] w-full py-5">
          <p className="font-bold text-base  text-[#003f5d] lg:text-2xl  max-w-7xl mx-auto">
            {t2("header")}
          </p>
          <CategorySliders />
          <FilersProducts />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 max-w-7xl m-auto">
        {/* LEFT FILTER SIDEBAR */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <IconFilter />
              <p>{t("filters")}</p>
            </div>

            {(category || brand || sort || search || doorType) && (
              <DeleteIcon label={t("clearFilters")} />
            )}
          </div>

          {loading ? (
            <div className="space-y-4">
              <div className="h-4 w-24 skeleton"></div>
              <div className="h-4 w-32 skeleton"></div>
              <div className="h-4 w-20 skeleton"></div>
            </div>
          ) : (
            <Brands />
          )}
        </div>

        {/* PRODUCTS */}
        <div className="lg:col-span-3">
          {loading ? (
            <ProductSkeleton />
          ) : products.length > 0 ? (
            <>
              <Products products={products} count={count} />

              {/* PAGINATION */}
              <div className="flex justify-center my-10">
                <div className="join">
                  {Array.from({ length: lastPage }).map((_, i) => {
                    const pageNumber = i + 1;

                    return (
                      <button
                        key={pageNumber}
                        className={`join-item btn ${
                          pageNumber === page ? "btn-active" : ""
                        }`}
                        onClick={() => goToPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="alert alert-warning">
              <span>{t("noProductsFound")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
