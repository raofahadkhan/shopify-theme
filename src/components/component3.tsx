/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
export const Component3 = () => {
  return (
    <div className="flex flex-col items-center  my-20 p-[20px] min-[590px]:p-[40px]">
      <div className="flex flex-col-reverse min-[590px]:flex-row content-center items-center min-[590px]:justify-center gap-x-20 min-[1100px]:gap-x-[7rem]  my-[5.7rem] ">
        <div className="w-[370px] ">
          <h1 className="mt-6">ESTD. 2004</h1>
          <h3 className="text-[30px] font-extrabold">Downtown Philly</h3>
          <p className="mt-4 text-gray-800 text-[1.1rem]">
            Our first expansion. You'll find our core product line here in a
            restored 1800's tile factory warehouse in downtown Philadelphia.
          </p>
          <button className="group text-white flex bg-[#111111] font-bold pl-[20px] py-[12px] mt-[20px] transition-all delay-300 duration-1000">
            <span className="transition-all duration-300 group-hover:pr-[35px]">
              Shop gift cards
            </span>
            <FaLongArrowAltRight className="relative -z-10 group-hover:z-0 -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
          </button>
        </div>
        <div className="animation_triggering_class overflow-hidden">
          <Image
            src="/about2.jpg"
            className="scale_triggering_class"
            alt="Image"
            height={410}
            width={612}
          />
        </div>
      </div>
    </div>
  );
};
