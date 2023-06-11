import VitselIcon from "../../../public/svg/vistel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoginIcon from "../../../public/svg/login.svg";
import CartIcon from "../../../public/svg/cart.svg";
import Location from "../../../public/svg/location.svg";
import Category from "../../../public/svg/category.svg";
import Link from "next/link";
import { Dropdown } from "./CategoryDropDown";
import MarketIcon from "../../../public/svg/market.svg";
import MostSellIcon from "../../../public/svg/mostsell.svg";
import DiscountIcon from "../../../public/svg/discount.svg";
import Amazing from "../../../public/svg/amazing.svg";
import { useState } from "react";

export const Header = () => {
  const MockData = [
    {
      name: "سوپر مارکت",
      route: "/category/mac",
      id: 0,
      isBadge: false,
      icon: <MarketIcon />,
    },
    {
      name: "پرفروش ترین ها",
      route: "/category/iphone",
      id: 1,
      isBadge: false,
      icon: <MostSellIcon />,
    },
    {
      name: "تخفیف ها و پیشنهادها",
      route: "/category/appleWatch",
      id: 2,
      isBadge: false,
      icon: <DiscountIcon />,
    },
    {
      name: "شگفت‌انگیزها",
      route: "/category/ipad",
      id: 3,
      isBadge: false,
      icon: <Amazing />,
    },
    {
      name: "سوالی دارید؟",
      route: "/music",
      id: 4,
      isBadge: false,
    },
  ];

  const [provinces, setProvinces] = useState([
    { value: "tehran", label: "تهران" },
    { value: "mashhad", label: "مشهد" },
    { value: "isfahan", label: "اصفهان" },
    // Add more provinces here...
  ]);

  return (
    <div className="2xl:mx-10  lg:mx-3 mt-5 lg:mb-44">
      <div className=" items-center lg:invisible mb-1 flex justify-between mx-3">
        <div>
          <Category />
        </div>
        <Link href="/" className=" ">
          <VitselIcon />
        </Link>
        <div className=" border-2 border-black px-2 rounded-md font-bold">
          ?
        </div>
      </div>
      <div className=" flex flex-row justify-between mb-10 border-y-2 lg:border-y-0 p-2 lg:p-0 mx-3 lg:mx-0">
        <div className=" basis-3/4 -mx-14 lg:-mx-0">
          <div className=" flex  gap-2">
            <Link href="/" className=" invisible lg:visible">
              <VitselIcon />
            </Link>
            <div className="relative col-span-11 text-gray-600 basis-3/4">
              <input
                className="w-full bg-slate-100 h-10 pl-10 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="search"
                name="search"
                placeholder="جستجو"
              />
              <div className="absolute top-0 mt-3 mr-3">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  justify-end   gap-5 ">
          <div className="  lg:gap-2  flex-row-reverse lg:flex-row flex  lg:border-2 p-2 rounded-lg">
            <div>
              <LoginIcon />
            </div>
            <div className=" invisible lg:visible">ورود | ثبت نام</div>
          </div>
          <div className="self-center">
            <CartIcon />
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:justify-between  gap-4 invisible lg:visible">
        <div className=" lg:flex lg:justify-center lg:gap-2">
          <div>
            <Dropdown />
          </div>
          <div className="lg:flex gap-4">
            {MockData.map((item) => (
              <div className="hover:border-b-2 border-black" key={item.id}>
                <Link
                  href={item.route}
                  className=" truncate flex items-center gap-1"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="font-thin  ml-4 flex">
          <Location />
          <p className=" truncate xl:w-44 lg:w-24 break-words ">
            لطفا شهر خود را انتخاب کنید
          </p>
        </div>
      </div>
      <div className="lg:invisible  -mt-52 mx-3 z-10  ">
        <div className="  flex items-center ">
          <div className="">
            <Location />
          </div>
          <select
            id="provinces"
            name="provinces"
            className=" bg-transparent  border-gray-500 text-gray-500 py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          >
            <option value="" disabled selected hidden>
              شهر خورد را انتخاب کنید
            </option>
            {provinces.map((province) => (
              <option key={province.value} value={province.value}>
                {province.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
