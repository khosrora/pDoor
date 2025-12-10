"use client";

import { Product } from "@/app/(pages)/products/page";

type Specification = {
  field_name?: string;
  value?: string | null;
  unit?: string;
  display_section?: string;
};



interface Props {
  product: Product;
}

export default function ProductAttributes({ product }: Props) {
  if (!product) return null;

  // Select all items where display_section === "attr1"
  const attr1Items = product.specifications?.filter(
    (item) => item.display_section === "attr1"
  );

  return (
    <div className="mx-2">
      {/* Product Name */}
      <h1 className="text-base font-bold mb-4">{product.name}</h1>

      {/* Render attr1 items */}
      {attr1Items && attr1Items.length > 0 ? (
        <div className="flex flex-wrap">
          {attr1Items.map((spec, index) => (
            <div
              key={index}
              className="badge badge-xs bg-zinc-100 rounded-full"
            >
              <span className="font-medium">{spec.field_name}</span>
              <span className="text-gray-600">
                {spec.value} {spec.unit}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No attributes available.</p>
      )}
    </div>
  );
}
