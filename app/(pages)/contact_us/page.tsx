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
    <div dir={dir} className={`p-4 space-y-4 max-w-5xl m-auto ${textDir}`}>
      <Breadcrumbs />

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
        {/* Left column */}
        <div className="space-y-4">
          {/* Hero */}
          <div className="border border-zinc-200 p-4 space-y-4 lg:border-none lg:bg-zinc-100">
            <p className="text-[#FAB21F]">{t("hero.title")}</p>
            <p>{t("hero.text")}</p>
          </div>

          {/* Contact blocks */}
          <div className="border border-zinc-200 p-4 space-y-4 lg:border-none lg:bg-zinc-100">
            {/* HQ */}
            <div className="flex flex-col">
              <div className="flex gap-x-4">
                <div className="flex justify-start items-center gap-x-2">
                  <div className="border border-blue-800 rounded flex justify-center items-center p-2">
                    <IconPhoneFilled className="text-blue-800" />
                  </div>
                  <h2>{t("blocks.hqTitle")}</h2>
                </div>

                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="tel:02188775437" className="hover:text-blue-600">
                      021-88775437
                    </a>
                  </li>
                  <li>
                    <a href="tel:02188773432" className="hover:text-blue-600">
                      021-88773432
                    </a>
                  </li>
                  <li>
                    <a href="tel:02177181018" className="hover:text-blue-600">
                      021-77181018
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sales */}
            <div className="flex flex-col">
              <div className="flex gap-x-4">
                <div className="flex justify-start items-center gap-x-2">
                  <div className="border border-blue-800 rounded flex justify-center items-center p-2">
                    <IconPhoneFilled className="text-blue-800" />
                  </div>
                  <h2>{t("blocks.salesTitle")}</h2>
                </div>

                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="tel:09022886628" className="hover:text-blue-600">
                      0902 2886 628
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <div className="flex gap-x-4">
                <div className="flex justify-start items-center gap-x-2">
                  <div className="border border-blue-800 rounded flex justify-center items-center p-2">
                    <IconPhoneFilled className="text-blue-800" />
                  </div>
                  <h2>{t("blocks.serviceTitle")}</h2>
                </div>

                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="tel:090228863667" className="hover:text-blue-600">
                      0902 2886 3667
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address */}
            <div className="flex justify-start gap-x-2">
              <div className="border border-blue-800 rounded flex justify-center items-center p-2">
                <IconLocationPin className="text-blue-800" />
              </div>
              <p>
                {t("blocks.addressLine1")}
                <br />
                {t("blocks.addressLine2")}
              </p>
            </div>
          </div>

          {/* Social (desktop) */}
          <div className="hidden lg:flex lg:justify-between border border-zinc-200 p-4 lg:border-none lg:bg-zinc-100">
            <p className="text-center">{t("social.title")}</p>
            <nav>
              <div className="flex justify-around gap-x-4">
                {/* icons... unchanged */}
              </div>
            </nav>
          </div>
        </div>

        {/* Right column: form */}
        <FormContactUs />
      </div>

      {/* Social (mobile) */}
      <div className="border border-zinc-200 p-4 space-y-4 lg:hidden">
        <p className="text-center">{t("social.title")}</p>
        {/* icons... unchanged */}
      </div>

      <GoogleMap />
    </div>
  );
}
