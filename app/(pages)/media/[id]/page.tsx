import AccordionCustions from "@/app/components/pages/AccordionCustions";
import FormNews from "@/app/components/pages/FormNews";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import api from "@/app/lib/axios";

export default async function Page({ params }: { params: any }) {
  const locale = await getLocale(); // fa | en
  const lang = locale === "fa" ? "fa" : "en";

  const { id } = await params;

  // Fetch single blog post
  const { data } = await api.get(`/v1/blog/${lang}/posts/${id}/`);

  // Fetch related posts
  const { data: related } = await api.get(`/v1/blog/${lang}/related/${id}/`);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 p-4 max-w-7xl mx-auto mt-20">
      {/* MAIN CONTENT */}
      <div className="space-y-4 col-span-3">
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
          className="prose max-w-none leading-10"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />

        <AccordionCustions />
        <FormNews />
      </div>

      {/* SIDEBAR */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col w-full">
          <Link
            href="/media"
            className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold"
          >
            اخبار و مقالات
          </Link>
          <Link
            href="/media"
            className="border-b-2 p-4 hover:text-[#005E8B] border-b-zinc-200 hover:border-b-[#005E8B] font-semibold"
          >
            گالری
          </Link>
        </div>

        {/* Related posts */}
        <div className="flex flex-col gap-y-4 mt-4">
          <p className="font-semibold text-sm">مقاله های مرتبط</p>

          {related.length === 0 && (
            <p className="text-xs text-gray-500">مقاله مرتبطی یافت نشد.</p>
          )}

          {related.map((post: any) => (
            <Link
              key={post.id}
              href={`/media/${post.id}`}
              className="card flex flex-row bg-[#fbfbfb] justify-center items-center hover:shadow transition"
            >
              <figure>
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="lg:w-[152px] lg:h-[144px] object-cover"
                />
              </figure>

              <div className="card-body p-0 text-[10px] mx-2 w-[232px]">
                <h2 className="card-title text-[8px] font-bold">
                  {post.title}
                </h2>
                <p className="line-clamp-3">{post.summary || ""}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
