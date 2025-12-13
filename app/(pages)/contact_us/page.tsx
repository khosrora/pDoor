import { IconLocationPin, IconPhoneFilled } from "@tabler/icons-react";
import FormContactUs from "../../components/pages/FormContactUs";
import GoogleMap from "../../components/pages/GoogleMap";
import { getTranslations, getLocale } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";

export const metadata: Metadata = {
  title: "پرشیادُر | تماس با ما",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");
  const locale = await getLocale();

  const dir = locale === "fa" ? "rtl" : "ltr";
  const textDir = locale === "fa" ? "text-right" : "text-left";

  return (
    <div
      dir={dir}
      className={`p-4 space-y-4 max-w-7xl mt-20 mx-auto ${textDir}`}
    >
      <Breadcrumbs />

      {/* GRID LAYOUT */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-4">
        {/* ================= LEFT COLUMN (2/3) ================= */}
        <div className="space-y-4 lg:col-span-2">
          {/* Hero */}
          <div className="border border-zinc-200 p-4 space-y-4 lg:border-none lg:bg-zinc-100 p-4">
            <p className="text-[#FAB21F] text-[20px]">{t("hero.title")}</p>
            <p className="text-[16px]">{t("hero.text")}</p>
          </div>

          {/* Contact blocks */}
          <div className="p-4 space-y-4 lg:border-none lg:bg-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HQ */}
            <div className="flex items-start gap-x-4">
              <div className="border border-blue-800 rounded p-2 shrink-0">
                <img
                  src={"/SVGs/phone-call-filled.svg"}
                  className="text-blue-800"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-medium">{t("blocks.hqTitle")}</h2>
                <ul className="flex flex-col gap-1 text-sm">
                  <li>
                    <a href="tel:02188775437">021-88775437</a>
                  </li>
                  <li>
                    <a href="tel:02188773432">021-88773432</a>
                  </li>
                  <li>
                    <a href="tel:02177181018">021-77181018</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sales */}
            <div className="flex items-start gap-x-4">
              <div className="border border-[#005E8B] rounded p-2 shrink-0">
                <img src={"/SVGs/phone-call-filled.svg"} />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-medium">{t("blocks.salesTitle")}</h2>
                <a href="tel:09022886628" className="text-sm">
                  0902 2886 628
                </a>
              </div>
            </div>

            {/* Service */}
            <div className="flex items-start gap-x-4">
              <div className="border border-[#005E8B] rounded p-2 shrink-0">
                <img src={"/SVGs/phone-call-filled.svg"} />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-medium">{t("blocks.serviceTitle")}</h2>
                <a href="tel:090228863667" className="text-sm">
                  0902 2886 3667
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-x-4">
              <div className="border border-[#005E8B]  rounded p-2 shrink-0">
                <img src={"/SVGs/local-filled.svg"} />
              </div>

              <p className="text-sm leading-relaxed">
                {t("blocks.addressLine1")}
                <br />
                {t("blocks.addressLine2")}
              </p>
            </div>
          </div>

          {/* Social (desktop) */}
          <div className="hidden lg:flex justify-between p-4 lg:bg-zinc-100">
            <p>{t("social.title")}</p>
            <nav>
              <div className="flex gap-x-4">{/* icons */}</div>
            </nav>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (1/3) ================= */}
        <div className="lg:col-span-1 ">
          <FormContactUs />
        </div>
      </div>

      {/* Social (mobile) */}
      <div className="border border-zinc-200 p-4 space-y-4 lg:hidden">
        <p className="text-center">{t("social.title")}</p>
        {/* icons */}
      </div>

      <GoogleMap />
    </div>
  );
}
