import {
  IconChevronsRight,
  IconDoorExit,
  IconSquareRoundedCheckFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import CategorySliders from "../../components/pages/CategorySliders";
import FilersProducts from "../../components/pages/FilersProducts";
import Brands from "./Brands";
import Sort from "./Sort";
import ProductsSwipper from "../../components/pages/ProductsSwipper";
import { getTranslations } from "next-intl/server";

export default async function ProductsListingPage() {
  const t = await getTranslations("ProductsListingPage");

  const products = [1, 2, 3, 4, 5, 6];
  const slug = t("slug");

  return (
    <div className="mb-12">
      <CategorySliders />
      <FilersProducts />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {/* Left sidebar (desktop) */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-4">
          <Sort />
          <Brands />
        </div>

        {/* Product grid */}
        <div className="lg:col-span-3 lg:mt-0">
          <p className="text-red-600">{t("clearFilters")}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
            {products.map((i) => (
              <Link
                key={i}
                className="card relative bg-base-100 border rounded-md border-zinc-200"
                href={`/products/${slug}`}
              >
                <figure>
                  <img
                    src="https://persiadoorco.com/wp-content/uploads/2025/07/window.jpg"
                    alt={t("card.imageAlt")}
                    className="w-full h-40 object-contain rounded-t-md"
                  />
                </figure>

                <div className="card-body p-2">
                  <div className="flex justify-between items-center">
                    <p className="card-title text-xs font-medium">
                      {t("card.typeTitle")}
                    </p>
                    <div className="flex justify-end items-center gap-1">
                      <IconDoorExit className="text-zinc-400" size={16} />
                      <IconChevronsRight
                        className="text-yellow-600"
                        size={16}
                      />
                    </div>
                  </div>

                  <div className="divider my-2" />

                  <p className="text-[#005E8B]">{t("card.productName")}</p>

                  <div className="flex flex-wrap gap-2">
                    {[1, 2].map((featureIndex) => (
                      <div
                        key={featureIndex}
                        className="badge badge-xs bg-zinc-100 rounded-full"
                      >
                        {t("card.featureText")}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="badge bg-[#D1F0FF] text-[#007EBA] rounded-full absolute right-2 top-2">
                  <IconSquareRoundedCheckFilled size={12} />
                  <span className="text-[10px] ml-1">
                    {t("card.compareBadge")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: keep product swiper below or remove if not needed here */}
      <ProductsSwipper />
    </div>
  );
}
