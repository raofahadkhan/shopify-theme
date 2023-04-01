import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const FooterChild = ({item}:any) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);


  function setTimeOutForDropdown2() {
    setTimeout(() => {
      setDropDown2(!dropDown2);
    }, 400);
  }

  return (
    <div
            key={item.header}
          className={`w-full border-b border-b-gray-800 transition-all duration-1000 min-[590px]:hidden ${
            isOpen2 ? "h-[16rem]" : "h-16"
          }`}
        >
          <div
            className="mt-4  flex cursor-pointer items-center justify-between py-3"
            onClick={() => {
              setIsOpen2(!isOpen2);
              setTimeOutForDropdown2();
            }}
          >
            <h2 className="font-bold ">{item.header}</h2>
            <IoIosArrowDown
              className={` duration-400  transition-all ease-out ${
                dropDown2 ? "rotate-180 " : "rotate-360 "
              }`}
            />
          </div>
          <div className={` py-5 ${dropDown2 ? "visible" : "hidden "}`}>
            {item.list.map((item: any) => {
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
  )
}

export default FooterChild
