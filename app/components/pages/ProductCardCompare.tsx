"use client";
import Image from "next/image";
import { IconCircleCheck } from "@tabler/icons-react";
import { CompareProduct, useCompare } from "@/app/context/CompareContext";

interface Props {
  product: CompareProduct;
}

export default function ProductCardCompare({ product }: Props) {
  const { removeItem } = useCompare();

  const attr1 = product.specs.filter((s: any) => s.display_section === "attr1");
  const attr2 = product.specs.filter((s: any) => s.display_section === "attr2");
  const tag2 = product.specs.filter((s: any) => s.display_section === "tag2");

  return (
    <div className="border rounded-lg bg-white shadow-md p-4 flex flex-col">
      {/* Image & Name */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={product.image || "/images/noimage.jpg"}
          alt={product.name}
          width={200}
          height={150}
          className="rounded-md object-cover"
        />
        <p className="font-bold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <button
          className="btn btn-xs btn-outline mt-2"
          onClick={() => removeItem(product.slug)}
        >
          حذف
        </button>
      </div>

      {/* ATTR1 */}
      {attr1.length > 0 && (
        <div className="flex flex-row flex-wrap justify-center gap-2 mt-3">
          {attr1.map((s : any, i) => (
            <div
              key={i}
              className="badge badge-outline bg-zinc-100 text-zinc-800"
            >
              {s.field_name && <span>{s.field_name}: </span>}
              {s.value} {s.unit}
            </div>
          ))}
        </div>
      )}

      {/* ATTR2 */}
      {attr2.length > 0 && (
        <div className="flex flex-col mt-3 gap-1">
          {attr2.map((s: any, i) => (
            <div key={i} className="flex items-center gap-2">
              <IconCircleCheck size={16} className="text-green-500" />
              <p className="text-sm">
                {s.field_name && <span>{s.field_name}: </span>}
                {s.value} {s.unit}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAG2 */}
      {tag2.length > 0 && (
        <div className="flex flex-row flex-wrap gap-2 mt-3">
          {tag2.map((t, i) => (
            <div
              key={i}
              className="badge badge-outline bg-blue-100 text-blue-800"
            >
              {t.field_name} {t.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
