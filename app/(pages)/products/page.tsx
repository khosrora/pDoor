import { IconFilter, IconSquareRoundedCheckFilled } from "@tabler/icons-react";
import { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Breadcrumbs from "./Breadcrumbs";

export const metadata: Metadata = {
  title: "پرشیادُر | محصولات",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

interface Product {
  name: string;
  slug: string;
  main_image: string | null;
  highlight_specs: {
    field_name: string | null;
    value: string | null;
    unit: string | null;
  }[];
  category: { name: string; logo: string; slug: string };
  brand: { name: string; logo: string; slug: string };
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

        {/* Product grid */}
        <div className="lg:col-span-3 lg:mt-0">
          <div className="hidden lg:flex justify-between items-center">
            <p>
              {products.length} {t("productsFound")}
            </p>
            <div className="flex justify-end items-center space-x-4 text-[14px]">
              <p>{t("sortNewest")}</p>
              <div className="divider divider-horizontal"></div>
              <p>{t("sortBestSelling")}</p>
              <div className="divider divider-horizontal"></div>
              <p>{t("sortMostViewed")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {products.map((product) => {
              console.log(product.main_image);
              const imageUrl = product.main_image
                ? product.main_image
                : "/images/noimage.jpg";

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
                        {product.highlight_specs.map((spec, index) => (
                          <div
                            key={index}
                            className="badge badge-xs bg-zinc-100 rounded-full"
                          >
                            {spec.field_name} {spec.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="badge bg-[#D1F0FF] text-[#007EBA] px-1 absolute right-2 top-2 rounded-md flex items-center gap-1">
                    <IconSquareRoundedCheckFilled size={12} />
                    <span className="text-[12px]">{t("compareBadge")}</span>
                  </div>

                  <div className="absolute left-3 top-3">
                    <Image
                      src={product.brand.logo}
                      width={50}
                      height={50}
                      alt={product.brand.name}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
