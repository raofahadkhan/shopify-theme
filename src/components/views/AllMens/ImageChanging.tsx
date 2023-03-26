import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageChanging({ item, index }: any) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link
      href={`/preview/${item.name.split(" ").join("-").toLowerCase()}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={index + 435}
      className="group relative flex flex-col space-y-2 w-5/12 sm:w-[23%] cursor-pointer"
    >
      {isHovering ? (
        <Image
          className="h-[24rem] object-cover"
          width={500}
          height={500}
          src={item.imageUrl2}
          alt={item.imageAlt}
        />
      ) : (
        <Image
          className="h-[24rem] object-cover"
          width={500}
          height={500}
          src={item.imageUrl}
          alt={item.imageAlt}
        />
      )}
      <div
        className={`${
          item.banner ? "block" : "hidden"
        } absolute -top-2 right-0 py-[0.10rem] text-sm px-4 text-center ${
          item.bannerColor
        } text-white`}
      >
        {item.banner}
      </div>
      <div className="invisible absolute -top-7 -right-3 w-16 h-16 bg-[#111111] text-white rounded-full group-hover:visible flex opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 leading-4 items-center text-center">
        Quick view
      </div>
      <h3 className="text-xl font-normal font-sans text-gray-800">
        {item.name}
      </h3>
      <p className="text-gray-800">${item.price}</p>
      <div className="flex space-x-3">
        {item.reviews && (
          <Image width={70} height={50} src={item.reviews} alt="Reviews" />
        )}
        <p className="text-xs">{item.reviewPerson}</p>
      </div>
      <div className="flex space-x-2">
        {item.availableColours &&
          item.availableColours.map((item: string[], index: number) => (
            <div key={index + 956} className={`w-4 h-4 ${item}`}></div>
          ))}
      </div>
    </Link>
  );
}
