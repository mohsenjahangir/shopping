import React from "react";
import {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import ArrowLeft from "../../../../public/svg/arrowleft.svg";
import { BsArrowLeftCircle } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export const Suggestion = () => {
  const images2 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png?x-oss-process=image/format,webp",
      alt: "",
      title: "موبایل",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "هدفون",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png?x-oss-process=image/format,webp",
      alt: "",
      title: "آشپزخانه",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "کیف کفش",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png?x-oss-process=image/format,webp",
      alt: "",
      title: "کالاهای سوپرمارکتی",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "لوازم تحریر",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png?x-oss-process=image/format,webp",
      alt: "",
      title: "کودک ونوزاد",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "زیبایی و سلامت",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png?x-oss-process=image/format,webp",
      alt: "",
      title: "ورزش و سفر",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "ابزار آلات",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png?x-oss-process=image/format,webp",
      alt: "",
      title: "خودرو",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "محصولات بومی",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png?x-oss-process=image/format,webp",
      alt: "",
      title: "خودرو",
      src2: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png?x-oss-process=image/format,webp",
      alt2: "",
      title2: "محصولات بومی",
    },
  ];
  // Define the refs for the navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="">
      <div className=" mt-8   lg:mx-8">
        <div>
          <h1 className=" flex justify-center  text-2xl font-semibold">
            پیشنهاد دیجی کالا
          </h1>
        </div>
        <div className=" flex justify-center mt-8">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
            className=" border border-slate-500 rounded-xl "
            breakpoints={{
              1280: { slidesPerView: 7 },
              768: {
                slidesPerView: 5,
              },
              450: {
                slidesPerView: 3,
              },
              100: {
                slidesPerView: 2,
              },
            }}
            
          >
            {images2.map((item) => (
              <SwiperSlide>
                <div className=" grid grid-col  ">
                  <div className="border-x border-b   pb-4 border-slate-300">
                    <img src={item.src} />
                    <h1 className=" text-center font-medium">{item.title}</h1>
                  </div>
                  <div className="border-x pb-4 border-b border-slate-300">
                    <img src={item.src2} />
                    <h1 className=" text-center font-medium">{item.title2}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className=" grid  grid-cols-4   gap-4 ">
          <div className="col-start-1 z-10   col-end-3 ...">
            <button
              className=" absolute border-slate-400   border-2 bg-white hover:bg-slate-200 p-3    active:bg-slate-400 rounded-full"
              ref={prevRef}
            >
              <SlArrowRight />
            </button>
          </div>
          <div className="col-end-7 ml-12  z-10  col-span-2 ...">
            <button
              className=" absolute rounded-full  border-slate-400 border-2 bg-white hover:bg-slate-200 p-3 col-start-2  active:bg-slate-400  rotate-180 "
              ref={nextRef}
            >
              <SlArrowRight />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
