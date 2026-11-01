"use client";

import { useForm } from "react-hook-form";
import api from "@/app/lib/axios";
import { useState } from "react";
import { toast } from "sonner";

interface SimpleFormProps {
  idProduct: number;
}

interface FormValues {
  customer_name: string;
  phone_number: string;
  quantity: number;
}

export default function SimpleForm({ idProduct }: SimpleFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    const payload = {
      product: idProduct,
      customer_name: data.customer_name,
      phone_number: data.phone_number,
      quantity: Number(data.quantity),
    };

    try {
      await api.post("/v1/contact/product-request/", payload);
      toast.success("درخواست با موفقیت ارسال شد");
      reset();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "خطا در ارسال درخواست");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[400px] lg:w-4xl mx-auto my-12">
      <p className="text-[20px] font-semibold text-center mb-6">
        فرم سفارش کالا
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto py-6 bg-white space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
          {/* نام کالا */}
          <div>
            <label className="block mb-1 text-sm font-medium">نام کالا</label>
            <input
              type="text"
              disabled
              value={`کد محصول: ${idProduct}`}
              className="w-full bg-zinc-100 rounded-md px-3 py-2 text-gray-500"
            />
          </div>

          {/* نام مشتری */}
          <div>
            <label className="block mb-1 text-sm font-medium">نام</label>
            <input
              {...register("customer_name", { required: true })}
              type="text"
              className="w-full bg-zinc-100 rounded-md px-3 py-2"
              placeholder="محمد رضایی"
            />
            {errors.customer_name && (
              <p className="text-red-500 text-xs mt-1">نام الزامی است</p>
            )}
          </div>

          {/* تعداد */}
          <div>
            <label className="block mb-1 text-sm font-medium">تعداد</label>
            <select
              {...register("quantity", { required: true })}
              className="w-full bg-zinc-100 rounded-md px-3 py-2"
            >
              <option value="">انتخاب کنید</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">تعداد الزامی است</p>
            )}
          </div>

          {/* شماره تماس */}
          <div>
            <label className="block mb-1 text-sm font-medium">شماره تماس</label>
            <input
              {...register("phone_number", { required: true })}
              type="text"
              className="w-full bg-zinc-100 rounded-md px-3 py-2"
              placeholder="09123456789"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-xs mt-1">شماره تماس الزامی است</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="flex w-full justify-end mt-10">
          <button
            type="submit"
            disabled={loading}
            className="w-[184px] h-10 bg-[#003F5D] text-white rounded-md disabled:opacity-50"
          >
            {loading ? "در حال ارسال..." : "ارسال"}
          </button>
        </div>
      </form>
    </div>
  );
}
