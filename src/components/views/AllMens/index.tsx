import { useState } from "react"
import Image from "next/image";
import { Jost } from 'next/font/google'
import ImageChanging from "./ImageChanging";

const inter = Jost({ subsets: ['latin'] })

export default function AllMens({ particularDatas }: any) {
  const [particularProductData, setParticularProductData] = useState(particularDatas.productData);
  function filterData(labelToMatch: string) {
    let updatedData = particularDatas.productData.filter((item: any) => item.catogry2 == labelToMatch)
    setParticularProductData(updatedData);
  }
  function filterDataCatogry1(labelToMatch: string) {
    let updatedData = particularDatas.productData.filter((item: any) => item.catogry1 == labelToMatch)
    setParticularProductData(updatedData);
  }


  return (
    <div>
      <div>
        <div className="fixed top-0 right-0 left-0 -z-50">
          <Image className="w-full h-[35rem] object-cover" width={2000} height={2000} src={particularDatas.homeImageUrl ? particularDatas.homeImageUrl : "/"} alt={particularDatas.homeAltText} />
        </div>
        <div>
          <div className="relative max-w-[77rem] mx-auto h-[28rem]">
            <h2 className="absolute bottom-10 text-4xl md:text-6xl ml-8 lg:ml-0">{particularDatas.homeAltText}</h2>
          </div>
        </div>
        <div className={`${inter.className} py-16 w-full bg-white px-5`}>
          <div className="gap-2 sm:gap-6 max-w-[77rem] justify-center mx-auto flex flex-wrap ">
          {/* <div className="gap-6 flex max-w-[77rem] justify-center mx-auto flex-wrap "> */}
            <div className="w-5/12 sm:w-3/12 h-[32rem]">
              <ul className="space-y-4">
                <li onClick={() => { filterDataCatogry1(particularDatas.NavigationData.catogryToShow) }} className="text-xl font-semibold cursor-pointer">{particularDatas.NavigationData.catogry}</li>
                {particularDatas.NavigationData.labels && particularDatas.NavigationData.labels.map((item: any, index: number) =>
                  <li key={index + 768} onClick={() => { filterData(item.catogry); }} className="hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800">{item.label}</li>
                )}
              </ul>
            </div>
            {particularProductData && particularProductData.map((item: any, index: number) =>
                <ImageChanging key={index+98758231} item={item} index={index} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}