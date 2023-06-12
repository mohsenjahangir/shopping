import React, { useState } from "react";
import IconVitsel from "../../../public/svg/vistel.svg";
import Icon1 from "../../../public/svg/icon1.svg";
import Icon2 from "../../../public/svg/icon2.svg";
import Icon3 from "../../../public/svg/icon3.svg";
import Icon4 from "../../../public/svg/icon4.svg";
import Icon5 from "../../../public/svg/icon5.svg";
import InstIcon from "../../../public/svg/insta.svg";
import WhatsIcon from "../../../public/svg/whats.svg";
import TelIcon from "../../../public/svg/tel.svg";
import Input from "./Input";
import MycatIcon from "../../../public/svg/mycat.svg";
import AndrIcon from "../../../public/svg/andr.svg";
import BazarIcon from "../../../public/svg/bazar.svg";
import EtemadIcon1 from "../../../public/svg/etemad1.svg";
import EtemadIcon2 from "../../../public/svg/etemad2.svg";
import EtemadIcon3 from "../../../public/svg/etemad3.svg";
import EtemadIcon4 from "../../../public/svg/etemad4.svg";
import LongText from "./LongText";

export const Footer = () => {
  const loremIpsum =
    "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند. ";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("اینجا را خالی نگذارید");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("پست الکترونیک وارد شده صحیح نیست");
    } else {
      // Handle form submission
    }
  };

  const items = [
    {
      title: "امکان تحویل اکسپرس",
      icon: <Icon1 />,
    },
    {
      title: "امکان پرداخت در محل",
      icon: <Icon2 />,
    },
    {
      title: "7روز هفته,24 ساعته",
      icon: <Icon3 />,
    },
    {
      title: "هفت روز ضمانت بازگشت کالا",
      icon: <Icon4 />,
    },
    {
      title: "ضمانت اصل بودن کالا",
      icon: <Icon5 />,
    },
  ];

  return (
    <div className="2xl:px-10   pt-5 px-4 mt-4 mb-36 border-t-2 border-slate-200">
      <div className="grid grid-cols-1">
        <div className=" mb-4">
          <IconVitsel />
        </div>
        <div className=" lg:flex">
          <div className=" lg:border-l-2 truncate border-gray-500 pl-3">
            تلفن پشتیبانی 9364358506-098
          </div>
          <div className=" lg:pr-4 truncate">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </div>
        </div>
      </div>
      <div className=" flex justify-between lg:mt-12 mx-16 invisible lg:visible">
        {items.map((item) => (
          <div>
            <div className="">
              <div className=" flex justify-center lg:mb-3">
                <svg className=" w-10" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <div>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" grid lg:grid-cols-4 grid-col gap-5   lg:mt-10  -mt-16 ">
        <div className=" flex flex-col gap-3">
          <h1 className=" font-black">با ویتسل</h1>
          <h1 className=" text-slate-500">اتاق خبر ویتسل</h1>
          <h1 className=" text-slate-500">فروش در ویتسل</h1>
          <h1 className=" text-slate-500">فرصت‌های شغلی</h1>
          <h1 className=" text-slate-500">گزارش تخلف در ویتسل</h1>
          <h1 className=" text-slate-500">تماس با ویتسل</h1>
          <h1 className=" text-slate-500">درباره ویتسل</h1>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" font-black">خدمات مشتریان</h1>
          <h1 className=" text-slate-500">پاسخ به پرسش های متداول</h1>
          <h1 className=" text-slate-500">رویه های بازگزداندن کالا</h1>
          <h1 className=" text-slate-500">شرایط استفاده</h1>
          <h1 className=" text-slate-500">حریم خصوصی</h1>
          <h1 className=" text-slate-500">گزارش باگ</h1>
        </div>
        <div className=" flex flex-col gap-3 col-span-2 invisible md:visible -mt-52 md:-mt-0 lg:col-span-1">
          <h1 className=" font-black">راهنمای خرید از ویتسل</h1>
          <h1 className=" text-slate-500">نحو ه ی ثبت سفارش</h1>
          <h1 className=" text-slate-500">رویه ی ارسال سفارش</h1>
          <h1 className=" text-slate-500">شیوه های پرداخت</h1>
        </div>
        <div className=" flex flex-col gap-3 col-span-2 lg:col-span-1 ">
          <div className=" grid lg:grid-cols-1  grid-cols-2  gap-5">
            <div>
              <h1 className=" truncate font-black">همراه با ما باشید!</h1>
            </div>
              <div className="  flex  justify-end lg:justify-start gap-12">
                <svg viewBox="0 0 24 24" className=" w-10">
                  <TelIcon />
                </svg>
                <svg viewBox="0 0 24 24" className=" w-10">
                  <WhatsIcon />
                </svg>
                <svg viewBox="0 0 24 24" className=" w-10">
                  <InstIcon />
                </svg>
              </div>
          </div>
          <p className=" lg:font-serif font-normal md:visible invisible -mt-12 md:-mt-0 ">
            با ثبت ایمیل, از جدیدترین تخفیف ها با خبر شوید{" "}
          </p>
          <div className="">
            <form className=" grid  grid-cols-4 gap-2" onSubmit={handleSubmit}>
              <div className=" col-span-3">
                <Input
                  label=""
                  value={email}
                  onChange={handleEmailChange}
                  error={error}
                />
              </div>

              <button
                className=" bg-slate-300 rounded-xl   h-10 mt-3"
                type="submit"
              >
                ثبت
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" grid  lg:grid-cols-2 grid-cols-1 bg-indigo-800  rounded-xl items-center px-5 text-white py-4 gap-3 mt-5">
        <div className=" flex justify-center lg:justify-start gap-5">
          <div>
            <IconVitsel />
          </div>
          <p className="text-center  text-2xl">دانلود اپلیکیشن ویتسل</p>
        </div>
        <div className=" flex lg:justify-end  justify-center gap-7">
          <div className=" flex justify-center bg-slate-200 p-3 rounded-xl text-black font-black truncate items-center gap-3">
            <p>دریافت از مایکت</p>
            <MycatIcon />
          </div>
          <div className=" flex justify-center bg-slate-200 p-3 rounded-xl text-black font-black gap-3 truncate items-center">
            <p>دریافت از بازار</p>
            <BazarIcon />
          </div>
          <div className=" flex justify-center bg-slate-200 p-3 rounded-xl text-black font-black gap-3 truncate items-center">
            <p>دریافت مستقیم</p>
            <AndrIcon />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-5 mt-5">
        <div className="p-4 lg:col-span-3 col-span-5 ">
          <LongText text={loremIpsum} />
        </div>
        <div className="  flex  gap-5 lg:col-span-2 col-span-5 justify-center lg:justify-end ">
          <div className=" w-28  p-1 flex justify-center  border-2 rounded-xl "  >
              <img src=" https://www.digikala.com/statics/img/png/rezi.png"/>
          </div>
          <div className="w-28  flex p-1 justify-center  border-2 rounded-xl "  >
            <img className="  w-16 " src="https://www.digikala.com/statics/img/png/kasbokar.png"/>
          </div>
          <div className="w-28  flex p-1 justify-center  border-2 rounded-xl "  >
            <img className="  " src="https://pars.host/wp-content/uploads/2022/11/logo-01-1.svg"/>
          </div>
        </div>
      </div>
      <div className=" border-t-2 border-slate-300 mt-14 text-center pt-4 font-thin">
        <p className="text-sm lg:text-lg">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
      <div className=" grid lg:grid-cols-9 grid-cols-3 mt-5">
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digipay.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digistyle.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digiplus.svg"
              alt=""
            />
          </div>
        </div>{" "}
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digiclub.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/jet.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/magnet.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digiMehr.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/fidibo.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digikala-service.svg"
              alt=""
            />
          </div>
        </div>{" "}
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digikala-business.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/smartech.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digify.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/ganjeh.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/digiexpress.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/komodaa.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/pindo.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-slate-200 border-spacing-2 border-2 border-slate-300 p-7">
          <div className=" flex justify-center">
            <img
              className=""
              src="https://www.digikala.com/statics/img/svg/footer/diginext.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
