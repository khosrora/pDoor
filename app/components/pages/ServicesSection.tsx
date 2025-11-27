"use client";

import {
  IconHeadphones,
  IconUserQuestion,
  IconDeviceFloppy,
  IconTools,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

type ServiceId =
  | "persiaService"
  | "freeConsultation"
  | "installationWarranty"
  | "serviceMaintenance";

const items: { id: ServiceId; icon: any }[] = [
  {
    id: "persiaService",
    icon: <IconHeadphones size={34} className="text-white" />,
  },
  {
    id: "freeConsultation",
    icon: <IconUserQuestion size={34} className="text-white" />,
  },
  {
    id: "installationWarranty",
    icon: <IconDeviceFloppy size={34} className="text-white" />,
  },
  {
    id: "serviceMaintenance",
    icon: <IconTools size={34} className="text-white" />,
  },
];

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");

  return (
    <section
      className="w-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
      dir="rtl"
    >
      {items.map((item, index) => {
        const isRight = index % 2 === 0; // even = polygon on RIGHT

        return (
          <div
            key={item.id}
            className="relative p-4 bg-white shadow-md overflow-hidden flex items-center gap-4"
          >
            {/* BLUE POLYGON (ALTERNATES LEFT / RIGHT) */}
            <div
              className={`absolute top-0 h-full w-24 bg-[#0C5273]
              ${isRight ? "right-0 my-clip-card-rt" : "left-0 my-clip-card-lt"}
            `}
            ></div>

            {/* Icon Bubble */}
            <div
              className={`absolute z-10 w-14 h-14 rounded-full bg-[#0C5273] flex items-center justify-center
              ${isRight ? "right-4" : "left-4"}
            `}
            >
              {item.icon}
            </div>

            {/* Text Content */}
            <div
              className={`relative z-10 ${
                isRight
                  ? "flex justify-end items-end text-right"
                  : "flex-row-reverse"
              } gap-x-2`}
            >
              <div className="w-1/4"></div>
              <div className="w-3/4">
                <h2 className="text-[#0C5273] font-bold text-xl mb-2">
                  {t(`items.${item.id}.title`)}
                </h2>

                <p className="text-gray-700 text-sm leading-6">
                  {t(`items.${item.id}.description`)}
                </p>

                <button className="mt-4 text-[#0C5273] text-sm font-medium border-b border-[#0C5273] pb-1">
                  {t("moreProducts")}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
