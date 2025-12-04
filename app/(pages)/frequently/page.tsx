import { Metadata } from "next";
import AccordionCustions from "../../components/pages/AccordionCustions";
import Breadcrumbs from "./Breadcrumbs";

export const metadata: Metadata = {
  title: "پرشیادُر | سوالات متداول",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

function page() {
  return (
    <div className="max-w-5xl m-auto">
      <Breadcrumbs />
      <AccordionCustions isquestion />
    </div>
  );
}

export default page;
