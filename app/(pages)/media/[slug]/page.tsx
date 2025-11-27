import AccordionCustions from "@/app/components/pages/AccordionCustions";
import FormNews from "@/app/components/pages/FormNews";
import Link from "next/link";

function page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 p-4">
      <div className="space-y-4 col-span-3">
        <img
          src={
            "https://persiadoorco.com/wp-content/uploads/2025/03/%D9%88%DB%8C%DB%8C%D9%86%DA%AF1-1.jpg"
          }
          width={500}
          height={500}
          alt="slug"
          className="rounded-md w-full"
        />
        <div className="flex justify-between items-center">
          <p>ضوابط خروج اضطراری</p>
          <p>23 شهریور</p>
        </div>
        <p>
          ضوابط درب ‌ضد حریق را به طور مفید و خلاصه در این مقاله توضیح می‌دهیم.
          درب آتشنشانی ساختمان نقش حیاتی در  افزایش ایمنی ساختمان‌ها ایفا
          می‌کنند. این درب‌ها با جلوگیری از گسترش آتش و دود، فرصت لازم برای
          تخلیه ایمن ساکنان را فراهم می‌کنند. رعایت ضوابط و استانداردهای مرتبط
          با درب ضد حریق ، تضمین‌کننده عملکرد صحیح آن‌ها در شرایط اضطراری است.
          در این مقاله، به بررسی جامع ضوابط درب‌های ضد حریق و اهمیت اصالت کالای
          آن‌ها می‌پردازیم.
        </p>
        <AccordionCustions />
        <FormNews />
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col w-full">
          <Link href={""} className="border-b p-4">
            اخبار و مقالات{" "}
          </Link>
          <Link href={""} className="border-b p-4">
            گالری{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p>مقاله های مرتبط</p>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card card-side bg-base-100 border border-zinc-200 h-24 gap-x-2 justify-center items-center pl-2">
              <figure>
                <img
                  src="https://persiadoorco.com/wp-content/uploads/2025/10/%D9%BE%D9%86%D8%AC%D8%B1%D9%87-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF1-1-600x316.jpg"
                  alt="Movie"
                  className="h-60 object-contain"
                />
              </figure>
              <div className="card-body p-0 text-[10px]">
                <h2 className="card-title text-[8px]">
                  شرکت در نمایشگاه بین‌المللی ساختمان
                </h2>
                <p>
                  گزارش تصویری و خبری از حضور شرکت در نمایشگاه، معرفی محصولات
                  جدید و دستاوردهای شرکت
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
