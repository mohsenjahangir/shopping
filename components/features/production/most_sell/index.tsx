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
import StarIcon from "../../../../public/svg/star.svg";
import { AiOutlineFire } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export const Most_sell = () => {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  const arrow = ">";
  const slides = [
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/9f47245fe80e369f6e336fe9fc967ad05dfdfcb2_1669442363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 1,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/5399607.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 2,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/112360452.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 3,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 4,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 5,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/121654059.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 6,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/4bfbd81ddd38bf9360aa77a5abeb24e463ce52ab_1610192619.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 7,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/1fcb0ec9667ecf5fe2d01f8094b731564e5b1123_1652868847.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 8,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/4bc080993af2f26c76e94fe7907ddef881f2b9c6_1609743727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 9,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/5551622.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 10,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/112759101.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 11,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/5550878.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 12,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/4879003.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 13,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/11755d73e41ca36779df0adaef9b6b8575df50eb_1661770459.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 14,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/cb895b6fe4e386b007491c26eb74078fd7f28dbe_1606319687.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 15,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 16,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 17,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 18,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 19,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 20,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 21,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 22,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 23,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 24,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 25,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 26,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 27,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id:28,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 29,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 30,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 31,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 32,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 33,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 34,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 35,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 36,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 37,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 38,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 39,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 40,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 41,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 42,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 43,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 44,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 45,
      title3: "محصول پرفروش",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id: 46,
      title: "محصول پرفروش",
      img2: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id2: 47,
      title2: "محصول پرفروش",
      img3: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1627821895.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      id3: 48,
      title3: "محصول پرفروش",
    },
  ];
  return (
    <div className=" lg:mx-8">
      <div className="  py-5 rounded-xl  border-2 px-1 mt-8">
        <div className=" flex justify-center text-center text-2xl mb-4 gap-3 items-center">
          <AiOutlineFire />
          پرفروش‌ترین کالاها
        </div>
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
          {slides.map((item) => (
            <SwiperSlide>
              <div className="  grid gap-4">
                <div className=" grid grid-cols-12 items-center ">
                  <div className=" col-span-4">
                    <img src={item.img} />
                  </div>
                  <div className="col-span-1 text-cyan-500 text-2xl font-bold">{item.id}</div>
                  <div className=" col-span-7 border-b-2  mr-4  truncate ">{item.title}</div>
                </div>
                <div className=" grid grid-cols-12 items-center">
                  <div className=" col-span-4">
                    <img src={item.img2} />
                  </div>
                  <div className="col-span-1 text-cyan-500 text-2xl font-bold ">{item.id2}</div>
                  <div className=" col-span-7 border-b-2 mr-4  truncate ">{item.title2}</div>
                </div>
                <div className=" grid grid-cols-12 items-center">
                  <div className=" col-span-4">
                    <img src={item.img3} />
                  </div>
                  <div className="col-span-1 text-cyan-500 text-2xl font-bold">{item.id3}</div>
                  <div className=" col-span-7 border-b-2 mr-4  truncate ">{item.title3}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" grid  grid-cols-4  gap-4 ">
          <div className="col-start-1 z-10 -mt-40 col-end-3 ...">
            <button
              className=" absolute border-slate-400 border-2 bg-white hover:bg-slate-200 p-3    active:bg-slate-400 rounded-full"
              ref={prevRef}
            >
              <SlArrowRight />
            </button>
          </div>
          <div className="col-end-7 ml-12 -mt-40 z-10  col-span-2 ...">
            <button
              className=" absolute rounded-full border-slate-400 border-2 bg-white hover:bg-slate-200 p-3 col-start-2  active:bg-slate-400  rotate-180 "
              ref={nextRef}
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
