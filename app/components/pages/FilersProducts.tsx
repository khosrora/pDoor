"use client";

import Brands from "@/app/(pages)/products/Brands";
import Sort from "@/app/(pages)/products/Sort";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import DeleteIcon from "./DeleteIcon";

function FilersProducts() {
  const t = useTranslations("ProductsFilters");

  return (
    <div className="p-4 lg:hidden">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center ">
          {/* Filters drawer */}
          <div className="drawer drawer-end justify-end" dir="ltr">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-5" className="p-0">
                <div className="flex justify-start items-center">
                  <IconFilter size={24} />
                  <p className="text-xs ml-2">{t("filters")}</p>
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
                  <IconSortAscending size={24} />
                  <p className="text-xs ml-2">{t("sort")}</p>
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

        <DeleteIcon label={t('clear')} />
      </div>
    </div>
  );
}

export default FilersProducts;
