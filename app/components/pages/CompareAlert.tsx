"use client";

import { useCompare } from "@/app/context/CompareContext";
import Link from "next/link";
import { IconAlertCircle } from "@tabler/icons-react";

export default function CompareAlert() {
  const { items, clearAll } = useCompare();

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-1/5 w-1/2 z-50 bg-[#003148] border border-blue-200 rounded-md shadow-lg p-4 flex flex-row justify-between gap-2">
      <div className="flex flex-col justify-end items-center gap-y-2">
        <Link href="/compare" className="text-center btn w-50 text-[#003148] bg-yellow-400">
          مقایسه {items.length}/3
        </Link>
          <button className="btn w-50 text-[#003148]" onClick={clearAll}> حذف همه </button>
      </div>
      <div className="flex w-full items-center justify-around gap-2">
        <div>
          name
        </div>
         <div>
          name
        </div>
         <div>
          name
        </div>
      </div>
      
    </div>
  );
}
