import { IconLocationPin, IconPhoneFilled } from "@tabler/icons-react";
import FormContactUs from "../../components/pages/FormContactUs";
import GoogleMap from "../../components/pages/GoogleMap";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="p-4 space-y-4 max-w-5xl m-auto">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
        {/* Left column: hero + contacts + social (desktop) */}
        <div className="space-y-4">
          {/* Hero text */}
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
                    <a
                      href="tel:02188775437"
                      className="hover:text-blue-600 transition"
                    >
                      021-88775437
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:02188773432"
                      className="hover:text-blue-600 transition"
                    >
                      021-88773432
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:02177181018"
                      className="hover:text-blue-600 transition"
                    >
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
                    <a
                      href="tel:09022886628"
                      className="hover:text-blue-600 transition"
                    >
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
                    <a
                      href="tel:090228863667"
                      className="hover:text-blue-600 transition"
                    >
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

          {/* Social (desktop only) */}
          <div className="hidden lg:flex lg:justify-between border border-zinc-200 p-4 space-y-4 lg:space-y-0 lg:border-none lg:bg-zinc-100">
            <p className="text-center">{t("social.title")}</p>
            <nav>
              <div className="flex justify-around items-center gap-x-4">
                <a aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a aria-label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Right column: contact form */}
        <FormContactUs />
      </div>

      {/* Social (mobile) */}
      <div className="border border-zinc-200 p-4 space-y-4 lg:hidden">
        <p className="text-center">{t("social.title")}</p>
        <nav>
          <div className="flex justify-around items-center">
            <a aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <GoogleMap />
    </div>
  );
}
