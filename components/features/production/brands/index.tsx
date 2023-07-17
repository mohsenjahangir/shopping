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
import { BsArrowLeftCircle } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export const Brands = () => {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  const arrow = ">";
  const slides = [
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/100010929.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/9f74161dd136485ac79f5ca5e829b2340419b084_1666776495.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/482302342bcecdf560aa25e7698c2ef8c62339ea_1602073618.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/477ab48bb7261595c02cb0f4c504837e464f00d0_1663485028.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/1313.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/5f9e5a98fc72f4eac2d4b4e6e4e6399ebd9aa65c_1646565463.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-brands/100014253.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
  ];
  const images3 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cf8b5a74a96b75c538ea3c87bb00fd463ec6729b_1687592731.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/355f5293a9d23fde74982956b09439c992dd3003_1688760908.jpg?x-oss-process=image/quality,q_95/format,webp",
      alt: "",
    },
  ];
  return (
    < div className=" mx-8">
      <div className="  py-5 rounded-xl  border-2 px-1 mt-8">
        <div className=" flex justify-center text-center text-2xl mb-4 gap-3">
          <StarIcon />
          محبوب ترین برندها
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
              <div className=" bg-white  w-full h-40 flex items-center justify-center  border-r-2">
                <div className="  pt-2  ">
                  <div>
                    <img className=" w-32 " src={item.img} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
      <div className=" lg:flex justify-between    ">
          {images3.map((item) => (
            <div>
              <img className=" w-full mt-4 rounded-2xl" src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
    </div>
  );
};
