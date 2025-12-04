import { Metadata } from "next";
import Index from ".";

export const metadata: Metadata = {
  title: "پرشیادُر | گالری و اخبار",
  description:
    "در زمینه تولید و توسعه سیستم‌های اتوماسیون صنعتی فعالیت می‌کند، با هدف ارتقای کارایی، دقت و سرعت در فرآیندهای تولید و صنعتی",
};

function page() {
  return <Index />;
}

export default page;
