import React from "react";
import { Slider } from "../production/slider/Slider";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Services } from "./services";
import { AmazingSugestion } from "../production/amazing";
import { Suggestion } from "../production/suggestion";
import { Brands } from "../production/brands";
import { Your_visit } from "../production/yourvisit";
import { Digi_plus } from "../production/digiplus";
import { Your_visit_recently } from "../production/yourvisit_recently";
import { Most_sell } from "../production/most_sell";
import { Discount } from "../production/discount";
import { Reading } from "../production/reading";
export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="">
        <div>
          <Slider />
        </div>
        <div className=" lg:mx-4">
          <Services />
          <AmazingSugestion />
          <Suggestion />
          <Brands />
          <Your_visit />
          <Digi_plus/>
          <Your_visit_recently/>
          <Most_sell/>
          <Discount/>
          <Reading/>
        </div>

        <div className=" flex justify-end absolute z-50">
          <button
            className={`fixed bottom-8 right-8 bg-gray-800 text-white p-4 rounded-full transition-opacity ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClick}
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      </div>
      {/* <div>buttons</div> */}
    </>
  );
};
