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
import Amazing from "../../../public/svg/amazing.svg"

export const Header = () => {

  const MockData =
  [
    {
      name: "سوپر مارکت",
      route: "/category/mac",
      id: 0,
      isBadge: false,
      icon:<MarketIcon/>
    },
    {
      name: "پرفروش ترین ها",
      route: "/category/iphone",
      id: 1,
      isBadge: false,
      icon:<MostSellIcon/>
    },
    {
      name: "تخفیف ها و پیشنهادها",
      route: "/category/appleWatch",
      id: 2,
      isBadge: false,
      icon:<DiscountIcon/>
    },
    {
      name: "شگفت‌انگیزها",
      route: "/category/ipad",
      id: 3,
      isBadge: false,
      icon:<Amazing/>
    },
    {
      name: "سوالی دارید؟",
      route: "/music",
      id: 4,
      isBadge: false
    },
    {
      name: "در فروشگاه ما بفروشید",
      route: "/category/accessories",
      id: 5,
      isBadge: false
    }
  ]

  return (
    <>
      <div className="grid  grid-cols-2 mb-10">
        <div className="grid grid-cols-12 gap-14">
          <Link href="/">
            <VitselIcon />
          </Link>
          <div className="relative col-span-11 text-gray-600">
            <input
              className="w-full h-10 pl-10 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              type="search"
              name="search"
              placeholder="جستجو"
            />
            <div className="absolute top-0 mt-3 mr-3">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <div className=" flex justify-end gap-5  ">
          <div className="items-center  gap-2 flex justify-center border-2 p-2 rounded-lg">
            <div>
              <LoginIcon />
            </div>
            <div>ورود | ثبت نام</div>
          </div>
          <div className="self-center">
            <CartIcon />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <div className=" flex justify-center gap-2">
          <div>
            <Dropdown />
          </div>
          <div className="flex gap-4">
            {MockData.map((item) => (
              <div className="hover:border-b-2 border-black" key={item.id}>
                <Link href={item.route} className=" truncate flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
          <div className="font-thin  ml-4 flex">
            <Location />
            <p className=" truncate xl:w-44 lg:w-24 break-words "> لطفا شهر خود را انتخاب کنید</p>
          </div>
      </div>
    </>
  );
};
