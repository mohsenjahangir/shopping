import React from "react";
import { Slider } from "../production/slider/Slider";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Services } from "./services";
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
        <Slider />
        <Services/>
        <div className=" flex justify-end">
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
