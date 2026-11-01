"use client";

import { useCompare } from "@/app/context/CompareContext";
import Image from "next/image";
import { toast } from "sonner";
import { IconX } from "@tabler/icons-react";

export default function ComparePage() {
  const { items, removeItem, clearAll } = useCompare();

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-semibold">No products to compare</h2>
        <p className="mt-2 text-gray-500">
          Add products to compare from the product listing page.
        </p>
      </div>
    );
  }

  const allSpecs = Array.from(
    new Set(items.flatMap((p) => p.specs.map((s) => s.field_name)))
  );

  return (
    <div className="p-4 mt-24 max-w-7xl mx-auto">
      {/* Header */}
      

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="table w-full border-separate border-spacing-0">
          <thead>
            {/* ROW 1 – IMAGES */}
            <tr className="bg-white">
              <th className="w-48 bg-white border border-white"></th>

              {items.map((p) => (
                <th
                  key={p.slug}
                  className="relative text-center bg-white border border-white"
                >
                  <div className="relative inline-block">
                    {/* IMAGE */}
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={150}
                      height={150}
                      className="mx-auto object-contain bg-transparent"
                    />

                    {/* REMOVE BUTTON – TOP RIGHT */}
                    <button
                      onClick={() => removeItem(p.slug)}
                      className="
                        absolute -top-2 -right-2
                        bg-[#003f5d] text-white
                        rounded-full p-1
                        shadow 
                      "
                      title="Remove"
                    >
                      <IconX size={12} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>

            {/* ROW 2 – PRODUCT NAMES (YELLOW) */}
            <tr className="bg-[#fdd756]">
              <th className="w-48 bg-[#fdd756] border border-white"></th>

              {items.map((p) => (
                <th
                  key={p.slug}
                  className="text-center bg-[#fdd756] border border-white"
                >
                  <span className="font-semibold text-[#003148]">
                    {p.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allSpecs.map((spec) => (
              <tr key={spec}>
                {/* FIRST COLUMN – LIGHT BLUE */}
                <td className="font-medium bg-blue-100 border border-white text-[#003148]">
                  {spec}
                </td>

                {/* OTHER CELLS – ZINC-100 */}
                {items.map((p) => {
                  const value =
                    p.specs.find((s) => s.field_name === spec)?.value || "-";

                  return (
                    <td
                      key={p.slug + spec}
                      className="text-center bg-zinc-100 border border-white"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-500">
        Products with missing specifications show a "-" placeholder.
      </div>
    </div>
  );
}
