"use client";

import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import api from "@/app/lib/axios";
import { toast } from "sonner";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function FormContactUs() {
  const t = useTranslations("FormContactUs");
  const locale = useLocale();

  const dir = locale === "fa" ? "rtl" : "ltr";
  const textDir = locale === "fa" ? "text-right" : "text-left";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await api.post("/v1/contact/", data);
      toast.success(t("successMessage"));
      reset();
    } catch (error) {
      console.error("CONTACT ERROR:", error);
      toast.error(t("errorMessage"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir={dir}
      className={`space-y-4 w-full border border-zinc-200 p-4 ${textDir}`}
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">{t("fields.nameLabel")}</label>
        <input
          type="text"
          placeholder={t("fields.namePlaceholder")}
          {...register("name", { required: t("errors.nameRequired") })}
          className="input border-0 bg-zinc-100 rounded w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">{t("fields.emailLabel")}</label>
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

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">{t("fields.messageLabel")}</label>
        <textarea
          placeholder={t("fields.messagePlaceholder")}
          {...register("message", {
            required: t("errors.messageRequired"),
            minLength: { value: 10, message: t("errors.messageTooShort") },
          })}
          className="textarea border-0 bg-zinc-100 w-full h-32"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn bg-[#003F5D] w-full text-white"
      >
        {isSubmitting ? t("submit.submitting") : t("submit.idle")}
      </button>
    </form>
  );
}
