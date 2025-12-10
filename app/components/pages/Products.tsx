"use client";

import { Product } from "@/app/(pages)/products/page";
import {
  IconSquareRoundedCheckFilled,
  IconSquareRounded,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useCompare } from "@/app/context/CompareContext";
import { toast } from "sonner";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import ProductAttributes from "./ProductAttributes";

function Products({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("ProductsListingPage");
  const { items, addItem, removeItem } = useCompare();

  const isInCompare = (slug: string) => items.some((p) => p.slug === slug);

  const handleCompareToggle = (product: Product, imageUrl: string) => {
    if (isInCompare(product.slug)) {
      removeItem(product.slug);
      toast.error(`${product.name} از مقایسه حذف شد`);
    } else {
      addItem({
        slug: product.slug,
        name: product.name,
        image: imageUrl,
        brand: product.brand?.name || "/images/noimage.jpg",
        specs:
          product.specifications?.map((s) => ({
            field_name: s.field_name || "",
            value: s.value || "-",
          })) || [],
      });
      toast.success(`${product.name} به مقایسه اضافه شد`);
    }
  };

  const updateSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="lg:col-span-3 lg:mt-0">
      {/* Header */}
      <div className="hidden lg:flex justify-between items-center mb-2">
        <p>
          {products.length} {t("productsFound")}
        </p>
        <div className="flex justify-end items-center space-x-4 text-[14px]">
          <p
            className="cursor-pointer hover:underline"
            onClick={() => updateSort("")}
          >
            {t("sortNewest")}
          </p>
          <div className="divider divider-horizontal"></div>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => updateSort("popular")}
          >
            {t("sortBestSelling")}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {products.map((product) => {
          const imageUrl = product.main_image || "/images/noimage.jpg";
          const inCompare = isInCompare(product.slug);

          return (
            <div
              key={product.slug}
              className="relative card lg:w-[288px] lg:h-[304px] bg-base-100 border rounded-md border-zinc-300 hover:shadow transition"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block w-full h-full"
              >
                <figure>
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-[207px] object-cover rounded-t-md"
                  />
                </figure>

                <div className="card-body p-0">
                  <div className="divider my-0" />
                  <div className="">
                    <ProductAttributes product={product} />
                  </div>
                </div>
              </Link>

              {/* Compare Badge */}
              <div
                className={`badge absolute right-2 top-2 rounded-full px-2 flex items-center gap-1 cursor-pointer ${
                  inCompare
                    ? "bg-[#003148] text-white"
                    : "bg-zinc-200 text-zinc-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation(); // important: stop Link click
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
                <div className="absolute left-3 top-3">
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

export default Products;
