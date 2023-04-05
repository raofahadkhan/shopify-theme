import { reviews } from "@/components/assets";
import Image from "next/image";
import { useState } from "react";

export default function RealImageChangingEffect({ subItem, index }: any) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className="border-4 border-yellow-200">
            < a
                href={`/preview/${subItem.node.id.split("/")[(subItem.node.id.split("/")).length - 1]}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                key={index + 435}
                className="group relative flex flex-col space-y-2 w-full sm:w-6/12 cursor-pointer"
                // className="group relative flex flex-col space-y-2 w-5/12 sm:w-[23%] cursor-pointer"
            >
                {
                    isHovering ? (
                        <Image
                            className="h-[24rem] object-cover"
                            width={500}
                            height={500}
                            src={subItem.node.images.edges[1] ? subItem.node.images.edges[1].node.url : subItem.node.images.edges[0].node.url}
                            alt={subItem.node.title}
                        />

                    ) : (
                        <Image
                            className="h-[24rem] object-cover"
                            width={500}
                            height={500}
                            src={subItem.node.images.edges[0].node.url}
                            alt={subItem.node.title}
                        />
                    )}
                <div
                    className={`${false ? "block" : "hidden"} absolute -top-2 right-0 py-[0.10rem] text-sm px-4 text-center bg-[#DA3217] text-white`}
                >
                    SAVE MONEY
                </div>
                <div className="invisible absolute -top-7 -right-3 w-16 h-16 bg-[#111111] text-white rounded-full group-hover:visible flex opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 leading-4 items-center text-center">
                    Quick view
                </div>
                <h3 className="text-xl font-normal font-sans text-gray-800">
                    {subItem.node.title}
                </h3>
                <p className="text-gray-800">{subItem.node.variants.edges[0].node.price.currencyCode == "USD" ? "$" : "Rupee"}{subItem.node.variants.edges[0].node.price.amount}</p>
                <div className="flex space-x-3">
                    <Image width={70} height={50} src={reviews} alt="Reviews" />
                    <p className="text-xs">2 Person</p>
                </div>
            </a >
        </div>
    )
}

{/* 
<div className="flex space-x-2">
{item.availableColours &&
    item.availableColours.map((item: string[], index: number) => (
        <div key={index + 956} className={`w-4 h-4 ${item}`}></div>
    ))}
</div> */}