// Import icons and components
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
const navItems = [
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
    name: "شگفتانگیزها",
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

const provinces = [
  { value: "tehran", label: "تهران" },
  { value: "mashhad", label: "مشهد" },
  { value: "isfahan", label: "اصفهان" },
];

export const Header = () => {
  return (
    <div className="lg:pb-5 border-b-2     bg-white  w-full">
      <div className="items-center lg:hidden  flex justify-between py-2 mx-3">
        <div>
          <Category />
        </div>
        <Link href="/" className="">
          <VitselIcon />
        </Link>
        <div className="border-2 border-black px-2 rounded-md font-bold">?</div>
      </div>
      <div className="flex flex-row lg:grid lg:grid-cols-2 justify-between  w-full    border-y-2 lg:border-y-0  p-2   lg:pr-10 lg:pt-4  lg:fixed z-40 bg-white lg:pb-4   ">
        <div className="basis-3/4 ">
          <div className="flex gap-2">
            <Link href="/" className=" bg-red-500 rounded-md ">
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
        <div className="flex justify-end gap-5 lg:ml-28 ">
          <div className="lg:gap-2 flex-row-reverse lg:flex-row flex lg:border-2 p-2 rounded-lg">
            <div>
              <LoginIcon />
            </div>
            <div className="invisible lg:visible">ورود | ثبت نام</div>
          </div>
          <div className="self-center">
            <CartIcon />
          </div>
        </div>
        
      </div>
      <div className="lg:flex lg:justify-between gap-4  hidden lg:visible  p-2 lg:pr-10  lg:pt-24 ">
        <div className="lg:flex lg:justify-center lg:gap-2">
          <div>
            <Dropdown />
          </div>
          <div className="lg:flex gap-4">
            {navItems.map((item) => (
              <div className="hover:border-b-2 border-black" key={item.id}>
                <Link
                  href={item.route}
                  className="truncate flex items-center gap-1"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="font-thin ml-4 flex">
          <Location />
          <p className="truncate xl:w-44 lg:w-24 break-words">
            لطفا شهر خود را انتخاب کنید
          </p>
        </div>
      </div>

      <div className="lg:hidden visible mb-4  mx-3 z-10">
        <div className="flex items-center">
          <div>
            <Location />
          </div>
          <select
            id="provinces"
            name="provinces"
            className="bg-transparent border-gray-500 text-gray-500 py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
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
