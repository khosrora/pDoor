"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IconBuilding, IconTimeDuration10 } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

interface JobItem {
  id: number;
  title: string;
  work_type: string;
  is_active: boolean;
}

interface FormValues {
  full_name: string;
  email: string;
  phone?: string;
  message?: string;
  resume: FileList;
}

export default function Jobs() {
  const locale = useLocale(); // FA/EN
  const t = useTranslations();
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // ------------------- GET Jobs -------------------
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/contact/jobs/?lang=${locale}`
        );
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
        toast.error(t("Jobs.fetchError") || "Failed to load jobs");
      }
    };

    if (locale) fetchJobs();
  }, [locale, t]);

  // ------------------- POST CV -------------------
  const onSubmit = async (data: FormValues) => {
    if (!selectedJobId) return;

    if (!data.resume?.length) {
      toast.error(t("Jobs.resumeRequired") || "Please upload your CV");
      return;
    }

    const formData = new FormData();
    formData.append("job", String(selectedJobId));
    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);
    if (data.message) formData.append("message", data.message);
    formData.append("resume", data.resume[0]);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/contact/jobs/apply/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      toast.success(t("Jobs.success") || "Application sent successfully!");
      reset();
      setSelectedJobId(null);
    } catch (err) {
      console.error(err);
      toast.error(t("Jobs.error") || "Failed to send application");
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {jobs
        .filter((j) => j.is_active)
        .map((job) => (
          <div
            key={job.id}
            className="bg-zinc-100 rounded p-4 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{job.title}</p>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <IconTimeDuration10 size={20} />
                    <span>
                      {job.work_type === "full_time"
                        ? t("Jobs.typeFullTime") ||
                          (locale === "fa" ? "تمام وقت" : "Full Time")
                        : t("Jobs.typePartTime") ||
                          (locale === "fa" ? "پاره وقت" : "Part Time")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconBuilding size={20} />
                    <span>
                      {t("Jobs.locationOnsite") ||
                        (locale === "fa" ? "حضوری" : "On-site")}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-xs btn-outline lg:btn-md"
                onClick={() =>
                  setSelectedJobId(selectedJobId === job.id ? null : job.id)
                }
              >
                {t("Jobs.sendCvButton") ||
                  (locale === "fa" ? "ارسال رزومه" : "Send CV")}
              </button>
            </div>

            {selectedJobId === job.id && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 border-t pt-4 mt-4"
              >
                <input
                  type="text"
                  placeholder={
                    t("Jobs.fullName") ||
                    (locale === "fa" ? "نام و نام خانوادگی" : "Full Name")
                  }
                  {...register("full_name", { required: true, maxLength: 255 })}
                  className="input input-bordered w-full"
                />
                {errors.full_name && (
                  <span className="text-red-500">
                    {t("Jobs.fullNameRequired") ||
                      (locale === "fa"
                        ? "نام و نام خانوادگی الزامی است"
                        : "Full Name is required")}
                  </span>
                )}

                <input
                  type="email"
                  placeholder={
                    t("Jobs.email") || (locale === "fa" ? "ایمیل" : "Email")
                  }
                  {...register("email", { required: true, maxLength: 254 })}
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-500">
                    {t("Jobs.emailRequired") ||
                      (locale === "fa"
                        ? "ایمیل الزامی است"
                        : "Email is required")}
                  </span>
                )}

                <input
                  type="text"
                  placeholder={
                    t("Jobs.phone") ||
                    (locale === "fa" ? "شماره تماس" : "Phone")
                  }
                  {...register("phone", { maxLength: 20 })}
                  className="input input-bordered w-full"
                />

                <textarea
                  placeholder={
                    t("Jobs.message") ||
                    (locale === "fa" ? "پیام (اختیاری)" : "Message (optional)")
                  }
                  {...register("message")}
                  className="textarea textarea-bordered w-full"
                />

                <input
                  type="file"
                  accept="application/pdf"
                  {...register("resume", { required: true })}
                  className="file-input file-input-bordered w-full"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("Jobs.sending") ||
                      (locale === "fa" ? "در حال ارسال..." : "Sending...")
                    : t("Jobs.sendCvButton") ||
                      (locale === "fa" ? "ارسال رزومه" : "Send CV")}
                </button>
              </form>
            )}
          </div>
        ))}
    </div>
  );
}
