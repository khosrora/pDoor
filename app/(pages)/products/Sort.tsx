"use client";

import { useTranslations } from "next-intl";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Sort() {
  const t = useTranslations("ProductsListingPage");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Read current sort from URL
  const currentSort = searchParams.get("sort") || "";

  function updateSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex-col justify-items-end lg:justify-items-start space-y-4">
      {/* Newest */}
      <label className="flex justify-start items-center gap-x-2 cursor-pointer">
        <p>{t("sortNewest")}</p>
        <input
          type="radio"
          name="sort"
          className="radio"
          value="latest"
          checked={currentSort === "latest"}
          onChange={() => updateSort("latest")}
        />
      </label>

      {/* Best Selling */}
      <label className="flex justify-start items-center gap-x-2 cursor-pointer">
        <p>{t("sortBestSelling")}</p>
        <input
          type="radio"
          name="sort"
          className="radio"
          value="popular"
          checked={currentSort === "popular"}
          onChange={() => updateSort("popular")}
        />
      </label>
    </div>
  );
}

export default Sort;
