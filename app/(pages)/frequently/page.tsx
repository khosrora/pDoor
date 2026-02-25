import { Metadata } from "next";
// import AccordionCustions from "../../components/pages/AccordionCustions";
import Breadcrumbs from "./Breadcrumbs";
import Frequently from "@/app/components/pages/Frequently";


export const metadata: Metadata = {
  title: "پرشیادُر | سوالات متداول",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};
function page() {
  return (
    <div className="mt-32">
      {" "}
      <div className="max-w-7xl m-auto">
        {" "}
        <Breadcrumbs />{" "}
      </div>{" "}
      <Frequently  />{" "}
    </div>
  );
}
export default page;
