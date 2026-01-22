"use client";

import { useCompare } from "@/app/context/CompareContext";
import Link from "next/link";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";

export default function CompareAlert() {
  const { items, clearAll, removeItem } = useCompare();

  if (items.length === 0) return null;

  return (
    <div className="
      fixed bottom-4 right-1/2 translate-x-1/2
      w-[90%] max-w-4xl z-50
      bg-[#003148] border border-blue-200
      rounded-md shadow-lg p-4
      flex flex-col lg:flex-row gap-4
    ">
      {/* LEFT ACTIONS */}
      <div className="flex flex-row lg:flex-col justify-between gap-2 min-w-[160px]">
        <Link
          href="/compare"
          className="btn bg-yellow-400 text-[#003148]"
        >
          مقایسه {items.length}/3
        </Link>

        <button
          className="btn text-[#003148]"
          onClick={clearAll}
        >
          حذف همه
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-3 gap-10 items-center justify-start overflow-x-auto px-2">
        {items.map((item) => (
          <div
            key={item.slug}
            className="
              relative flex items-center gap-2
              text-white rounded-md p-4 
            "
          >
            {/* IMAGE */}
            {/* <Image
              src={item.image || "/images/noimage.jpg"}
              alt={item.name}
              width={50}
              height={50}
              className="rounded"
            /> */}

            {/* NAME */}
            <div className="flex flex-col text-sm">
              <span className="font-semibold  ">
                {item.name}
              </span>
              {/* {item.brand && (
                <span className="text-xs text-zinc-500">
                  {item.brand}
                </span>
              )} */}
            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeItem(item.slug)}
              className="absolute -top-4 -right-2 text-white rounded-full p-1"
            >
              <IconX size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
