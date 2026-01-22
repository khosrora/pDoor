"use client";

import { useCompare } from "@/app/context/CompareContext";
import Image from "next/image";
import { toast } from "sonner";

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

  // Get all unique spec fields from all products
  const allSpecs = Array.from(
    new Set(items.flatMap((p) => p.specs.map((s) => s.field_name)))
  );

  return (
    <div className="p-4 mt-24 max-w-7xl m-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        {/* <h1 className="text-3xl font-bold">Compare Products</h1> */}
        <button
          className="btn btn-error btn-sm"
          onClick={() => {
            clearAll();
            toast("All products removed from comparison");
          }}
        >
          Clear All
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="table w-full ">
          <thead className="bg-white">
            <tr className="bg-base-200 sticky top-0">
              <th className="w-40 bg-white"></th>
              {items.map((p) => (
                <th key={p.slug} className="text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="font-medium">{p.name}</span>
                    <button
                      className="btn btn-sm btn-outline btn-error mt-1"
                      onClick={() => removeItem(p.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allSpecs.map((spec) => (
              <tr key={spec}>
                <td className="font-medium">{spec}</td>
                {items.map((p) => {
                  const value =
                    p.specs.find((s) => s.field_name === spec)?.value || "-";
                  return (
                    <td key={p.slug + spec} className="text-center">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-sm text-gray-500">
        Products with missing specifications show a "-" placeholder.
      </div>
    </div>
  );
}
