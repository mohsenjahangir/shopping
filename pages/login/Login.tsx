import VitselIcon from "../../public/svg/vistel.svg";

const Login = () => {
  return (
    <>
      <div className="  flex justify-center  mt-9 items-center">
        <div className="border rounded-md   grid grid-col gap-9 lg:w-1/3 w-full p-8">
          <div className=" text-2xl font-bold  flex justify-center text-red-600">
            ویتسل
          </div>
          <div className=" font-medium">ورود/ثبت نام</div>
          <div> سلام!</div>
          <div>لطفا شماره موبایل یا ایمیل خود را وارد کنید</div>
          <input
            className="w-full bg-slate-100 h-10 pl-10 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 "
            type="search"
            name="search"
            placeholder=""
          />
          <button  className=" border p-4 bg-red-600 text-white text-2xl font-medium rounded-lg ">ورود</button>
          <div>
          ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌ خصوصی است
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
