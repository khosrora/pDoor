import Image from "next/image";
import HospitalSliders from "../../../components/pages/HospitalSliders";
import AccordionCustions from "../../../components/pages/AccordionCustions";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";
import HospitalInstructionSwipper from "@/app/components/pages/HospitalInstructionSwipper";
import OfficeSliders from "@/app/components/pages/OfficeSliders";
import FactorySlider from "@/app/components/pages/FactorySlider";
import BankSlider from "@/app/components/pages/BankSlider";
import AirportSlider from "@/app/components/pages/AirportSlider";
import ShopSlider from "@/app/components/pages/ShopSlider";

export const metadata: Metadata = {
  title: "پرشیادُر | فروشگاه ها",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

export default async function ShoppingPage() {
  const t = await getTranslations("ShoppingPage");

  return (
    <div className="my-20">
      <div className="p-4">
        <Breadcrumbs />
      </div>
      {/* Hero */}
      <div className="bg-[#003F5D] text-white flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center lg:justify-between ">
        <div className="lg:flex lg:flex-col lg:justify-center p-4 lg:py-10 lg:px-40 w-full ">
          <p className="text-[#FAB21F] text-[19px] font-regular lg:text-[25px] lg:font-bold">
            {t("hero.title")}
          </p>
          <p className="text-[13px] lg:text-[18px] mt-4 lg:w-[541px]">
            {t("hero.text")}
          </p>
          <div className="flex justify-start items-center gap-x-4 mt-5 lg:mt-16">
            <button className="btn">{t("hero.consultButton")}</button>
            <button className="btn bg-[#FAB21F] border-0">
              {t("hero.serviceButton")}
            </button>
          </div>
        </div>

        {/* banner image */}
        <div className="lg:w-full">
          <img src="\images\image 781.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:flex justify-center my-20">
        <img
          src="\GIFS\Record_2025_12_03_18_26_17_489-ezgif.com-video-to-gif-converter.gif"
          alt=""
        />

        {/* <HospitalInstructionSwipper/> */}
      </div>{" "}
      <div className="max-w-5xl m-auto">
        {/* Top illustration (mobile) */}
        <div className="p-4 lg:hidden">
          <Image
            src="/images/hospital/Frame 1261158051.png"
            width={1000}
            height={1000}
            alt="hospital"
          />
        </div>

        {/* Benefits section */}
        <div className="p-4">
          <p className="text-center text-[16px] font-regular lg:text-[25px] lg:font-semibold">
            {t("howSection.title")}
          </p>

          {/* Card 1: Hygiene */}
          <div className="bg-zinc-100 lg:h-[250px] p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <div className="lg:w-[260px] flex justify-center items-center">
              <div className="flex justify-center items-center rotate-45 bg-[#83E26E]  lg:w-[124px] lg:h-[124px] rounded-2xl ">
                <div className="-rotate-45">
                  <Image
                    src="/SVGs/time.png"
                    width={80}
                    height={80}
                    className=""
                    alt="hospital-hygiene"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 text-xs lg:w-full lg:h-[196px] p-8">
              <p className="text-[#003F5D] font-bold text-[20px]">
                {t("benefits.hygiene.title")}
              </p>
              <p className="mt-4 text-[16px]">{t("benefits.hygiene.text")}</p>
            </div>
          </div>

          {/* Card 2: Easy access */}
          <div className="bg-zinc-100 lg:h-[250px] p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <div className="lg:w-[260px] flex justify-center items-center">
              <div className="flex justify-center items-center rotate-45 bg-[#FCCD6E]  lg:w-[124px] lg:h-[124px] rounded-2xl ">
                <div className="-rotate-45">
                  <Image
                    src="/SVGs/reverse-rotation.svg"
                    width={80}
                    height={80}
                    className=""
                    alt="hospital-hygiene"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 text-xs lg:w-full lg:h-[196px] p-8">
              <p className="text-[#003F5D] font-bold text-[20px]">
                {t("benefits.easyAccess.title")}
              </p>
              <p className="mt-4 text-[16px]">
                {t("benefits.easyAccess.text")}
              </p>
            </div>
          </div>

          {/* Card 3: Access control */}
          <div className="bg-zinc-100 lg:h-[250px] p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <div className="lg:w-[260px] flex justify-center items-center">
              <div className="flex justify-center items-center rotate-45 bg-[#F54B46]  lg:w-[124px] lg:h-[124px] rounded-2xl ">
                <div className="-rotate-45">
                  <Image
                    src="/SVGs/fire.svg"
                    width={80}
                    height={80}
                    className=""
                    alt="hospital-hygiene"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 text-xs lg:w-full lg:h-[196px] p-8">
              <p className="text-[#003F5D] font-bold text-[20px]">
                {t("benefits.accessControl.title")}
              </p>
              <p className="mt-4 text-[16px]">
                {t("benefits.accessControl.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Project slider + FAQ accordion (already localized components) */}
      <ShopSlider />
      <AccordionCustions />
    </div>
  );
}
