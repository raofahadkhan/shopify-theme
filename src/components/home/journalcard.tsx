import Image from "next/image";
import React from "react";
import { product1 } from "../data/journaldata";
type journaltype = {
  name: string;
  details: string;
  ImageURL: string;
};
const Product1 = () => {
  return (
    <>
      <div className=" mx-[4.2rem] mt-9 flex justify-between">
        <h4 className="text-3xl font-bold ">From the journal</h4>
        <h1 className="text-gray-600">View all</h1>
      </div>
      <section className="flex  items-center justify-center">
        <div className="mx-6 mt-12 flex cursor-pointer flex-col items-center gap-8  min-[590px]:flex-row">
          {product1.map((item: journaltype) => (
            <div className="  w-full flex-1" key={item.name}>
              <a href={item.name} className={``}>
                <div className="animation_triggering_class h-auto w-auto cursor-pointer justify-center overflow-hidden">
                  <Image
                    className="hover scale_triggering_class overflow-hidden duration-[3000ms] ease-in-out hover:scale-110 hover:brightness-75 lg:h-[12.5rem] lg:w-[24rem]"
                    width={384}
                    height={200}
                    src={item.ImageURL}
                    alt="product"
                  />
                </div>
              </a>
              <div>
                <h3 className="mt-5 text-gray-600">{item.name}</h3>
              </div>
              <div className="max-w-xs">
                <p className=" text-[23px]  text-gray-700">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product1;
