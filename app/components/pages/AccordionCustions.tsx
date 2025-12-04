"use client";

import { useEffect, useState } from "react";
import { IconUserQuestion } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "@/app/lib/axios";

type FaqItem = {
  question: string;
  answer: string;
  category: {
    id: number;
    name: string;
    slug: string;
    order: number;
  };
  order: number;
};

type FormValues = {
  question: string;
};

function AccordionCustions({ isquestion }: { isquestion?: boolean }) {
  const t = useTranslations();
  const locale = useLocale(); // ← GET CURRENT LANGUAGE (en / fa)
  const dir = locale === "fa" ? "rtl" : "ltr"; // ← SET DIRECTION

  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // Load FAQs based on locale
  useEffect(() => {
    api
      .get(`/v1/faq/?lang=${locale}`)
      .then((res) => setFaqs(res.data))
      .catch((err) => console.error("FAQ Fetch Error:", err))
      .finally(() => setLoading(false));
  }, [locale]);

  const onSubmit = (data: FormValues) => {
    console.log("QUESTION SENT:", data);
    reset();
  };

  return (
    <div
      className="p-4 mx-auto max-w-3xl space-y-4"
      dir={dir} // <<< APPLY RTL/LTR HERE
    >
      <p className="text-center my-4 font-bold">سوالات متداول</p>
      {!loading &&
        faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow border border-base-200 bg-zinc-100"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />

            <div className="collapse-title font-semibold text-[#005E8B] text-xs">
              {faq.question}
            </div>

            <div className="collapse-content text-xs">
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}

      {/* Ask a question form */}
      {isquestion ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-100 p-4 mt-4 rounded space-y-3"
        >
          <label className="text-xs font-semibold text-[#005E8B]">
            {t("askBox.label")}
          </label>

          <textarea
            {...register("question", { required: true, minLength: 5 })}
            placeholder={t("askBox.placeholder")}
            className="textarea border-none w-full text-xs bg-white"
            rows={4}
          />

          {errors.question && (
            <p className="text-red-500 text-[11px]">{t("askBox.error")}</p>
          )}

          <button className="btn btn-sm bg-[#005E8B] text-white">
            {t("askBox.send")}
          </button>
        </form>
      ) : (
        <div className="bg-zinc-100 flex justify-between items-center p-4 mt-4 rounded">
          <div className="flex justify-start items-center w-1/2 gap-x-2">
            <IconUserQuestion className="w-12 h-12" />
            <p className="text-[12px]">{t("moreBox.text")}</p>
          </div>
          <Link
            href={"/frequently"}
            className="btn btn-sm bg-[#005E8B] text-white"
          >
            {t("moreBox.button")}
          </Link>
        </div>
      )}
    </div>
  );
}

export default AccordionCustions;
