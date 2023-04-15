// import { useState } from "react"
// import Image from "next/image";
// import { Jost } from 'next/font/google'
// import ImageChanging from "./ImageChanging";
// import { NavigationDataLabelType, ProductDataType } from "@/components/typesandArrays/AllMensData";

// const inter = Jost({ subsets: ['latin'] })

// export default function AllMens({ particularDatas, apiAllProductData }: any) {
//   const [allProductData, setallProductData] = useState(apiAllProductData);
//   const [particularProductData, setParticularProductData] = useState(particularDatas.productData);

//   function filterData(labelToMatch: string) {
//     let updatedData = particularDatas.productData.filter((item: any) => item.catogry2 == labelToMatch)
//     setParticularProductData(updatedData);
//   }
//   function filterDataCatogry1(labelToMatch: string) {
//     let updatedData = particularDatas.productData.filter((item: any) => item.catogry1 == labelToMatch)
//     setParticularProductData(updatedData);
//   }

//   return (
//     <div>
//       <div>
//         <div className="fixed top-0 right-0 left-0 -z-50">
//           <Image className="w-full h-[35rem] object-cover" width={2000} height={2000} src={particularDatas.homeImageUrl ? particularDatas.homeImageUrl : "/"} alt={particularDatas.homeAltText} />
//         </div>
//         <div>
//           <div className="relative max-w-[77rem] mx-auto h-[28rem]">
//             <h2 className="text-white absolute bottom-10 text-4xl md:text-6xl ml-8 lg:ml-2">{particularDatas.homeAltText}</h2>
//           </div>
//         </div>
//         <div className={`${inter.className} py-16 w-full bg-white px-5`}>
//           <div className="gap-4 sm:gap-6 max-w-[77rem] justify-center sm:justify-start mx-auto flex flex-wrap ">
//             <div className="w-5/12 md:sm:w-2/12 lg:w-3/12 h-[32rem]">
//               <ul className="space-y-4">
//                 <li onClick={() => { filterDataCatogry1(particularDatas.NavigationData.catogryToShow) }} className="text-xl cursor-pointer focus:font-semibold" tabIndex={0}>{particularDatas.NavigationData.catogry}</li>
//                 {particularDatas.NavigationData.labels && particularDatas.NavigationData.labels.map((item: NavigationDataLabelType, index: number) =>
//                   <li key={index + 768} onClick={() => { filterData(item.catogry); }} className="hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 focus:font-semibold" tabIndex={0}>{item.label}</li>
//                 )}
//               </ul>
//             </div>
//             {particularProductData && particularProductData.map((item: ProductDataType, index: number) =>
//               <ImageChanging key={index + 98758231} item={item} items={allProductData} index={index} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import {
  NavigationDataLabelType,
  ProductDataType,
} from "@/components/typesandArrays/AllMensData";
import RealImageChangingEffect from "./RealImageChangingEffect";

const inter = Jost({ subsets: ["latin"] });

export default function AllMens({
  particularDatas,
  apiAllProductData,
  navigaitonData,
}: any) {
  const [active, setActive] = useState(1);
  const [allProductData, setallProductData] = useState(
    apiAllProductData.data1.data.collection.products.edges
  );
  const [particularProductData, setParticularProductData] = useState(
    particularDatas.productData
  );

  function filterData(labelToMatch: string) {
    if (labelToMatch == "data1") {
      setActive(1);
      setallProductData(apiAllProductData.data1.data.collection.products.edges);
    } else if (labelToMatch == "data2") {
      setActive(2);
      setallProductData(apiAllProductData.data2.data.collection.products.edges);
    } else if (labelToMatch == "data3") {
      setActive(3);
      setallProductData(apiAllProductData.data3.data.collection.products.edges);
    } else if (labelToMatch == "data4") {
      setActive(4);
      setallProductData(apiAllProductData.data4.data.collection.products.edges);
    } else if (labelToMatch == "data5") {
      setActive(5);
      setallProductData(apiAllProductData.data5.data.collection.products.edges);
    } else if (labelToMatch == "data6") {
      setActive(6);
      setallProductData(apiAllProductData.data6.data.collection.products.edges);
    }
  }

  return (
    <div>
      <div>
        <div className="fixed top-0 right-0 left-0 -z-50">
          <Image
            className="w-full h-[35rem] object-cover"
            width={2000}
            height={2000}
            src={
              particularDatas.homeImageUrl ? particularDatas.homeImageUrl : "/"
            }
            alt={particularDatas.homeAltText}
          />
        </div>
        <div>
          <div className="relative max-w-[77rem] mx-auto h-[28rem]">
            <h2 className="text-white absolute bottom-10 text-4xl md:text-6xl ml-8 lg:ml-2">
              {particularDatas.homeAltText}
            </h2>
          </div>
        </div>
        <div className={`${inter.className} py-16 w-full bg-white px-5`}>
          <div className="gap-4 sm:gap-6 max-w-[77rem] justify-center sm:justify-start mx-auto flex flex-wrap">
            <div className="w-5/12 md:sm:w-2/12 lg:w-3/12 h-[32rem]">
              <ul className="space-y-4">
                <li
                  onClick={() => {
                    filterData("data1");
                  }}
                  className={`text-xl cursor-pointer ${
                    active == 1 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {navigaitonData[0]}
                </li>
                <li
                  onClick={() => {
                    filterData("data2");
                  }}
                  className={`hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${
                    active == 2 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {navigaitonData[1]}
                </li>
                <li
                  onClick={() => {
                    filterData("data3");
                  }}
                  className={`hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${
                    active == 3 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {navigaitonData[2]}
                </li>
                <li
                  onClick={() => {
                    filterData("data4");
                  }}
                  className={`hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${
                    active == 4 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {navigaitonData[3]}
                </li>
                <li
                  onClick={() => {
                    filterData("data5");
                  }}
                  className={`hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${
                    active == 5 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {navigaitonData[4]}
                </li>
                <li
                  onClick={() => {
                    filterData("data6");
                  }}
                  className={`hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${
                    active == 6 ? "font-semibold" : "font-medium"
                  }`}
                  tabIndex={0}
                >
                  {navigaitonData[5]}
                </li>
              </ul>
            </div>
            {allProductData.map((subItem: any, index: number) => (
              <RealImageChangingEffect
                key={index}
                subItem={subItem}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
