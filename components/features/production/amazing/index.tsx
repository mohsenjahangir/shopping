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
  return (
    <div className=" bg-red-500 py-5 rounded-xl mx-5 px-1 mt-8">
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
                <h1 className="  text-white font-black text-xl">مشاهده همه</h1>
                <h1 className=" text-white  font-semifont-semibold">{arrow}</h1>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl w-full h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/3eacf8d1f97c76a5946c051b259e8f35bdf8347f_1681048714.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/3280074.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/ac04e36f0c4d219eb9d7b2bf9f602812c81f792b_1683118803.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/6b3e12c32ad066b1a2cb32ad11af89bdad187661_1672570456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/110721018.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/0412e9d047b1d6bd1a2b56adceb9da0ec67ff72a_1663593022.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/6a433fd96a957cc4e5f5d45acaa19ee4be283d38_1681197360.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/110115399.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/c36739c159af0660fcd88b04fab6eda7da4e2ffb_1687189226.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/8d09022322b98dbb1aa1d647585549fe8ded8cf1_1667140241.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src="https://dkstatics-public.digikala.com/digikala-products/12b518c1f6671a570f32af750b98dd02c889b93e_1686819553.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-r-xl h-56 ">
            <div className="flex justify-center pt-2 ">
              <img
                className=" w-36  "
                src=" https://dkstatics-public.digikala.com/digikala-products/302a3d8c01837b58eeda902ba8a31af401fcc167_1685779785.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              />
            </div>
            <div className=" flex  justify-between px-1">
              <div className="bg-red-500 rounded-full  text-white   p-1 ">
                57%
              </div>
              <div className="">538,000تومان</div>
            </div>
            <div className="    line-through text-slate-400 flex justify-end ml-1">
              1,343,000
            </div>
          </div>
        </SwiperSlide>
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
  );
};
