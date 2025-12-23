import AccordionCustions from "@/app/components/pages/AccordionCustions";
import FormNews from "@/app/components/pages/FormNews";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import api from "@/app/lib/axios";
import Image from "next/image";
import "@/app/richtext.css";

export default async function Page({ params }: { params: any }) {
  const locale = await getLocale(); // fa | en
  const lang = locale === "fa" ? "fa" : "en";

  const { id } = await params;

  // Fetch single blog post
  const { data } = await api.get(`/v1/blog/${lang}/posts/${id}/`);

  // Fetch related posts
  const { data: related } = await api.get(`/v1/blog/${lang}/related/${id}/`);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 p-4 max-w-7xl mx-auto mt-20">
      {/* MAIN CONTENT */}
      <div className="space-y-4 col-span-2">
        <img
          src={data.cover_image}
          width={500}
          height={500}
          alt={data.title}
          className="rounded-md w-full h-[423px]"
        />

        <div className="flex justify-between items-center">
          <p className="text-[20px] text-[#003f5d] font-bold">{data.title}</p>
          <p className="text-sm">{data.reading_time} دقیقه مطالعه</p>
        </div>

        <div
  className="
    prose
    prose-slate
    max-w-none
    leading-10

    prose-h2:text-[#005E8B]
    prose-h2:text-[28px]
    prose-h2:font-bold

    prose-h3:text-[#003F5D]
    prose-h3:text-[22px]
    prose-h3:font-semibold
  "
  dangerouslySetInnerHTML={{ __html: data.body }}
/>


        {/* <AccordionCustions /> */}
        <FormNews />
      </div>

      {/* SIDEBAR */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col w-full">
          <Link
            href="/media"
            className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold"
          >
            {lang === "fa" ? "اخبار و مقالات" : "News & Articles"}{" "}
          </Link>
          <Link
            href="/media"
            className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold"
          >
            {lang === "fa" ? "گالری" : "Gallery"}{" "}
          </Link>
        </div>

        {/* Related posts */}
        <div className="flex flex-col gap-y-4 mt-4">
          <p className="font-medium text-[19px] mt-10">
            {lang === "fa" ? "مقاله‌های مرتبط" : "Related Articles"}
          </p>

          {related.length === 0 && (
            <p className="text-xs text-gray-500">
              {lang === "fa"
                ? "مقاله مرتبطی یافت نشد."
                : "No related articles found."}
            </p>
          )}

          {related.map((post: any) => (
            <Link
              key={post.id}
              href={`/media/${post.id}`}
              className="card lg:w-full lg:h-[130px] flex flex-row bg-[#fbfbfb] justify-start items-start hover:shadow transition gap-2"
            >
              {/* Image container with aspect ratio */}
              <figure className="w-[170px] h-full flex-shrink-0 relative aspect-video">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="rounded-r-md"
                />
              </figure>

              {/* Text content */}
              <div className="card-body p-3  w-[232px]">
                <h2 className="card-title text-[18px] text-[#003F5D] font-demibold line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[13px] line-clamp-3">{post.summary || ""}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
