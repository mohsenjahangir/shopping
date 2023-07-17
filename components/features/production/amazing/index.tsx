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

export const AmazingSugestion = () => {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  const arrow = ">";
  const slides = [
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/3eacf8d1f97c76a5946c051b259e8f35bdf8347f_1681048714.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/3280074.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/ac04e36f0c4d219eb9d7b2bf9f602812c81f792b_1683118803.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/6b3e12c32ad066b1a2cb32ad11af89bdad187661_1672570456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/110721018.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/c36739c159af0660fcd88b04fab6eda7da4e2ffb_1687189226.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/110115399.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/c36739c159af0660fcd88b04fab6eda7da4e2ffb_1687189226.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      discount: "57%",
      price: "538,000تومان",
      oldPrice: "1,343,000",
    },
  ];
  const images = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/d31a80d2ea931f08317b726b74cf417ffe0c2a6f_1688478968.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1d2d561df25c1746820de7cb16b7627ebd57cd63_1688550723.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/9ee9d49fb91c875ca390d29d45decd25d7d1097b_1679745917.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/325d1cc732da975f4840a95fe61c334e696022ab_1688796097.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
  ];
  const images2 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png?x-oss-process=image/format,webp",
      alt: "",
      title: "موبایل",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp",
      alt: "",
      title: "هدفون",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png?x-oss-process=image/format,webp",
      alt: "",
      title: "آشپزخانه",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png?x-oss-process=image/format,webp",
      alt: "",
      title: "کیف کفش",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png?x-oss-process=image/format,webp",
      alt: "",
      title: "کالاهای سوپرمارکتی",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png?x-oss-process=image/format,webp",
      alt: "",
      title: "لوازم تحریر",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png?x-oss-process=image/format,webp",
      alt: "",
      title: "کودک ونوزاد",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png?x-oss-process=image/format,webp",
      alt: "",
      title: "زیبایی و سلامت",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png?x-oss-process=image/format,webp",
      alt: "",
      title: "ورزش و سفر",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png?x-oss-process=image/format,webp",
      alt: "",
      title: "ابزار آلات",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png?x-oss-process=image/format,webp",
      alt: "",
      title: "خودرو",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png?x-oss-process=image/format,webp",
      alt: "",
      title: "محصولات بومی",
    },
  ];
  const images3 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/74f3710beb5b3a174107051932f43ff6243492b5_1688543687.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/97ca148976d84a8d420d5f9c445127bf957a1605_1688545540.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
  ];
  return (
    <div className=" mx-4">

      <div className=" bg-red-500 py-5 rounded-xl  px-1 mt-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={4}
          navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onInit={() => setInit(true)}
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
          <SwiperSlide className=" ">
            <div className="  flex justify-center">
              <div>
                <img
                  className=" w-24"
                  src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                />
                <img
                  className=" w-24"
                  src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
                />
                <Link href="" className=" flex gap-2 items-center">
                  <h1 className="  text-white font-black text-xl">
                    مشاهده همه
                  </h1>
                  <h1 className=" text-white  font-semifont-semibold">
                    {arrow}
                  </h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {slides.map((item) => (
            <SwiperSlide>
              <div className=" bg-white  w-full h-56 ">
                <div className="flex justify-center pt-2 ">
                  <img className=" w-36  " src={item.img} />
                </div>
                <div className=" flex  justify-between px-1">
                  <div className="bg-red-500 rounded-full  text-white   p-1 ">
                    {item.discount}
                  </div>
                  <div className="">{item.price}</div>
                </div>
                <div className="    line-through text-slate-400 flex justify-end ml-3">
                  {item.oldPrice}
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div className=" bg-white rounded-l-xl h-56 flex justify-center items-center">
              <div className=" text-center">
                <button className="text-5xl text-cyan-400 ">
                  <BsArrowLeftCircle />
                </button>
                <h1>مشاهده همه</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className=" grid  grid-cols-4  gap-4 ">
          <div className="col-start-1 z-10 -mt-32 col-end-3 ...">
            <button
              className=" absolute border-slate-400 border-2 bg-white hover:bg-slate-200 p-3    active:bg-slate-400 rounded-full"
              ref={prevRef}
            >
              <SlArrowRight />
            </button>
          </div>
          <div className="col-end-7 ml-12 -mt-32 z-10  col-span-2 ...">
            <button
              className=" absolute rounded-full border-slate-400 border-2 bg-white hover:bg-slate-200 p-3 col-start-2  active:bg-slate-400  rotate-180 "
              ref={nextRef}
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" mx-4   grid lg:grid-cols-4 grid-cols-2 gap-8  px-1 mt-4">
          {images.map((item) => (
            <div>
              <img className=" rounded-2xl" src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-8">
        <div>
          <h1 className=" flex justify-center  text-2xl font-semibold">
            دسته بندی های دیجی کالا
          </h1>
        </div>
        <div className=" flex justify-center mx-4 mt-8">
          <div className=" grid  lg:grid-cols-6  grid-cols-3  lg:gap-6 gap-8">
            {images2.map((item) => (
              <div className=" mr-2 ">
                <div className=" flex justify-center">
                  <img className=" w-3/4  " src={item.src} alt={item.alt} />
                </div>
                <h1 className=" font-medium text-center">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center mx-4 gap-3 mt-12">
          {images3.map((item) => (
            <div>
              <img className=" rounded-2xl" src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
