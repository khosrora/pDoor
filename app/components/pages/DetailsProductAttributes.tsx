"use client";

import { FC } from "react";
import {
  IconCircleChevronLeft,
  IconCircleChevronLeftFilled,
  IconDownload,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";

interface Specification {
  field_name?: string | null;
  value: string | null;
  unit?: string | null;
  display_section: string;
  field_icon?: string;
}

interface ProductAttributesProps {
  name: string;
  specifications?: Specification[];
  loading?: boolean;
}

const DetailsProductAttributes: FC<ProductAttributesProps> = ({
  name,
  specifications = [],
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 w-1/2 skeleton rounded-md"></div>
        <div className="flex gap-2">
          <div className="h-5 w-10 skeleton rounded-full"></div>
          <div className="h-5 w-14 skeleton rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-20 skeleton rounded-md"></div>
          <div className="h-4 w-24 skeleton rounded-md"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-5 w-10 skeleton rounded-full"></div>
          <div className="h-5 w-12 skeleton rounded-full"></div>
        </div>
      </div>
    );
  }

  const attr1 = specifications.filter((s) => s.display_section === "attr1");
  const attr2 = specifications.filter((s) => s.display_section === "attr2");
  const tag2 = specifications.filter((s) => s.display_section === "tag2");

  return (
    <div className="space-y-2">
      {/* Product Name */}
      <p className="font-bold text-2xl">{name}</p>

      {/* ATTR1: flex row */}
      {attr1.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {attr1.map((item, i) => (
            <div
              key={i}
              className="badge badge-xs bg-zinc-100 rounded-full px-2 py-1"
            >
              {item.field_name && <span>{item.field_name}: </span>}
              {item.value} {item.unit}
            </div>
          ))}
        </div>
      )}

      {/* ATTR2: flex column with icon */}
      {attr2.length > 0 && (
        <div className="flex flex-col gap-1 mt-2">
          {attr2.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm my-2">
              <IconCircleChevronLeftFilled className="text-[#ADADAD] w-4 h-4" />
              <span className="text-zinc-500">
                {item.field_name && `${item.field_name}: `}
              </span>
              <span>
                {" "}
                {item.value} {item.unit}{" "}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* TAG2: flex row */}
      {tag2.length > 0 && (
        <div className="flex flex-wrap gap-2 my-4">
          {tag2.map((item, i) => (
            <div
              key={i}
              className=" bg-zinc-100 px-2 py-1 flex justify-center items-center rounded-md"
            >
              <Image
                src={item.field_icon || "/"}
                width={40}
                height={40}
                alt={item.field_name || ""}
              />
              <span className="text-sm">{item.field_name}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-row justify-start gap-2">
        {/* First Button: تماس با تیم فروش */}
        <button className="btn bg-[#005E8B] text-white flex items-center gap-2">
          <IconPhone size={18} />
          تماس با تیم فروش
        </button>

        {/* Second Button: دانلود کاتالوگ محصول */}
        <button className="btn btn-outline flex items-center gap-2">
          <IconDownload size={18} />
          دانلود کاتالوگ محصول
        </button>
      </div>
    </div>
  );
};

export default DetailsProductAttributes;
