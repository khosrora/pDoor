"use client";

import { useEffect, useState } from "react";
import { IconUserQuestion } from "@tabler/icons-react";
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
  // const dir = locale === "fa" ? "rtl" : "ltr";

  const [categories, setCategories] = useState<Category[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingFaq, setLoadingFaq] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  /* ------------------------------------
      Fetch Categories
  ------------------------------------ */
  useEffect(() => {
    setLoadingCategories(true);

    api
      .get<Category[]>(`/v1/faq/categories/?lang=${locale}`)
      .then((res) => {
        // Remove duplicates
        const unique = Array.from(
          new Map(res.data.map((item) => [item.id, item])).values()
        );

        setCategories(unique);

        if (unique.length > 0) {
          setSelectedCategory(unique[0].id);
        }
      })
      .catch((err) => console.error("Category Fetch Error:", err))
      .finally(() => setLoadingCategories(false));
  }, [locale]);

  /* ------------------------------------
      Fetch FAQs
  ------------------------------------ */
  useEffect(() => {
    setLoadingFaq(true);

    api
      .get<FaqItem[]>(`/v1/faq/?lang=${locale}`)
      .then((res) => setFaqs(res.data))
      .catch((err) => console.error("FAQ Fetch Error:", err))
      .finally(() => setLoadingFaq(false));
  }, [locale]);

  /* ------------------------------------
      Filter FAQs by Category
  ------------------------------------ */
  const filteredFaqs =
    selectedCategory === null
      ? faqs
      : faqs.filter((f) => f.category?.id === selectedCategory);

  /* ------------------------------------
      Submit Question
  ------------------------------------ */
  const onSubmit = (data: FormValues) => {
    console.log("QUESTION:", data);
    reset();
  };

  return (
    <div>
      {/* ------------------------------
          Categories Header
      ------------------------------ */}
       <p className="text-center mb-4 font-bold text-[33px]">
          {t("Footer.columns.about.questions")}
        </p>
      <div className="flex justify-center items-center py-8">
        {loadingCategories ? (
          <p className="text-xs text-zinc-500">Loading...</p>
        ) : (
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-xs border transition ${
                  selectedCategory === cat.id
                    ? "bg-[#005E8B] text-white"
                    : "bg-white text-black border-zinc-300 hover:bg-zinc-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ------------------------------
          FAQs List
      ------------------------------ */}
      <div className="p-4 mx-auto max-w-3xl space-y-4" >
       

        {loadingFaq ? (
          <p className="text-xs text-center text-zinc-500">Loading...</p>
        ) : filteredFaqs.length === 0 ? (
          <p className="text-center text-xs text-zinc-500">
            {t("faq.noData")}
          </p>
        ) : (
          filteredFaqs.map((faq, index) => (
            <div
              key={faq.order + "_" + index}
              className="collapse collapse-arrow border border-base-200 bg-zinc-50"
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
          ))
        )}

        {/* ------------------------------
            Ask A Question (form)
        ------------------------------ */}
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
            <div className="flex justify-start items-center gap-x-2 py-6">
              <img src={"/SVGs/comments.svg"} className="w-12 h-12" />
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
