import { useState } from "react";
import { Footerdata } from "../data/footerdata";

function Dropdown({ options: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="flex w-full flex-row justify-between min-[590px]:flex-col">
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
      {Footerdata.map((item: any) => {
        return (
          <div className="relative" key={item.header}>
            <div
              className="bg-white border border-gray-300 rounded-md py-2 px-4 w-full inline-flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{isOpen ? "Close" : "Open"}</span>
              <svg
                className={`${
                  isOpen ? "text-gray-600" : "text-gray-400"
                } ml-2 h-5 w-5`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
                <ul className="py-1">
                  {item.list.map((option: any) => (
                    <li
                      key={option.header}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log(`Selected option: ${option}`);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function App() {
  //   const Footerdata1 = [
  //     { label: "Option 1.1", value: "1.1" },
  //     { label: "Option 1.2", value: "1.2" },
  //     { label: "Option 1.3", value: "1.3" },
  //   ];

  //   const Footerdata2 = [
  //     { label: "Option 2.1", value: "2.1" },
  //     { label: "Option 2.2", value: "2.2" },
  //     { label: "Option 2.3", value: "2.3" },
  //   ];

  //   const Footerdata3 = [
  //     { label: "Option 3.1", value: "3.1" },
  //     { label: "Option 3.2", value: "3.2" },
  //     { label: "Option 3.3", value: "3.3" },
  //   ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Dropdown Footerdata={Footerdata} />
      <Dropdown Footerdata={Footerdata} />
      <Dropdown Footerdata={Footerdata} />
    </div>
  );
}

export default App;
