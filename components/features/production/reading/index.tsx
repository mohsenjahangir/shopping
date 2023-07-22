import React from "react";

export const Reading = () => {
  const arrow = ">";
  const items = [
    {
      img: "https://www.digikala.com/mag/wp-content/uploads/2023/07/Untitled-1-17-610x380.jpg",
      title: "چهاربرنامه حرفه ای برای بازیابی اظلاعات از هارد و کارت حافظه",
    },
    {
      img: "https://www.digikala.com/mag/wp-content/uploads/2023/07/galaxy-z-flip-5-rq-3-610x380.jpg",
      title: "تیزر جدیدی گلگسی 6 خبر ازنمایشگر بدون شکاف میدهد",
    },
    {
      img: "https://www.digikala.com/mag/wp-content/uploads/2023/07/Biggest-Hard-Drive-1.jpg",
      title: "بزرگترین هارد دیسک بازار چه ظرفیتی دارد؟",
    },
    {
      img: "https://www.digikala.com/mag/wp-content/uploads/2023/07/01-Bruce-Lee-Workout-Routine-610x380.jpg",
      title: "تمرینات بروسلی,استاد هنرهای رزمی چه تمریناتی انجام میداد؟",
    },
  ];
  return (
    <div className=" lg:mx-8 mx-2 mt-8">
      <div>
        <div className=" grid grid-cols-2  mx-4">
          <div>خواندنی ها</div>
          <div className=" justify-end flex text-blue-600">
            مطالب بیشتر در ویتسل مگ{arrow}
          </div>
        </div>
        <div className="  grid lg:grid-cols-4 grid-cols-1 gap-4 mt-4">
          {items.map((item) => (
            <div className=" border rounded-2xl ">
              <img className=" rounded-t-2xl  w-full" src={item.img} />
              <div className=" mt-4 mb-4 mr-2">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
