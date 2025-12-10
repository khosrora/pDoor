"use client";

import { useCompare } from "@/app/context/CompareContext";
import Link from "next/link";
import { IconAlertCircle } from "@tabler/icons-react";

export default function CompareAlert() {
  const { items, clearAll } = useCompare();

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-1/5 w-1/2 z-50 bg-[#003148] border border-blue-200 rounded-md shadow-lg p-4 flex flex-row justify-between gap-2">
      <div className="flex items-center gap-2">
        <IconAlertCircle size={20} className="text-white" />
        <p className="font-medium text-white text-sm">
          شما {items.length} محصول را برای مقایسه انتخاب کرده‌اید
        </p>
      </div>
      <div className="flex justify-end items-center gap-x-2">
        <Link href="/compare" className="text-center btn btn-xs bg-yellow-400">
          مشاهده مقایسه
        </Link>
          <button className="btn btn-xs btn-error" onClick={clearAll}> حذف همه </button>
      </div>
    </div>
  );
}
