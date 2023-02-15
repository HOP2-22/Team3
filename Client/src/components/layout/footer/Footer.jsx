import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import FooterLine1 from "./FooterLine1";
import FooterLine2 from "./FooterLine2";

const Footer = () => {
  return (
    <div className="bg-[#252B3B] pt-[37px] pb-[55px] px-5 md:px-8 lg:px-20 xl:px-32 4xl:px-48 5xl:px-72 7xl:px-88 grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] sm:gap-[70px]">
      <FooterLine1 />
      <FooterLine2 />
      <div className="w-full sm:col-span-2 lg:col-span-1 flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col sm:gap-10 lg:gap-4">
        <p className="text-[18px] text-white font-medium">
          Subscribe to our newsletter
        </p>
        <div className="flex justify-between px-4 rounded bg-white">
          <input
            type="text"
            placeholder="Email"
            className="grow placeholder:text-[#4DA0FD] text-primary-text font-semibold py-[14px] focus:outline-none "
          />
          <ArrowLongRightIcon className="fill-[#4DA0FD] hover:scale-110 hover:fill-[#3887e1] transition-all w-[25px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
