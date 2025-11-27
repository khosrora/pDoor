"use client";

import Brands from "@/app/(pages)/products/Brands";
import Sort from "@/app/(pages)/products/Sort";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

function FilersProducts() {
  const t = useTranslations("ProductsFilters");

  return (
    <div className="p-4 lg:hidden">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center w-3/4">
          {/* Filters drawer */}
          <div className="drawer drawer-end justify-end" dir="ltr">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-5" className="p-0">
                <div className="flex justify-start items-center">
                  <p className="text-xs">{t("filters")}</p>
                  <IconFilter />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <Brands />
              </ul>
            </div>
          </div>

          {/* Sort drawer */}
          <div className="drawer drawer-end justify-end" dir="ltr">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4">
                <div className="flex justify-start items-center">
                  <IconSortAscending />
                  <p className="text-xs">{t("sort")}</p>
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <Sort />
              </ul>
            </div>
          </div>
        </div>

        <p className="text-red-600">{t("clear")}</p>
      </div>
    </div>
  );
}

export default FilersProducts;
