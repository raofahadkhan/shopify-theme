"use client";
import { FaLongArrowAltRight } from 'react-icons/fa'
import React, { useState } from "react";
import MoreDetails from "./MoreDetails";
import SizeChart from "./SizeChart";
import AskQuestionForm from "./AskQuestionForm";
import { CartContext } from "@/components/shared/CartContext";
import { useContext } from "react";
import BlackButton from "./shared/Button";

type Props = {
  images: string[];
  video: string;
  data: any;
};

function ProductDetails({ video, data }: Props) {
  const [blackScreen, setBlackScreen] = useState(false);
  const [popupScreen, setPopupScreen] = useState(false);
  const images = [
    data.images.edges[0].node.url,
    data.images.edges[1].node.url,
    "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
  ];

  const { addToCart }: any = useContext(CartContext);

  const [selected, setSelected] = useState({
    type: "video",
    src: "video.mp4",
  });

  const [size, setSize] = useState("S");

  function handleAddToCart() {
    addToCart({ ...data, size });
  }
  function showChart(action: any) {
    if (action === "show") {
      setBlackScreen(true);
      setPopupScreen(true)
    } else if (action === "hide") {
      setBlackScreen(false);
      setPopupScreen(false);
    }
  }

  return (
    <div>
      <div onClick={() => showChart("hide")} className={`${blackScreen ? "flex" : "hidden"} fixed inset-0 bg-slate-700 opacity-75 z-10`}></div>
      {/* <div className='fixed inset-0 flex justify-center items-center z-50'> */}
      <div className={`${popupScreen ? "flex" : "hidden"} flex-col fixed my-16 left-20 right-20 md:left-40 md:right-40 lg:left-[29rem] lg:right-[29rem] xl:left-[32rem] xl:right-[32rem] 2xl:left-[40rem] 2xl:right-[40rem] p-4 bg-white z-50 `}>
        <div className='text-right' onClick={() => { showChart("hide") }}>C</div>
        {/* Size Chart Created by abbasit using table tag */}
        <table>
          <tr>
            <th className='border-2' colSpan={2}>United States</th>
            <th>Uk</th>
            <th>Europe</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Extra Small</td>
            <td>4</td>
            <td>32</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Small</td>
            <td>6</td>
            <td>34</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Small</td>
            <td>8</td>
            <td>36</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Medium</td>
            <td>10</td>
            <td>38</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Large</td>
            <td>12</td>
            <td>40</td>
          </tr>
        </table>
      </div>
      {/* </div> */}
      <section className="flex flex-col lg:flex-row lg:space-x-8 lg:px-12 ">
        <div className="basis-1/2 flex flex-row-reverse lg:flex-row lg:px-2 space-x-4 self-start static lg:sticky top-0 md:w-full ">
          <div className="flex flex-col lg:items-end items-start md:items-center px-4 lg:pl-0 space-y-4 basis-1/4 ">
            {video && (
              <div className="relative cursor-pointer">
                <img
                  src={images[2]}
                  alt=""
                  onClick={() => setSelected({ type: "video", src: video })}
                  className={`w-[100px] ${selected.type == "video" ? "ring-2 ring-black" : ""
                    }`}
                />
                <img
                  className="absolute top-1 right-1 w-[25px] h-[25px] "
                  src="https://img.icons8.com/ios-filled/256/play-button-circled.png"
                />
              </div>
            )}
            {images.map((image, i) => {
              if (image) {
                return (
                  <img
                    key={i}
                    src={image}
                    alt=""
                    onClick={() => setSelected({ type: "image", src: image })}
                    className={`w-[100px] cursor-pointer ${selected.src == image ? "ring-2 ring-black" : ""
                      }`}
                  />
                );
              }
            })}
          </div>

          <div className="basis-3/4">
            {selected.type == "image" && (
              <img className="w-full" src={selected.src} />
            )}
            {selected.type == "video" && (
              <video loop autoPlay muted className="w-full">
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col space-y-4 mt-6 lg:mt-0 px-4 lg:px-0">
          <h3 className="text-3xl font-bold">{data.title}</h3>
          <p className="text-xl tracking-[2px]">$45</p>
          <hr className="bg-gray-300" />
          <p className="text-base uppercase font-semibold w-full">Size<span onClick={() => { showChart("show") }} className='text-xs ml-4 hover:underline font-normal cursor-pointer lowercase'>--Size Chart</span></p>
          <div className="flex space-x-4 flex-wrap">
            <button
              className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${size == "S" ? "ring-black ring-2" : "ring-1 ring-gray-300"
                }`}
              onClick={() => setSize("S")}
            >
              S
            </button>

            <button
              className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${size == "M" ? "ring-black ring-2" : "ring-1 ring-gray-300"
                }`}
              onClick={() => setSize("M")}
            >
              M
            </button>

            <button
              className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${size == "L" ? "ring-black ring-2" : "ring-1 ring-gray-300"
                }`}
              onClick={() => setSize("L")}
            >
              L
            </button>

            <button
              className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${size == "XL" ? "ring-black ring-2" : "ring-1 ring-gray-300"
                }`}
              onClick={() => setSize("XL")}
            >
              XL
            </button>
          </div>

          <button
            className="w-full overflow-hidden group text-center ring-black ring-1 py-3 text-lg font-bold flex items-center"
            onClick={handleAddToCart}
          >
            <p className="flex-grow group-hover:-translate-x-8 transition duration-200">
              Add to Cart
            </p>
            <div className="w-[20px] translate-x-8 group-hover:-translate-x-20 duration-300 invisible group-hover:inline-flex group-hover:visible">

              <FaLongArrowAltRight />
            </div>
            {/* <img
            src="https://img.icons8.com/ios-filled/256/long-arrow-up.png"
            className="rotate-[90deg] w-[20px] translate-x-8 group-hover:-translate-x-20 transition duration-200 hidden group-hover:inline-flex"
          /> */}
          </button>

          <button className="w-full text-center text-white bg-black py-3 text-lg font-bold">
            Buy it now
          </button>
          <p className="italic tracking-[1px]">
            {data.description.substr(0, 151)}
            <span className='block mt-3'>{data.description.substr(151) ? data.description.substr(151) : " "}</span>
          </p>
          <ul className="list-disc ml-8">
            <li>All-over print </li>
            <li>Full button down placket and collar </li>
            <li>Front left patch pocket </li>
            <li>Natural corozo buttons throughout</li>
            <li>Curved hemline</li>
          </ul>
          <MoreDetails title="Size Chart">
            <SizeChart />
          </MoreDetails>
          <MoreDetails title="Ask a question">
            <AskQuestionForm />
          </MoreDetails>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
