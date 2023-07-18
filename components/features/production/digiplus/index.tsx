import { AiOutlineArrowLeft } from "react-icons/ai";

export const Digi_plus = () => {
  const arrow = ">";
  const images1 = [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/5399607.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/9f47245fe80e369f6e336fe9fc967ad05dfdfcb2_1669442363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/d2e1434a3846b06a6296e7ad430dd84ad1a3fc65_1641899344.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/409736f04b0803e94bad10aae2b4011a225c3371_1660715226.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1682344501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/a0f2b9c7c15f5356b0b40294fc6dd0ab1e969d07_1670417725.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/5fb17f017564554bde2b087f3257c7f9a8df41e0_1631389670.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/19566c32d6401b14c1b7157f37a05ee5fcc3e7ec_1625374856.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      alt: "",
    },
  ];
  return (
    <div className=" bg-purple-900 lg:mx-8 rounded-xl grid lg:grid-cols-3 grid-cols-1 mt-8">
      <div className=" text-white mt-8 mr-8 ">
        <div className="">
          <img src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" />
        </div>
        <div className=" mt-2">خدمات ویژه برای اعضای ویتسل پلاس</div>
        <button className="mt-2  border rounded-lg p-3 flex justify-center items-center gap-2">
          <div>عضویت</div>
          <div className=" w-8">
            <AiOutlineArrowLeft />
          </div>
        </button>
      </div>
      <div className=" lg:col-span-2 bg-white m-4 rounded-lg">
        <div className=" grid grid-cols-2">
          <div className=" lg:font-bold lg:text-xl truncate mt-4 mr-4">
            ارسال فوری رایگان
          </div>
          <div className=" flex justify-end mt-4 ml-4 text-purple-700">
            مشاهده همه{arrow}
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-6 lg:visible hidden">
          {images1.map((item) => (
            <div className="  ">
              <img className=" w-36 mt-4 mb-4" src={item.src} alt="" />
            </div>
          ))}
        </div>
        <div className=" grid  grid-cols-3 lg:hidden">
          {images1.slice(0, 3).map((item) => (
            <img className=" w-36 mt-4 mb-4" src={item.src} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
