import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

const Terms = () => {
  const sections = [
    {
      title: "شرایط استفاده از سایت",
      content: `با استفاده از سایت ویتسل، شما موافقت خود را با شرایط زیر اعلام می کنید. این شرایط ممکن است در آینده تغییر کنند و شما باید به روز رسانی های آنها را دنبال کنید. اگر با هر یک از شرایط موافق نیستید، لطفا از سایت استفاده نکنید.`,
    },
    {
      title: "حقوق مالکیت معنوی",
      content: `تمامی محتوای سایت ویتسل، اعم از نام، لوگو، طرح، علامت تجاری، متن، تصویر، صدا، ویدئو و سایر موارد، متعلق به ویتسل یا منبع مشخص شده آنها است و تحت قوانین حقوق مؤلف و حقوق مالکیت معنوی جمهوری اسلامی ایران و قوانین بین المللی حمایت می شود. هرگونه کپی برداری، تغییر، بازنشر، فروش یا استفاده تجاری از محتوای سایت بدون کسب اجازه کتبی از ویتسل یا منبع آن، حرام و غیرقانونی است و پیگرد قانونی دارد.`,
    },
    {
      title: "حساب کاربری",
      content: `برای استفاده از برخی خدمات سایت ویتسل، شما نیاز به ایجاد یک حساب کاربری دارید. شما باید اطلاعات صحیح و کامل خود را در هنگام ثبت نام وارد کنید و در صورت تغییر آنها، آنها را به روز رسانی کنید. شما همچنین باید نام کاربری و رمز عبور خود را محفوظ نگه دارید و از افشای آنها به دیگران جلوگیری کنید. هرگونه فعالیت غیرمجاز یا تخلف با استفاده از حساب کاربری شما، مسئولیت شما خواهد بود. در صورت مشاهده هرگونه نقض یا سوء استفاده، باید سریعا آن را به ویتسل گزارش دهید.`,
    },
    {
      title: "خدمات پس از فروش",
      content: `در صورت خرید کالا یا خدمات از سایت ویتسل، شما ممکن است به خدمات پس از فروش نظیر تحویل، نصب، گارانتی، مرجوعی، تعویض و بازگشت نیاز داشته باشید. این خدمات بر اساس شرایط و قوانین مشخصی ارائه می شوند که شما باید با آنها آشنا باشید و آنها را رعایت کنید. برای مطالعه شرایط و قوانین خدمات پس از فروش، به بخش مربوطه در سایت مراجعه کنید.`,
    },
  ];

  return (
    <div className="w-full  p-2 mx-auto bg-white rounded-2xl">
      <div className="text-2xl font-bold text-center text-red-600">
        شرایط فروشگاه ما
      </div>
      <div className="mt-4 space-y-2">
        {sections.map((section, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-600 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{section.title}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {section.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Terms;
