import React, { useState } from "react";
import VitselIcon from "../../public/svg/vistel.svg";
import Link from "next/link";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [borderColor, setBorderColor] = useState("border-gray-300");

  const handleChange = (e:any) => {
    setInputValue(e.target.value);

    setErrorMessage("");

    setBorderColor("border-gray-300");
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!inputValue) {
      setErrorMessage("لطفا این قسمت را خالی نگذارید");
      setBorderColor("border-red-500");
    } else {
      const iranianNumberRegex = /^09\d{9}$/;
      const emailRegex = /[\w-]+@[\w-]+\.[\w-]+/;

      if (iranianNumberRegex.test(inputValue) || emailRegex.test(inputValue)) {
        console.log(inputValue);
      } else {
        if (inputValue.includes("@")) {
          setErrorMessage("ایمیل وارد شده صحیح نمیباشد");
        } else {
          setErrorMessage("شماره یا ایمیل وارد شده صحیح نمیباشد");
        }
        setBorderColor("border-red-500");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center mt-36 items-center">
        <div className="border-2 rounded-md grid grid-col gap-9 lg:w-1/3 w-full p-8">
          <div className="text-2xl font-bold flex justify-center text-red-600">
            ویتسل
          </div>
          <div className="font-medium">ورود/ثبت نام</div>
          <div> سلام!</div>
          <div>لطفا شماره موبایل یا ایمیل خود را وارد کنید</div>

          <form onSubmit={handleSubmit}>
            <input
              className={`w-full bg-slate-100 h-10 pl-10 pr-12 rounded-lg border-2 focus:outline-none focus:border-blue-500 ${borderColor}`}
              type="search"
              name="search"
              placeholder=""
              onChange={handleChange}
            />
            <div className="text-red-500">{errorMessage}</div>
            <button
              type="submit"
              className="border mt-7 w-full p-4    hover:bg-blue-100 active:bg-blue-700 text-2xl font-medium rounded-lg"
            >
              ورود
            </button>
          </form>

          <div>
            ورود شما به معنای پذیرش{" "}
            <Link href="/login/terms" className=" text-green-600 font-medium">
              شرایط ویتسل{" "}
            </Link>{" "}
            و{" "}
            <Link href="/login/privacy" className=" text-green-600 font-medium">
              قوانین حریم خصوصی{" "}
            </Link>{" "}
            است
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
