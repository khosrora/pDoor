"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function Brands() {
  const t = useTranslations("BrandsFilter");

  return (
    <div className="space-y-4">
      {/* Brands */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold">
          {t("sections.brands")}
        </div>
        <div className="collapse-content text-sm">
          <div className="flex justify-start items-center gap-x-2">
            <input type="radio" name="brand" className="radio" />
            <div className="flex justify-start items-center gap-x-4">
              <p>{t("options.geze")}</p>
              <Image
                src={"/images/logo/geze.jpeg"}
                width={50}
                height={50}
                alt={"logo"}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Door type */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold">
          {t("sections.doorType")}
        </div>
        <div className="collapse-content text-sm">
          <div className="flex justify-start items-center gap-x-2">
            <input type="radio" name="doorType" className="radio" />
            <p>{t("options.manual")}</p>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <input type="radio" name="doorType" className="radio" />
            <p>{t("options.automatic")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
