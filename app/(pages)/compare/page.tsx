"use client";

import { useCompare } from "@/app/context/CompareContext";
import Image from "next/image";
import React from "react";

export default function ComparePage() {
  const { items, removeItem, clear } = useCompare();

  if (items.length === 0)
    return <p className="text-center py-10">No items to compare.</p>;

  type SectionKey = "highlight" | "detail" | "tag";

  // --------- Group specs by section ---------
  const groupedSpecs: Record<SectionKey, Set<string>> = {
    highlight: new Set<string>(),
    detail: new Set<string>(),
    tag: new Set<string>(),
  };

  items.forEach((product) => {
    product.specs.forEach((spec) => {
      if (spec.field_name) {
        groupedSpecs[spec.display_section].add(spec.field_name);
      }
    });
  });

  const sections: { key: SectionKey; label: string }[] = [
    { key: "highlight", label: "ویژگی‌های اصلی" },
    { key: "detail", label: "مشخصات فنی" },
    { key: "tag", label: "تگ‌ها" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 p-4">
      {/* <div className="flex justify-between mb-6"> */}
        {/* <h1 className="text-2xl font-bold">مقایسه محصولات</h1> */}
        {/* <div className="flex gap-2">
          <button className="btn btn-error btn-sm" onClick={clear}>
            حذف همه
          </button>
        </div> */}
      {/* </div> */}

      <div className="overflow-auto border border-zinc-200 rounded-lg">
        <table className="table bg-zinc-100 space-x-2 w-full">
          <thead>
            <tr>
              <th className="bg-white"></th>
              {items.map((p) => (
                <th key={p.slug} className="text-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={140}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    {/* <p className="font-bold mt-2">{p.name}</p>
                    <p className="text-sm text-gray-500">{p.brand}</p> */}
                    <button
                      className="btn btn-xs btn-outline mt-2"
                      onClick={() => removeItem(p.slug)}
                    >
                      حذف
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sections.map((section) => {
              const keys = Array.from(groupedSpecs[section.key]);

              if (keys.length === 0) return null;

              return (
                <React.Fragment key={section.key}>
                  {/* Section Title Row */}
                  <tr>
                    <td
                      colSpan={items.length + 1}
                      className="bg-[#fccd5e] font-bold text-black text-center py-3"
                    >
                      {section.label}
                    </td>
                  </tr>

                  {/* Specs Rows */}
                  {keys.map((fieldName) => (
                    <tr key={fieldName}>
                      <td className="font-medium">{fieldName}</td>
                      {items.map((p) => {
                        const s = p.specs.find(
                          (x) => x.field_name === fieldName
                        );
                        return (
                          <td key={p.slug} className="text-center">
                            {s ? `${s.value ?? ""} ${s.unit ?? ""}` : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
