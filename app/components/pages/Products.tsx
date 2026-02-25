"use client";

import { Product } from "@/app/(pages)/products/page";
import { useCompare } from "@/app/context/CompareContext";
import {
  IconSquareRounded,
  IconSquareRoundedCheckFilled,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductAttributes from "./ProductAttributes";

// SVG icons
import FireSave from "@/app/SVGs/FireSave";
import Exterior from "@/app/SVGs/Exterior";
import INTERIOR from "@/app/SVGs/INTERIOR";

export default function Products({
  products,
  count,
}: {
  products: Product[];
  count: number;
}) {
  const t = useTranslations("ProductsListingPage");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { items, addItem, removeItem } = useCompare();
  const currentSort = searchParams.get("sort") || "";

  const isInCompare = (slug: string) => items.some((p) => p.slug === slug);

  const handleCompareToggle = (product: Product, imageUrl: string) => {
    if (isInCompare(product.slug)) {
      removeItem(product.slug);
    } else {
      addItem({
        slug: product.slug,
        name: product.name,
        image: imageUrl,
        brand: product.brand?.name || "",
        specs:
          product.specifications?.map((s) => ({
            field_name: s.field_name || "",
            field_name_en: s.field_name_en || s.field_name || "",
            value: s.value || "-",
          })) || [],
      });
    }
  };

  const updateSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set("sort", value) : params.delete("sort");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="lg:col-span-3 lg:mt-0">
      {/* Header */}
      <div className="hidden lg:flex justify-between items-center mb-2">
        <p>
          {count} {t("productsFound")}
        </p>

        <div className="flex items-center gap-4 text-[14px]">
          <button
            className={`hover:underline ${
              currentSort === ""
                ? "text-zinc-900 font-semibold"
                : "text-zinc-400"
            }`}
            onClick={() => updateSort("")}
          >
            {t("sortNewest")}
          </button>

          <div className="divider divider-horizontal" />

          <button
            className={`hover:underline ${
              currentSort === "popular"
                ? "text-zinc-900 font-semibold"
                : "text-zinc-400"
            }`}
            onClick={() => updateSort("popular")}
          >
            {t("sortBestSelling")}
          </button>
          <div className="divider divider-horizontal" />
          <button
            className={`hover:underline ${
              currentSort === "popular"
                ? "text-zinc-900 font-semibold"
                : "text-zinc-400"
            }`}
            onClick={() => updateSort("popular")}
          >
            {t("sortMostViewed")}
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {products.map((product) => {
          const imageUrl = product.main_image || "/images/noimage.jpg";
          const inCompare = isInCompare(product.slug);

          const tag1 =
            product.specifications?.filter(
              (f) => f.display_section === "tag1",
            ) || [];

          return (
            <div
              key={product.slug}
              className="relative group card bg-base-100 border border-zinc-300 rounded-md hover:shadow transition"
            >
              <Link href={`/products/${product.slug}`} className="block h-full">
                {/* Image */}
                <figure>
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-[207px] object-cover rounded-t-md"
                  />
                </figure>

                {/* Tag1 Icons */}
                <div className="mr-2 mt-2 flex gap-4">
                  {tag1.map((item) => {
                    const active = item.value === "1";
                    const color = active ? "#FFB800" : "#C3C3C3";

                    let IconComponent = null;
                    if (item.field_name === "FIRESAFE") IconComponent = FireSave;
                    if (item.field_name === "EXTERIOR") IconComponent = Exterior;
                    if (item.field_name === "INTERIOR") IconComponent = INTERIOR;

                    return (
                      <div key={item.field_name}>
                        {IconComponent && <IconComponent color={color} />}
                      </div>
                    );
                  })}
                </div>

                {/* Attributes */}
                <div className="card-body p-0">
                  <div className="divider my-0" />
                  <ProductAttributes product={product} />
                </div>
              </Link>

              {/* Compare Button */}
              <div
                className={`
                  badge absolute right-2 top-2 z-5 rounded-full px-2
                  flex items-center gap-1 cursor-pointer
                  transition-all duration-300

                  /* Mobile */
                  opacity-100 pointer-events-auto

                  /* Desktop base */
                  lg:opacity-0 lg:pointer-events-none

                  /* Desktop hover (when not active) */
                  ${
                    !inCompare
                      ? "lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto"
                      : ""
                  }

                  /* Active */
                  ${
                    inCompare
                      ? "bg-[#86d7fc6d] text-[#1a76a0] lg:opacity-100 lg:pointer-events-auto"
                      : "bg-zinc-50 text-zinc-500"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCompareToggle(product, imageUrl);
                }}
              >
                {inCompare ? (
                  <IconSquareRoundedCheckFilled size={12} />
                ) : (
                  <IconSquareRounded size={12} />
                )}
                <span className="text-[12px]">{t("compareBadge")}</span>
              </div>

              {/* Brand Logo */}
              {product.brand?.logo && (
                <div className="absolute left-3 top-3 z-2">
                  <Image
                    src={product.brand.logo}
                    width={50}
                    height={50}
                    alt={product.brand.name || "brand"}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
