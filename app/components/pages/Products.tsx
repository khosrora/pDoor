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

function Products({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("ProductsListingPage");
  const { items, addItem, removeItem } = useCompare();

  const isInCompare = (slug: string) => items.some((p) => p.slug === slug);

  const handleCompareToggle = (
    product: Product,
    imageUrl: string,
    highlightSpecs: any[]
  ) => {
    if (isInCompare(product.slug)) {
      removeItem(product.slug);
      toast.error(`${product.name} از مقایسه حذف شد`);
    } else {
      addItem({
        slug: product.slug,
        name: product.name,
        image: imageUrl,
        brand: !!product.brand ? product.brand.name : "/images/noimage.jpg",
        specs: highlightSpecs || [],
      });
    }
  };

  function updateSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="lg:col-span-3 lg:mt-0">
        <div className="hidden lg:flex justify-between items-center">
          <p>
            {products.length} {t("productsFound")}
          </p>
          <div className="flex justify-end items-center space-x-4 text-[14px]">
            <p onClick={() => updateSort("")}>{t("sortNewest")}</p>
            <div className="divider divider-horizontal"></div>
            <p onClick={() => updateSort("popular")}>{t("sortBestSelling")}</p>
            {/* <div className="divider divider-horizontal"></div> */}
            {/* <p onClick={() => updateSort("popular")}>{t("sortMostViewed")}</p> */}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
          {products.map((product) => {
            const imageUrl = product.main_image
              ? product.main_image
              : "/images/noimage.jpg";

            const highlightSpecs = product.specifications?.filter(
              (s) => s.display_section === "highlight"
            );

            const inCompare = isInCompare(product.slug);

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="card lg:w-[288px] lg:h-[304px] relative bg-base-100 border rounded-md border-zinc-300"
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
                  <div className="px-4 pb-4">
                    <p className="mb-2 font-bold">{product.name}</p>

                    <div className="flex flex-wrap gap-2">
                      {highlightSpecs?.map((spec, index) => (
                        <div
                          key={index}
                          className="badge badge-xs bg-zinc-100 rounded-full"
                        >
                          {spec.field_name && <span>{spec.field_name}: </span>}
                          {spec.value}
                          {spec.unit && ` ${spec.unit}`}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Toggle Compare button */}
                <div
                  className={`badge px-1 absolute right-2 top-2 rounded-md flex items-center gap-1 cursor-pointer ${
                    inCompare
                      ? "bg-[#007EBA] text-white"
                      : "bg-[#D1F0FF] text-[#007EBA]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCompareToggle(
                      product,
                      imageUrl,
                      highlightSpecs || []
                    );
                  }}
                >
                  {inCompare ? (
                    <IconSquareRoundedCheckFilled size={12} />
                  ) : (
                    <IconSquareRounded size={12} />
                  )}
                  <span className="text-[12px]">{t("compareBadge")}</span>
                </div>

                {/* Brand logo */}
                <div className="absolute left-3 top-3">
                  <Image
                    src={product.brand?.logo || "/images/noimage.jpg"}
                    width={50}
                    height={50}
                    alt={product.brand?.name || "product"}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
