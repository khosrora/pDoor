import AccordionCustions from "@/app/components/pages/AccordionCustions";
import FormNews from "@/app/components/pages/FormNews";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import api from "@/app/lib/axios";
// import { getTranslations } from "next-intl/server";

export default async function Page({ params }: { params: any }) {
  const locale = await getLocale(); // fa | en
  const lang = locale === "fa" ? "fa" : "en";

  const { id } = await params;

  // Fetch single blog post
  const { data } = await api.get(`/v1/blog/${lang}/posts/${id}/`);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 p-4 max-w-7xl mx-auto mt-20">
      {/* MAIN CONTENT */}
      <div className="space-y-4 col-span-3">
        {/* Cover */}
        <img
          src={data.cover_image}
          width={500}
          height={500}
          alt={data.title}
          className="rounded-md w-full h-[423px]"
        />

        {/* Title + Date */}
        <div className="flex justify-between items-center">
          <p className="text-[20px] text-[#003f5d] font-bold">{data.title}</p>
          <p className="text-sm">{data.reading_time} دقیقه مطالعه</p>
        </div>

        {/* Body (HTML) */}
        <div
          className="prose max-w-none leading-10"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />

        <AccordionCustions />
        <FormNews />
      </div>

      {/* SIDEBAR */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col w-full">
          <Link href="/media" className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold">
            اخبار و مقالات
          </Link>
          <Link href="/media" className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold">
            گالری
          </Link>
        </div>

        {/* Related posts (static for now) */}
        <div className="flex flex-col gap-y-4 mt-4">
          <p>مقاله های مرتبط</p>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="card flex flex-row bg-[#fbfbfb] justify-center items-center"
            >
              <figure>
                <img
                  src="https://persiadoorco.com/wp-content/uploads/2025/10/%D9%BE%D9%86%D8%AC%D8%B1%D9%87-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF1-1-600x316.jpg"
                  alt="related"
                  className="lg:w-[152px] lg:h-[144px] object-cover"
                />
              </figure>
              <div className="card-body p-0 text-[10px] mx-2 w-[232px]">
                <h2 className="card-title text-[8px]">
                  شرکت در نمایشگاه بین‌المللی ساختمان
                </h2>
                <p>
                  گزارش تصویری و خبری از حضور شرکت در نمایشگاه، معرفی محصولات جدید
                  و دستاوردهای شرکت
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
