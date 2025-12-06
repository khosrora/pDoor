"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function DeleteIcon({ label }: { label: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // TRUE if any filter is applied
  const hasFilters = searchParams.toString() !== "";

  function clearAll() {
    router.push(pathname); // removes all search params
  }

  if (!hasFilters) return null; // hide text

  return (
    <p onClick={clearAll} className="text-red-600 cursor-pointer">
      {label}
    </p>
  );
}

export default DeleteIcon;
