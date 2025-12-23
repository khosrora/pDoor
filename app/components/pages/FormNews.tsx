"use client";

import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import api from "@/app/lib/axios";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

interface FormNewsProps {
  postId: number;
}

export default function FormNews({ postId }: FormNewsProps) {
  const t = useTranslations("FormNews");
  const locale = useLocale(); // fa | en
  const lang = locale === "fa" ? "fa" : "en";

  /* ===== Rating state ===== */
  const [rating, setRating] = useState<number | null>(null);
  const [ratingLoading, setRatingLoading] = useState(false);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [ratingMessage, setRatingMessage] = useState<string | null>(null);

  /* ===== Form ===== */
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(t("logMessage"), data);
    // TODO: send comment to API
    reset();
  };

  /* ===== Rating handler ===== */
  const handleRate = async (value: number) => {
    if (ratingLoading || ratingSubmitted) return;

    setRating(value);
    setRatingLoading(true);
    setRatingMessage(null);

    try {
      const res = await api.post(`/v1/blog/${lang}/posts/rate/`, {
        blog_id: postId,
        value: value,
      });

      if (res.data?.code === "ok") {
        setRatingSubmitted(true);
        setRatingMessage(
          lang === "fa"
            ? "امتیاز شما با موفقیت ثبت شد"
            : "Your rating has been submitted"
        );
      }
    } catch (error: any) {
      const status = error?.response?.status;
      const data = error?.response?.data;

      if (status === 429 && data?.code === "already_rated") {
        setRatingSubmitted(true);
        setRatingMessage(
          lang === "fa"
            ? "شما قبلاً به این مقاله امتیاز داده‌اید"
            : "You have already rated this article"
        );
      } else {
        setRating(null);
        setRatingMessage(
          lang === "fa"
            ? "خطایی رخ داد. لطفاً دوباره تلاش کنید"
            : "Something went wrong. Please try again"
        );
      }
    } finally {
      setRatingLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full p-4">
      <div className="flex w-full justify-between">
        <p className="text-[25px] font-bold">{t("fields.writeYourComment")}</p>

        {/* ===== Rating section ===== */}
        <div className="space-y-2">
          

          <div className="rating rating-md">
            {[1, 2, 3, 4, 5].map((value) => (
              <input
                key={value}
                type="radio"
                name={`rating-${postId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${value} star`}
                checked={rating === value}
                disabled={ratingSubmitted || ratingLoading}
                onChange={() => handleRate(value)}
              />
            ))}
          </div>

          {ratingMessage && (
            <p
              className={`text-xs ${
                ratingSubmitted ? "text-green-600" : "text-red-500"
              }`}
            >
              {ratingMessage}
            </p>
          )}
        </div>
      </div>

      {/* ===== Message ===== */}
      <div className="flex flex-col gap-1">
        <textarea
          placeholder={t("fields.messagePlaceholder")}
          {...register("message", {
            required: t("errors.messageRequired"),
            minLength: {
              value: 10,
              message: t("errors.messageTooShort"),
            },
          })}
          className="textarea border-0 bg-zinc-100 w-full h-[300px]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* ===== Name & Email ===== */}
      <div className="flex gap-x-3">
        <div className="flex flex-col gap-1 w-1/2">
          <input
            type="text"
            placeholder={t("fields.namePlaceholder")}
            {...register("name", {
              required: t("errors.nameRequired"),
            })}
            className="input border-0 bg-zinc-100 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-1/2">
          <input
            type="email"
            placeholder={t("fields.emailPlaceholder")}
            {...register("email", {
              required: t("errors.emailRequired"),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("errors.emailInvalid"),
              },
            })}
            className="input border-0 bg-zinc-100 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* ===== Submit ===== */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn bg-[#003F5D] w-[200px] text-white"
      >
        {isSubmitting ? t("submit.submitting") : t("submit.idle")}
      </button>
    </form>
  );
}
