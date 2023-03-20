import React from "react";
import { useState } from "react";
import { Footerdata, footsub, powername } from "../data/footerdata";
import { IoIosArrowDown } from "react-icons/io";
import { Dropup } from "./currencydropup";
import Image from "next/image";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27px"
                height="27px"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  fill="white"
                ></path>
              </svg>
              <svg
                className="color: rgb(255, 255, 255);"
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 512 512"
              >
                <path
                  d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
          </div>
          <br />
        </div>
        <div className="hidden min-[590px]:inline">
          <li className=" flex flex-col">
            <>
              <h2 className="font-bold tracking-widest">{dataHeaderZero}</h2>
              <ul className="py-5">
                {dataListZero.map((item: any) => {
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
        <div className="hidden min-[590px]:inline">
          <li className=" flex flex-col">
            <>
              <h2 className="font-bold tracking-widest">{dataHeaderOne}</h2>
              <ul className="py-5">
                {dataListOne.map((item: any) => {
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
        <div className="hidden min-[590px]:inline">
          <li className=" flex flex-col">
            <>
              <h2 className="font-bold tracking-widest ">{dataHeaderTwo}</h2>
              <ul className="py-5">
                {dataListTwo.map((item: any) => {
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
