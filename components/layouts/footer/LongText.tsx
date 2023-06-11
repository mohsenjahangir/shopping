import { useState, useEffect } from "react";
import React from "react";
type LongTextProps = {
  text: string;
};

const LongText = ({ text }: LongTextProps) => {
  const [showMore, setShowMore] = useState(false);
  const [isShortText, setIsShortText] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        setIsShortText(textRef.current.clientHeight >= 5 * lineHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [text]);

  const lineHeight = 1.5; // adjust this based on your font-size and line-height
  const textRef = React.createRef<HTMLParagraphElement>();

  return (
    <div className="w-full">
      <p
        className={`${
          showMore || !isShortText ? "block" : "text-opacity-40"
        } ${
          showMore ? "" : "line-clamp-2"
        } text-gray-800 leading-relaxed`}
        ref={textRef}
        style={{ transition: "opacity 0.2s" }}
      >
        {text}
      </p>
      {text.length > 150 && (
        <button
          onClick={toggleShowMore}
          className="text-blue-500 underline mt-2"
        >
          {showMore ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default LongText;