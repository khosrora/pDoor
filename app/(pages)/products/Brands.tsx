"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Brand {
  name: string;
  logo: string;
  slug: string;
  product_count: number;
}

interface DoorType {
  slug: string;
  name: string;
}

function Brands() {
  const t = useTranslations("ProductsBrands"); // use same namespace
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentBrand = searchParams.get("brand") || "";
  const currentDoorType = searchParams.get("door_type") || "";

  const [brands, setBrands] = useState<Brand[]>([]);
  const [doorTypes, setDoorTypes] = useState<DoorType[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [loadingDoorTypes, setLoadingDoorTypes] = useState(true);

  // Fetch brands
  useEffect(() => {
    async function loadBrands() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/brands/?lang=fa`,
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = await res.json();
          setBrands(data);
        }
      } catch (err) {
        console.error("Failed to fetch brands:", err);
      } finally {
        setLoadingBrands(false);
      }
    }

    loadBrands();
  }, []);

  // Fetch door types
  useEffect(() => {
    async function loadDoorTypes() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/doortype/?lang=fa`,
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = await res.json();
          setDoorTypes(data);
        }
      } catch (err) {
        console.error("Failed to fetch door types:", err);
      } finally {
        setLoadingDoorTypes(false);
      }
    }

    loadDoorTypes();
  }, []);

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) return; // do nothing if already selected
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      {/* Brands Section */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border border-base-300"
      >
        <div className="collapse-title font-semibold">
          {t("sections.brands")}
        </div>

        <div className="collapse-content text-sm space-y-4">
          {loadingBrands && <p className="text-gray-500">{t("loading")}</p>}
          {!loadingBrands && brands.length === 0 && (
            <p className="text-gray-500">{t("noBrands")}</p>
          )}
          {brands.map((brand) => (
            <label
              key={brand.slug}
              className="flex justify-start items-center gap-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                className="radio"
                checked={currentBrand === brand.slug}
                onChange={() => updateFilter("brand", brand.slug)}
              />
              <div className="flex items-center gap-x-4">
                <p>{brand.name}</p>
                <Image
                  src={brand.logo}
                  width={50}
                  height={50}
                  alt={brand.name}
                  className="rounded"
                />
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Door Type Section */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border border-base-300"
      >
        <div className="collapse-title font-semibold">
          {t("sections.doorType")}
        </div>

        <div className="collapse-content text-sm space-y-2">
          {loadingDoorTypes && <p className="text-gray-500">{t("loading")}</p>}
          {!loadingDoorTypes &&
            doorTypes.map((type) => (
              <label
                key={type.slug}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="door_type"
                  className="radio"
                  checked={currentDoorType === type.slug}
                  onChange={() => updateFilter("door_type", type.slug)}
                />
                <p>{type.name}</p>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
