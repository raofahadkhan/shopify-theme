import React from "react";
import { useState } from "react";
import { Footerdata, footsub, powername } from "../data/footerdata";
import { IoIosArrowDown } from "react-icons/io";
import { Dropup } from "./currencydropup";
import Image from "next/image";
import { FaBaby } from "react-icons/fa";
type Footerdatatype = {
  header: string;
  list: string[];
};
export const Footer = () => {
  const dataHeaderZero = Footerdata[0].header;
  const dataListZero = Footerdata[0].list;
  const dataHeaderOne = Footerdata[1].header;
  const dataListOne = Footerdata[1].list;
  const dataHeaderTwo = Footerdata[2].header;
  const dataListTwo = Footerdata[2].list;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  function setTimeOutForDropdown() {
    setTimeout(() => {
      setDropDown(!dropDown);
    }, 300);

    return function () {
      clearTimeout(200);
    };
  }
  function setTimeOutForDropdown1() {
    setTimeout(() => {
      setDropDown1(!dropDown1);
    }, 300);
  }
  function setTimeOutForDropdown2() {
    setTimeout(() => {
      setDropDown2(!dropDown2);
    }, 400);
  }

  return (
    <div className="w-full bg-[#111111] pt-20 pb-14 text-[14.88px]  text-white">
      <div className="mr-0 flex flex-col px-[20px] min-[590px]:pl-[40px] md:flex-row md:justify-around md:pl-[0px] lg:mr-7">
        <div className="">
          <div className="flex w-full flex-row justify-between min-[590px]:flex-col">
            <div>
              <Image
                src={footsub.logosrc}
                alt="motion"
                height={110}
                width={110}
              />
            </div>
            <div className="flex flex-row gap-4 min-[590px]:py-6 ">
              <Image src="fb.svg" alt="motion" height={27} width={27} />
              <Image src="twitter.svg" alt="motion" height={28} width={28} />
            </div>
          </div>
          <br />
        </div>
        {Footerdata.map((item: any) => {
          return (
            <div className="hidden min-[590px]:inline" key={item.header}>
              <li className=" flex flex-col">
                <>
                  <h2 className="font-bold tracking-widest">{item.header}</h2>
                  <ul className="py-5">
                    {item.list.map((item: any) => {
                      return (
                        <li
                          className=" flex flex-col py-[0.4rem]  text-white"
                          key={item}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </>
              </li>
            </div>
          );
        })}
        {/*   
        For
        mobile screen 
 */}
        <div
          className={`w-full border-b border-b-gray-800 transition-all duration-[900ms] min-[590px]:hidden ${
            isOpen ? "h-[17rem]" : "h-16"
          }`}
        >
          <div
            className="mt-4  flex cursor-pointer items-center justify-between py-3"
            onClick={() => {
              setIsOpen(!isOpen);
              setTimeOutForDropdown();
            }}
          >
            <h2 className="font-bold ">{dataHeaderZero}</h2>
            <IoIosArrowDown
              className={` duration-400  transition-all ease-out ${
                dropDown ? "rotate-180 " : "rotate-360 "
              }`}
            />
          </div>
          <div className={` py-5 ${dropDown ? "visible " : "hidden "}`}>
            {dataListZero.map((item: any) => {
              return (
                <li
                  className="flex flex-col py-[0.4rem] text-white   transition-all delay-1000  duration-1000 ease-out"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>

        {/*
         */}

        <div
          className={`w-full border-b border-b-gray-800 transition-all duration-[800ms] min-[590px]:hidden ${
            isOpen1 ? "h-[17rem]" : "h-16"
          }`}
        >
          <div
            className="mt-4  flex cursor-pointer items-center justify-between py-3"
            onClick={() => {
              setIsOpen1(!isOpen1);
              setTimeOutForDropdown1();
            }}
          >
            <h2 className="font-bold ">{dataHeaderOne}</h2>
            <IoIosArrowDown
              className={` duration-400  transition-all ease-out ${
                dropDown1 ? "rotate-180 " : "rotate-360 "
              }`}
            />
          </div>
          <div className={` py-5 ${dropDown1 ? " visible " : " hidden "}`}>
            {dataListOne.map((item: any) => {
              return (
                <li
                  className="flex flex-col py-[0.4rem] text-white transition-all delay-1000 duration-1000"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>
        <div
          className={`w-full border-b border-b-gray-800 transition-all duration-1000 min-[590px]:hidden ${
            isOpen2 ? "h-[13rem]" : "h-16"
          }`}
        >
          <div
            className="mt-4  flex cursor-pointer items-center justify-between py-3"
            onClick={() => {
              setIsOpen2(!isOpen2);
              setTimeOutForDropdown2();
            }}
          >
            <h2 className="font-bold ">{dataHeaderTwo}</h2>
            <IoIosArrowDown
              className={` duration-400  transition-all ease-out ${
                dropDown2 ? "rotate-180 " : "rotate-360 "
              }`}
            />
          </div>
          <div className={` py-5 ${dropDown2 ? "visible" : "hidden "}`}>
            {dataListTwo.map((item: any) => {
              return (
                <li
                  className="flex flex-col py-[0.4rem] text-white   transition-all delay-1000  duration-[2000ms] ease-out"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col  md:w-72 ">
          <h2 className=" mt-5 font-bold uppercase">{footsub.head}</h2>
          <h1 className=" py-4 ">{footsub.detail}</h1>
          <div className="relative flex w-full">
            <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[18.5rem] border border-gray-800 bg-transparent p-2 pl-10 placeholder:pl-1 placeholder:text-white"
              placeholder="Enter your email"
              required
            ></input>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center pt-[2rem]">
        <Dropup />
        <h1 className="mt-4 text-xs">{powername}</h1>
      </div>
    </div>
  );
};
