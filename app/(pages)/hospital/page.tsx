import Image from "next/image";
import HospitalSliders from "../../components/pages/HospitalSliders";
import AccordionCustions from "../../components/pages/AccordionCustions";
import { getTranslations } from "next-intl/server";

export default async function HospitalPage() {
  const t = await getTranslations("HospitalPage");

  return (
    <div className="mb-12">
      {/* Hero */}
      <div className="bg-[#003F5D] p-4 text-white space-y-8 lg:flex lg:flex-col lg:items-center">
        <p className="text-[#FAB21F]">{t("hero.title")}</p>
        <p>{t("hero.text")}</p>
        <div className="flex justify-start items-center gap-x-4">
          <button className="btn">{t("hero.consultButton")}</button>
          <button className="btn bg-[#FAB21F] border-0">
            {t("hero.serviceButton")}
          </button>
        </div>
      </div>

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
          <p className="text-center">{t("howSection.title")}</p>

          {/* Card 1: Hygiene */}
          <div className="bg-zinc-200 p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <Image
              src="/images/hospital/Frame 1261158009.png"
              width={100}
              height={100}
              className="w-24 h-24 lg:w-32 lg:h-32"
              alt="hospital-hygiene"
            />
            <div className="bg-white rounded-md p-4 text-xs lg:w-full">
              <p className="text-[#003F5D]">{t("benefits.hygiene.title")}</p>
              <p className="mt-4">{t("benefits.hygiene.text")}</p>
            </div>
          </div>

          {/* Card 2: Easy access */}
          <div className="bg-zinc-200 p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <Image
              src="/images/hospital/Frame1.png"
              width={100}
              height={100}
              className="w-24 h-24 lg:w-32 lg:h-32"
              alt="hospital-easy-access"
            />
            <div className="bg-white rounded-md p-4 text-xs lg:w-full">
              <p className="text-[#003F5D]">{t("benefits.easyAccess.title")}</p>
              <p className="mt-4">{t("benefits.easyAccess.text")}</p>
            </div>
          </div>

          {/* Card 3: Access control */}
          <div className="bg-zinc-200 p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <Image
              src="/images/hospital/frame4.png"
              width={100}
              height={100}
              className="w-24 h-24 lg:w-32 lg:h-32"
              alt="hospital-access-control"
            />
            <div className="bg-white rounded-md p-4 text-xs lg:w-full">
              <p className="text-[#003F5D]">
                {t("benefits.accessControl.title")}
              </p>
              <p className="mt-4">{t("benefits.accessControl.text")}</p>
            </div>
          </div>

          {/* Card 4: Fire safety */}
          <div className="bg-zinc-200 p-4 rounded-md flex justify-between items-center gap-x-2 mt-8">
            <Image
              src="/images/hospital/frame2.png"
              width={100}
              height={100}
              className="w-24 h-24 lg:w-32 lg:h-32"
              alt="hospital-fire-safety"
            />
            <div className="bg-white rounded-md p-4 text-xs lg:w-full">
              <p className="text-[#003F5D]">{t("benefits.fireSafety.title")}</p>
              <p className="mt-4">{t("benefits.fireSafety.text")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project slider + FAQ accordion (already localized components) */}
      <HospitalSliders />
      <AccordionCustions />
    </div>
  );
}
