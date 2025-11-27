"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function FormContactUs() {
  const t = useTranslations("FormContactUs");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(t("logMessage"), data);
    // TODO: send to API here
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full border border-zinc-200 p-4"
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">{t("fields.nameLabel")}</label>
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
            minLength: {
              value: 10,
              message: t("errors.messageTooShort"),
            },
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
