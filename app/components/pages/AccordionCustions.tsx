"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "@/app/lib/axios";

/* ------------------------------------
      Types
------------------------------------ */
type Category = {
  id: number;
  name: string;
  slug: string;
  order: number;
};

type FaqItem = {
  question: string;
  answer: string;
  category: Category;
  order: number;
};

type FormValues = {
  question: string;
};

function AccordionCustions({ isquestion }: { isquestion?: boolean }) {
  const t = useTranslations();
  const locale = useLocale();

  const [categories, setCategories] = useState<Category[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  /* ------------------------------------
      Fetch Categories & FAQs
  ------------------------------------ */
  useEffect(() => {
    setLoading(true);

    Promise.all([
      api.get<Category[]>(`/v1/faq/categories/?lang=${locale}`),
      api.get<FaqItem[]>(`/v1/faq/?lang=${locale}`),
    ])
      .then(([catRes, faqRes]) => {
        setCategories(catRes.data);
        setFaqs(faqRes.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [locale]);

  /* ------------------------------------
      Submit Question
  ------------------------------------ */
  const onSubmit = (data: FormValues) => {
    console.log("QUESTION:", data);
    reset();
  };

  return (
    <div className="lg:my-10">
      {/* Page Title */}
      <p className="text-center mb-10 font-bold text-[33px]">
        {t("Footer.columns.about.questions")}
      </p>

      <div className="p-4 mx-auto max-w-3xl space-y-12">
        {loading ? (
          <p className="text-center text-xs text-zinc-500">Loading...</p>
        ) : (
          categories.map((category) => {
            const categoryFaqs = faqs.filter(
              (f) => f.category?.id === category.id
            );

            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                {/* Category Title */}
                <h2 className="text-[20px] font-bold text-[#005E8B]">
                  {category.name}
                </h2>

                {/* FAQ List */}
                {categoryFaqs.map((faq, index) => (
                  <div
                    key={`${category.id}-${index}`}
                    className="collapse collapse-arrow border border-base-200 bg-zinc-50"
                  >
                    <input type="radio" name={`faq-${category.id}`} />

                    <div className="collapse-title font-semibold text-xs text-[#005E8B]">
                      {faq.question}
                    </div>

                    <div className="collapse-content text-xs">
                      <div
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })
        )}

        {/* Ask Question / More Box */}
        {isquestion ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-zinc-100 p-4 mt-6 rounded space-y-3"
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
              <p className="text-red-500 text-[11px]">
                {t("askBox.error")}
              </p>
            )}

            <button className="btn btn-sm bg-[#005E8B] text-white">
              {t("askBox.send")}
            </button>
          </form>
        ) : (
          <div className="bg-zinc-100 flex justify-between items-center p-4 mt-6 rounded">
            <div className="flex items-center gap-x-2">
              <img src="/SVGs/comments.svg" className="w-12 h-12" />
              <p className="text-[19px]">{t("moreBox.text")}</p>
            </div>

            <Link
              href="/frequently"
              className="btn btn-sm bg-[#005E8B] text-white"
            >
              {t("moreBox.button")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccordionCustions;
