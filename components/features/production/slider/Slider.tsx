import { Swiper as SwiperType,Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import ArrowIcon from "../../../../public/svg/arrowright.svg"
import { SlArrowRight } from 'react-icons/sl';

export const Slider = () => {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  const arrow='>'
  return (
    <div>
      <Swiper
      className=""
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        pagination={{ clickable: true , type: "bullets" }}
        // scrollbar={{ draggable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onInit={() => setInit(true)}
      >
        <SwiperSlide>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6904bb88f4978c65ae58f87e4409a7575725799d_1680516760.jpg?x-oss-process=image/quality,q_95/format,webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e297d32aefe0beb4e7484f81d7ae86fc27cbe567_1684579991.jpg?x-oss-process=image/quality,q_95/format,webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/7f2c2bc4e9c51b0617f80db476dcee709218f58d_1684735985.gif?x-oss-process=image?x-oss-process=image/format,webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/250d2c3ce84148dbf981598506e291e0a687bacb_1684581682.jpg?x-oss-process=image/quality,q_95/format,webp" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute z-10 -mt-20 mr-12  flex  justify-start gap-3    ">
          <button className=" bg-slate-100 hover:bg-slate-200 p-3  active:bg-slate-400 rounded-full" ref={nextRef}><SlArrowRight /></button>
          <button className="  rounded-full bg-slate-100 hover:bg-slate-200 p-3  active:bg-slate-400  rotate-180 " ref={prevRef}><SlArrowRight/></button>
        </div>
    </div>
  );
};
