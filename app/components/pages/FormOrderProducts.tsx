export default function SimpleForm() {
  return (
    <div className="max-w-4xl mx-auto  my-12">
      <div>
        <p className="text-[20px] font-semibold text-center">فرم سفارش کالا</p>
      </div>
      <form className=" mx-auto p-6 bg-white space-y-4">
        {/* Row: Two Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block mb-1 text-sm font-medium">نام کالا</label>
            
            <select name="" id="" className="w-full bg-zinc-100 rounded-md px-3 py-2" aria-placeholder="یک گزینه انتخاب نمایید" >
                <option value="1">1</option>
                <option value="2">1</option>
                <option value="3">1</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">نام</label>
            <input
              type="text"
              className="w-full bg-zinc-100 rounded-md px-3 py-2"
              placeholder="احسان عزتی"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">تعداد</label>
            
            <select name="" id="" className="w-full bg-zinc-100 rounded-md px-3 py-2" aria-placeholder="یک گزینه انتخاب نمایید" >
                <option value="1">1</option>
                <option value="2">1</option>
                <option value="3">1</option>
            </select>
          </div>
        <div>
          <label className="block mb-1 text-sm font-medium">شماره تماس</label>
          <input
            type="text"
            className="w-full bg-zinc-100 rounded-md px-3 py-2"
            placeholder="09362363223"
          />
        </div>
        </div>



        {/* Fourth Input */}

        {/* Submit Button */}
        <div className="flex w-full justify-end mt-10">
            <button
          type="submit"
          className="w-[184px] h-10 bg-[#003F5D] text-white py-2 rounded-md"
        >
          ارسال
        </button>
        </div>
      </form>
    </div>
  );
}
