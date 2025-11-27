import Image from "next/image";
import ServicesCompanySection from "../../components/pages/ServicesCompanySection";
import TeamSliders from "../../components/pages/TeamSliders";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <div className="space-y-8">
      {/* Mission / Vision / Brand Value */}
      <div className="p-4">
        <div className="space-y-4 grid gap-4 grid-cols-1 lg:grid-cols-4">
          {/* Mission */}
          <div className="flex flex-col justify-center items-center lg:col-span-2">
            <Image
              src="/images/aboutus/Frame 1261158147.png"
              width={300}
              height={300}
              alt="about-mission"
              className="w-32 h-32"
            />
            <div className="text-center space-y-4">
              <p className="text-[#005E8B]">{t("missionTitle")}</p>
              <p>{t("missionText")}</p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col justify-center items-center lg:col-span-2">
            <Image
              src="/images/aboutus/Frame 1261158148.png"
              width={300}
              height={300}
              alt="about-vision"
              className="w-32 h-32"
            />
            <div className="text-center space-y-4">
              <p className="text-[#005E8B]">{t("visionTitle")}</p>
              <p>{t("visionText")}</p>
            </div>
          </div>

          {/* Brand Value */}
          <div className="flex flex-col justify-center items-center lg:col-span-4">
            <Image
              src="/images/aboutus/Frame 1261158148 (1).png"
              width={300}
              height={300}
              alt="about-brand-value"
              className="w-32 h-32"
            />
            <div className="text-center space-y-4">
              <p className="text-[#005E8B]">{t("brandValueTitle")}</p>
              <p>{t("brandValueText")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team slider (already i18n inside) */}
      <TeamSliders />

      {/* Services + Customers */}
      <div className="max-w-5xl m-auto">
        <ServicesCompanySection />

        <div className="flex flex-col items-center my-8 lg:flex-row lg:justify-center lg:items-center">
          <div className="flex flex-col items-center">
            <p className="text-[#FAB21F] font-bold">{t("customersTitle")}</p>
            <p>{t("customersSubtitle")}</p>
          </div>

          {/* Mobile illustration */}
          <Image
            src="/images/customers.png"
            width={1000}
            height={1000}
            alt="customers"
            className="mt-8 lg:hidden"
          />

          {/* Desktop illustration */}
          <Image
            src="/images/customers2.png"
            width={1000}
            height={1000}
            alt="customers"
            className="hidden mt-8 lg:flex w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
