import Image from "next/image";
import { useState } from "react";
import { countries } from "./data/countries";

export const Dropup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <button
        type="button"
        className="inline-flex w-[270px] justify-between gap-x-1.5 border border-gray-800 bg-transparent px-3 py-2 text-sm text-white  "
        id="menu-button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={countries[0].flag}
          alt=""
          height={25}
          width={25}
          className=""
        />
        <h1 className="text-base">{countries[0].name} </h1>
        <svg
          className="-mr-1 h-6 w-6 text-gray-200"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-[2.71rem] h-[22rem] w-[270px] overflow-hidden  overflow-y-scroll bg-white text-black shadow-lg min-[500px]:-left-16 min-[500px]:w-[26rem] min-[590px]:left-0 md:w-[28rem]">
          {countries.map((item: any, i: any) => (
            <div className="flex  flex-col-reverse  " key={item.name}>
              <div className="hover flex cursor-pointer py-2 hover:underline">
                <Image
                  src={item.flag}
                  alt=""
                  height={25}
                  width={25}
                  className="ml-2"
                />
                <h1 className=" pl-2 text-base text-black">{item.name} </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
