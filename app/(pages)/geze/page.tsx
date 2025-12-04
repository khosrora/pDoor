import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";

export const metadata: Metadata = {
  title: "پرشیادُر | درباره گزه GEZE",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function GezePage() {
  const t = await getTranslations("GezePage");

  return (
    <div className="my-20">
      {/* Hero */}
      <div className="p-4">
        <Breadcrumbs />
      </div>
      <div className="bg-[#003F5D] text-white lg:flex lg:items-center lg:justify-center lg:h-[400px]">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">

          {/* title */}
        <p className="flex flex-col font-semibold text-[25px]">
          <span className="text-[#FAB21F]">{t("hero.titlePrefix")} </span>
          {t("hero.titleRest")}
        </p>
        {/* buttons */}
        <div className="flex justify-start items-center gap-x-4 mt-10">
          <button className="btn px-8">{t("hero.consultButton")}</button>
          <button className="btn bg-[#FAB21F] border-0 px-8">
            {t("hero.gezeWebsiteButton")}
          </button>
        </div>
        </div>
        {/* image banner */}
        <div className="lg:w-1/2">
          <img src="/images/geze-banner 1.png" alt="geze_banner" className="lg:w-full lg:h-[400px]" />
        </div>
      </div>

      <div className="p-4 space-y-8 max-w-5xl m-auto">
        {/* About GEZE */}
        <p className="my-6 text-[28px] font-bold">
          {t("about.heading")} <span className="text-[#FAB21F]">GEZE</span>
        </p>

        <div className="border border-zinc-100 rounded p-4 relative w-[80%] lg:w-1/2">
          <p className="w-3/4 text-xs lg:text-base">{t("about.paragraph1")}</p>
          <div className="my-clip-rho bg-[#005E8B] w-24 h-24 absolute -left-6 top-10 lg:-left-12 lg:top-4" />
        </div>

        <div className="flex justify-end mt-4">
          <div className="border border-zinc-100 rounded p-4 relative w-[80%] lg:w-1/2 flex justify-end">
            <p className="w-3/4 text-xs lg:text-base">
              {t("about.paragraph2")}
            </p>
            <div className="my-clip-rho bg-[#005E8B] w-24 h-24 absolute -right-12 top-8 lg:-right-12 lg:top-4" />
          </div>
        </div>

        {/* GEZE products */}
        <div className="space-y-4">
          <p>
            <span className="text-[#FAB21F] text-[28px] font-bold">{t("products.heading")}</span>
          </p>

          <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
            {/* Sliding */}
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2">
              <Image
                src="/images/geze/sliding door.svg"
                width={40}
                height={40}
                alt="Sliding"
              />
              <p className="text-[10px]">{t("products.sliding.title")}</p>
              <p className="text-[8px]">{t("products.sliding.count")}</p>
            </div>

            {/* Hinged */}
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2">
              <Image
                src="/images/geze/swing door.svg"
                width={40}
                height={40}
                alt="Swing"
              />
              <p className="text-[10px]">{t("products.hinged.title")}</p>
              <p className="text-[8px]">{t("products.hinged.count")}</p>
            </div>

            {/* Revolving */}
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2">
              <Image
                src="/images/geze/Revolving door.svg"
                width={40}
                height={40}
                alt="Revolving"
              />
              <p className="text-[10px]">{t("products.revolving.title")}</p>
              <p className="text-[8px]">{t("products.revolving.count")}</p>
            </div>

            {/* Window */}
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2">
              <Image
                src="/images/geze/window.svg"
                width={40}
                height={40}
                alt="Window"
              />
              <p className="text-[10px]">{t("products.window.title")}</p>
              <p className="text-[8px]">{t("products.window.count")}</p>
            </div>

            {/* Accessories */}
            <div className="flex flex-col items-center justify-center border border-zinc-100 rounded p-4 space-y-2">
              <Image
                src="/images/geze/remote-control-filled.svg"
                width={40}
                height={40}
                alt="Remote"
              />
              <p className="text-[10px]">{t("products.accessories.title")}</p>
              <p className="text-[8px]">{t("products.accessories.count")}</p>
            </div>
          </div>
        </div>

        {/* Collaboration section */}
        <div className="bg-zinc-100 p-4 space-y-4 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-x-2">
          <Image
            src="/images/geze/image-823.jpg"
            width={500}
            height={500}
            alt="geze"
          />
          <div className="space-y-4">
            <p className="text-[28px] font-semibold">
              {t("collaboration.headingPrefix")}{" "}
              <span className="text-[#FAB21F]">
                {t("collaboration.headingBrand")}
              </span>{" "}
              {t("collaboration.headingRest")}
            </p>
            <p className="leading-8">{t("collaboration.text")}</p>
          </div>
        </div>

        {/* Representative section */}
        <div className="bg-zinc-100 p-4">
          <p className="text-[#FAB21F] text-[28px] font-semibold">{t("representative.brandName")}</p>
          <p className="text-[28px] font-semibold">{t("representative.subtitle")}</p>
          <div className="flex justify-around lg:max-w-3xl lg:mx-auto my-10">
            <Image
              src="/images/geze/awards-card-component-1.png"
              width={100}
              height={100}
              alt="geze-award-1"
            />
            <Image
              src="/images/geze/awards-card-component-2.png"
              width={100}
              height={100}
              alt="geze-award-2"
            />
            <Image
              src="/images/geze/awards-card-component.png"
              width={100}
              height={100}
              alt="geze-award-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
