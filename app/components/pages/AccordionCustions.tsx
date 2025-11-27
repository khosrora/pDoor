"use client";

import { IconUserQuestion } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

function AccordionCustions() {
  const t = useTranslations("Accordion");

  const items = [
    { id: 1, key: "question1" },
    { id: 2, key: "question2" },
    { id: 3, key: "question3" },
    { id: 4, key: "question4" },
    { id: 5, key: "question5" },
  ] as const;

  return (
    <div className="p-4 max-w-5xl m-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="collapse collapse-arrow border border-base-200 bg-zinc-100"
        >
          {/* only first item checked by default */}
          <input
            type="radio"
            name="my-accordion-2"
            defaultChecked={index === 0}
          />
          <div className="collapse-title font-semibold text-[#005E8B] text-xs">
            {t(`${item.key}.title`)}
          </div>
          <div className="collapse-content text-xs">
            {t(`${item.key}.body`)}
          </div>
        </div>
      ))}

      <div className="bg-zinc-100 flex justify-between items-center p-4 mt-4 rounded">
        <div className="flex justify-start items-center w-1/2 gap-x-2">
          <IconUserQuestion className="w-12 h-12" />
          <p className="text-[12px]">{t("moreBox.text")}</p>
        </div>
        <button className="btn btn-sm bg-[#005E8B] text-white">
          {t("moreBox.button")}
        </button>
      </div>
    </div>
  );
}

export default AccordionCustions;
