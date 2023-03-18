import {useState} from "react"
import Image from "next/image";

export default function ImageChanging({ item ,index }: any) {

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (

        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={index + 435} className="group relative flex flex-col space-y-2 w-6/12 sm:w-[23%]">
            {isHovering ? (
                <Image className="h-3/4 object-cover" width={500} height={500} src={item.imageUrl2} alt={item.imageAlt} />
            ) : (
                <Image className="h-3/4 object-cover" width={500} height={500} src={item.imageUrl} alt={item.imageAlt} />
            )}
            <div className={`${item.banner ? "block" : "hidden"} absolute -top-2 right-0 py-[0.10rem] text-sm px-4 text-center ${item.bannerColor} text-white`}>{item.banner}</div>
            <div className="invisible absolute -top-7 -right-3 w-16 h-16 bg-[#111111] text-white rounded-full group-hover:visible flex opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 leading-4 items-center text-center">Quick view</div>
            <h3 className="text-gray-800">{item.name}</h3>
            <p className="text-gray-800">{item.price}</p>
            <div className="flex space-x-3">
                <p className="text-xs">{item.reviewPerson}</p>
            </div>
            <div className="flex space-x-2">
                {item.availableColours && item.availableColours.map((item: any, index: number) =>
                    <div key={index + 956} className={`w-4 h-4 ${item}`}></div>
                )}
            </div>
        </div>
    )
}