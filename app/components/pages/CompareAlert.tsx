"use client";

import { useCompare } from "@/app/context/CompareContext";
import Link from "next/link";
import { IconAlertCircle } from "@tabler/icons-react";

export default function CompareAlert() {
  const { items } = useCompare();

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-72 bg-blue-50 border border-blue-200 rounded-md shadow-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <IconAlertCircle size={20} className="text-blue-600" />
        <p className="font-medium text-blue-700 text-sm">
          شما {items.length} محصول را برای مقایسه انتخاب کرده‌اید
        </p>
      </div>
      <Link
        href="/compare"
        className="text-center btn btn-sm btn-primary"
      >
        مشاهده مقایسه
      </Link>
    </div>
  );
}
