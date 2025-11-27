"use client";

import { useTranslations } from "next-intl";

function Sort() {
  const t = useTranslations("SortFilter");

  return (
    <div className="flex-col justify-items-end lg:justify-items-start space-y-4">
      <div className="flex justify-start items-center gap-x-2">
        <input type="radio" name="sort" className="radio" />
        <p>{t("newest")}</p>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <input type="radio" name="sort" className="radio" />
        <p>{t("oldest")}</p>
      </div>
    </div>
  );
}

export default Sort;
