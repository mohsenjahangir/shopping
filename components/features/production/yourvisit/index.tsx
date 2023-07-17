import React from "react";

export const Your_visit = () => {
  const images3 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1656426417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1682344501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images4 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/f770402fb511a627e61848a6d524135634ccc383_1661172183.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/a9a61804014cbc5c1359c686187d84431ba7c3b9_1661157654.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/ca33597895ebde3196a04fd32f43812ee28cc1a0_1675427394.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/b2ee5ad2c876718916df56c3828a2077462f493b_1668417925.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images5 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/623ca7096e8112cde0404b2d2fe2213c63ea62d7_1686787440.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/b31aa035fc6dd64d571d89b727aaf54460539b16_1688377578.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/c2ca6b8c3cb72b5db2d6c7fa7eba2cb868659200_1660392399.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const images6 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/b0af2ec78668c85506c1edc260b42ff447f019c8_1667201885.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/760c0407a514c473eb40542cc8b3d5ee988f1ca2_1661263829.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/54eab84c83d2335de43895c4a29706cfa5accff5_1680939496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/8be43641a60b2390a4840c9d8b6589346495e59e_1685951490.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  const arrow = ">";
  return (
    < div className=" flex justify-center mx-8">
      <div className="  grid lg:grid-cols-4 grid-cols-1  mt-4  lg:border rounded-xl">
        <div className=" lg:border-l">
          <div className="grid grid-cols-1  mr-4 mt-4">
            <text className="font-medium">گوشی موبایل</text>
            <text className="text-slate-500 mt-2">براساس بازدیدهای شما</text>
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
            <text className="text-slate-500 mt-2">براساس بازدیدهای شما</text>
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
            <text className="text-slate-500 mt-2">براساس بازدیدهای شما</text>
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
            <text className="text-slate-500 mt-2">براساس بازدیدهای شما</text>
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
