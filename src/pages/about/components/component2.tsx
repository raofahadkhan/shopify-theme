/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export const Component2 = () => {
  return (
    <div className="flex flex-col items-center  my-20 p-[20px] min-[590px]:p-[40px]">
      <div className="flex flex-wrap text-center max-w-[58rem] mx-10">
        <p className="text-[16px] text-gray-900 min-[590px]:text-[22px] leading-9 tracking-wide">
          When we set out to create eight pieces that would bring out the best
          of both Chaco and United By Blue, we knew there were a couple things
          we had to bring to the table: Every piece had to be both land and
          water friendly, and made with the outdoors in mind.
        </p>
      </div>
      <div className="flex flex-col min-[590px]:flex-row items-center min-[590px]:justify-center gap-x-20 min-[1100px]:gap-x-[8rem]  my-[5.7rem] ">
        <div className="animation_triggering_class overflow-hidden">
          <Image
            src="/about1.webp"
            className="scale_triggering_class"
            alt="Image"
            height={333.333}
            width={500}
          />
        </div>
        <div className="w-[370px] ">
          <h1 className="mt-6">ESTD. 2002</h1>
          <h3 className="text-[30px] font-extrabold">Our Brooklyn store</h3>
          <p className="mt-4 text-gray-800">
            Where it all started. You'll find all the brands we carry here in a
            restored 1800's tile factory warehouse in downtown Williamsburg.
          </p>
        </div>
      </div>
    </div>
  );
};
