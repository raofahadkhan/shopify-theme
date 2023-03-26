"use client";
import React, { useState } from "react";
import MoreDetails from "./MoreDetails";
import SizeChart from "./SizeChart";
import AskQuestionForm from "./AskQuestionForm";
import { CartContext } from "@/components/shared/CartContext";
import { useContext } from "react";

type Props = {
  images: string[];
  video: string;
  data: any;
};

function ProductDetails({ video, data }: Props) {
  const images = [
    data.imageUrl,
    data.imageUrl2,
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

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 lg:px-12 ">
      <div className="basis-1/2 flex flex-row-reverse lg:flex-row lg:px-2 space-x-4 self-start static lg:sticky top-0 md:w-full ">
        <div className="flex flex-col lg:items-end items-start md:items-center px-4 lg:pl-0 space-y-4 basis-1/4 ">
          {video && (
            <div className="relative cursor-pointer">
              <img
                src={images[2]}
                alt=""
                onClick={() => setSelected({ type: "video", src: video })}
                className={`w-[100px] ${
                  selected.type == "video" ? "ring-2 ring-black" : ""
                }`}
              />
              <img
                className="absolute top-1 right-1 w-[25px] h-[25px] "
                src="https://img.icons8.com/ios-filled/256/play-button-circled.png"
              />
            </div>
          )}
          {images.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                alt=""
                onClick={() => setSelected({ type: "image", src: image })}
                className={`w-[100px] cursor-pointer ${
                  selected.src == image ? "ring-2 ring-black" : ""
                }`}
              />
            );
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
        <h3 className="text-3xl font-bold">{data.name ? data.name : ""}</h3>
        <p className="text-xl tracking-[2px]">${data.price}</p>
        <hr className="bg-gray-300" />
        <p className="text-lg uppercase font-semibold w-full">Size</p>
        <div className="flex space-x-4 flex-wrap">
          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${
              size == "S" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("S")}
          >
            S
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${
              size == "M" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("M")}
          >
            M
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${
              size == "L" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("L")}
          >
            L
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${
              size == "XL" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("XL")}
          >
            XL
          </button>
        </div>

        <button
          className="w-full group text-center ring-black ring-1 py-3 text-lg font-bold flex items-center"
          onClick={handleAddToCart}
        >
          <p className="flex-grow group-hover:-translate-x-8 transition duration-200">
            Add to Cart
          </p>
          <img
            src="https://img.icons8.com/ios-filled/256/long-arrow-up.png"
            className="rotate-[90deg] w-[20px] translate-x-8 group-hover:-translate-x-2 transition duration-200 hidden group-hover:inline-flex"
          />
        </button>

        <button className="w-full text-center text-white bg-black py-3 text-lg font-bold">
          Buy it now
        </button>
        <p className="italic tracking-[1px]">
          This is a demonstration store. You can purchase products like this
          from United By Blue
        </p>
        <p className="">
          Like your well-worn pair of jeans in short-sleeve button down form.
          Features an understated plus-sign pattern.
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
  );
}

export default ProductDetails;
