"use client";

import {
  IconHeadphones,
  IconUserQuestion,
  IconDeviceFloppy,
  IconTools,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type ServiceId =
  | "persiaService"
  | "freeConsultation"
  | "installationWarranty"
  | "serviceMaintenance";

const items: { id: ServiceId; icon: any }[] = [
  {
    id: "persiaService",
    icon: <img src={'/SVGs/headset1.svg'} />,
  },
  {
    id: "freeConsultation",
    icon: <img src={'/SVGs/wechat.svg'}/>,
  },
  {
    id: "installationWarranty",
    icon: <img src={'/SVGs/certificate2.svg'} />,
  },
  {
    id: "serviceMaintenance",
    icon: <img src={'/SVGs/tool.svg'} />,
  },
];

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");

  return (
    <section
      className="w-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl m-auto"
      dir="rtl"
    >
      {items.map((item, index) => {
        const isRight = index % 2 !== 0;
        const firstCard = index === 0; // even = polygon on RIGHT

        return (
          <div
            key={item.id}
            className="relative lg:h-[250px] p-4 bg-white rounded-md overflow-hidden flex items-center gap-4"
          >
            {/* BLUE POLYGON (ALTERNATES LEFT / RIGHT) */}
            <div
              className={`absolute top-0 h-full w-30 bg-[#0C5273]
              ${isRight ? "right-0 my-clip-card-rt" : "left-0 my-clip-card-lt"}
            `}
            ></div>

            {/* Icon Bubble */}
            <div
              className={`absolute z-1 w-[48px] h-[48px] rounded-full bg-[#0C5273] flex items-center justify-center
              ${isRight ? "right-4" : "left-4"}
            `}
            >
              {item.icon}
            </div>

            {/* Text Content */}
            <div
              className={`relative z-1 ${
                isRight
                  ? "flex justify-end items-end text-right"
                  : "flex-row-reverse"
              } gap-x-2`}
            >
              <div className=""></div>
              <div className="w-4/5">
                <h2 className="text-[#0C5273] font-bold text-xl mb-2">
                  {t(`items.${item.id}.title`)}
                </h2>

                <p className="text-gray-700 text-sm leading-6">
                  {t(`items.${item.id}.description`)}
                </p>

                {firstCard && (
                  <Link href={`installation`}>
                  <button className=" mt-4 text-[#005E8B] text-sm font-medium pb-1">
                    {t("learn_more")}
                  </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
