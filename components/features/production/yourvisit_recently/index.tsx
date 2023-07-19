import React from "react";

export const Your_visit_recently = () => {
  const images3 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/409736f04b0803e94bad10aae2b4011a225c3371_1660715226.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/53b4feb9dead4898764793a7c21c71561d1775aa_1689578146.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/17c6085f02c26d7d7b11653decf6f6f81b846f4e_1654596794.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/1f8bb150b142112d1f7560d5313d1d73ca67aa28_1677060264.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images4 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/ff2f076be6ded436a14cc1d4e5e48e79b78508ef_1610993916.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/ab38625a30baf2719dea99870464bdeaf5216f97_1635343303.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/73d3a836a51bcab5d672b44b9edab184dcfc9163_1653327756.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/bb20094ef72712cba49722e50a50ba34162bc8fd_1645359941.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images5 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/a43c534d374b5de0c5d3a6e106d1b9c5de4da877_1671292630.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/55421dd36a554e719f9a1fdae9d51207e6edca99_1687863570.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/cf7840133c7b2d42979c3129a96008e5b166ac0d_1677925439.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images6 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/798c6a5650c6ba412e7490ad93202dcc37bcff56_1670483406.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/2ef6f567848b3c7d2a05e8b15cee279517d8f336_1612801080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/4ec6107a35f37fa4af81cd9bcdedba989d49edf8_1676126383.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/b704503d2d59f73af9659314bc3a0d638ccb2856_1668419447.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const arrow = ">";
  return (
    < div className=" flex justify-center lg:mx-8">
      <div className="  grid lg:grid-cols-4 grid-cols-1  mt-4  lg:border rounded-xl">
        <div className=" lg:border-l">
          <div className="grid grid-cols-1  mr-4 mt-4">
            <text className="font-medium">گوشی موبایل</text>
            <text className="text-slate-500 mt-2">براساس بازدیدهای اخیر شما</text>
          </div>
          <div className=" grid grid-cols-2 mt-4">
            {images3.map((item) => (
              <div className="y">
                <img src={item.src} />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4">
            <button className="text-blue-500">مشاهده همه {arrow}</button>
          </div>
        </div>

        <div className=" lg:border-l">
          <div className="grid grid-cols-1  mr-4 mt-4">
            <text className="font-medium">کیف و کاور گوشی</text>
            <text className="text-slate-500 mt-2">براساس بازدیدهای اخیر شما</text>
          </div>
          <div className=" grid grid-cols-2 mt-4">
            {images4.map((item) => (
              <div className="y">
                <img src={item.src} />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4">
            <button className="text-blue-500">مشاهده همه {arrow}</button>
          </div>
        </div>
        <div className=" lg:border-l" >
          <div className="grid grid-cols-1  mr-4 mt-4">
            <text className="font-medium">هدفون، هدست و هندزفری</text>
            <text className="text-slate-500 mt-2">براساس بازدیدهای اخیر شما</text>
          </div>
          <div className=" grid grid-cols-2 mt-4">
            {images5.map((item) => (
              <div className="y">
                <img src={item.src} />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4">
            <button className="text-blue-500">مشاهده همه {arrow}</button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1  mr-4 mt-4">
            <text className="font-medium">ساعت هوشمند</text>
            <text className="text-slate-500 mt-2">براساس بازدیدهای اخیر شما</text>
          </div>
          <div className=" grid grid-cols-2 mt-4">
            {images6.map((item) => (
              <div className="y">
                <img src={item.src} />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4">
            <button className="text-blue-500">مشاهده همه {arrow}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
