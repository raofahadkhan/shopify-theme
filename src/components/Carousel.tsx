"use client";
import { useState } from "react";
import CustomCarousel from "./CustomCarousel";
import { AllProductType } from "./typesandArrays/shopifyTypes/productTypes";

//Image 1 :https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900
//Image 2 :https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000

export default function Carousel({
  dataMen,
  dataWomen,
}: {
  dataMen: AllProductType;
  dataWomen: AllProductType;
}) {
  const [currentCarousel, setCurrentCarousel] = useState(1);
  return (
    <main className="w-screen flex flex-col items-center h-fit pb-[30px]">
      <h2 className="uppercase tracking-[3px] text-lg">Top Picks</h2>
      <div className="flex justify-between text-3xl font-bold ">
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 1 ? "underline" : ""
          }`}
          onClick={() => setCurrentCarousel(1)}
        >
          Men
        </p>
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 2 ? "underline" : ""
          }`}
          onClick={() => {
            setCurrentCarousel(2);
          }}
        >
          Women
        </p>
      </div>
      <div className="w-full h-full">
        {currentCarousel == 1 && (
          <CustomCarousel data={dataMen.data.collection.products} />
        )}
        {currentCarousel == 2 && (
          <CustomCarousel data={dataWomen.data.collection.products} />
        )}
      </div>
    </main>
  );
}
