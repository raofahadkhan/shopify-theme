"use client"
import Image from 'next/image';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GoPlusSmall } from 'react-icons/go';
import { RiSubtractFill } from 'react-icons/ri';
import { Jost } from 'next/font/google'


const inter = Jost({ subsets: ['latin'] })


export default function Expand({ items, sidebar, setSidebar }: any) {
    const [plusItems, setPlusItems] = useState(false);
    const [isrotate, setrotate] = useState(false)
    const [isdropdown, setDropdown] = useState(false);
    const [expandAnimation, setExpandAnimation] = useState(false);




    return (
        <div className={`rounded-sm border-b-2 w-full ${isdropdown ? `${items.heightToDisplay === 60 ? "h-[60rem]" : items.heightToDisplay === 52 ? "h-[52rem]" : items.heightToDisplay === 12 ? "h-[12rem]" : "0"}` : "h-16"} transition-all duration-700`}>
            <div onClick={() => {
                setrotate(!isrotate); setDropdown(!isdropdown); setTimeout(() => {
                    setExpandAnimation(!expandAnimation)
                }, 300);
            }} className="p-4 w-full cursor-pointer flex justify-between bg-white hover:bg-white active:bg-gray-200">
                <h4 className={`${inter.className}`}>{items.label}</h4>
                {items.dropdown ? <div className={`rotate-0 ${isrotate ? "rotate-180" : "rotate-0"} duration-300`}><RiArrowDropDownLine size={30} /></div> : ""}
            </div>
            <div className={`${inter.className} ${expandAnimation ? "visible" : "hidden"} pl-5`}>

                {items.child && items.child.map((item: any, index: number) => (
                    <div key={index + 800} className={`space-y-4 py-2`}>
                        <div className={`${sidebar ? "visible" : "invisible"}`}>
                            {item.firstMenu && item.firstMenu.map((subitem: any, index: number) => (
                                <div key={index + 900} className="space-y-3">
                                    <h4 className='flex '>
                                        {subitem.heading}
                                        <div className='mt-2' onClick={() => { setPlusItems(!plusItems) }}>
                                            {
                                                plusItems ?
                                                    <RiSubtractFill size={14} /> :
                                                    <GoPlusSmall />
                                            }
                                        </div>
                                    </h4>
                                    {subitem.content.map((data: any, index: number) => (
                                        <div key={index + 1000}>
                                            <h4 className={`ml-6  ${plusItems ? "visible" : "hidden"}`}>
                                                {data.label}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {item.secondMenu && item.secondMenu.map((subitem: any, index: number) => (
                                <div key={index + 900} className="space-y-3">
                                    <h4>{subitem.heading}</h4>
                                    {subitem.content.map((data: any, index: number) => (
                                        <div key={index + 1000}>
                                            <h4>
                                                <a href={data.href}>
                                                    {data.label}
                                                </a>
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={`${sidebar ? "visible" : "invisible"} space-y-3`}>
                            {item.thirdMenu && item.thirdMenu.map((subitem: any, index: number) => (
                                <div key={index + 500} className="md:w-44 lg:w-60 text-center ">
                                    {subitem.content && subitem.content.map((subsubsubItem: any, index: number) => (
                                        <div className="py-2" key={index + 600}>
                                            {subsubsubItem.image ? <Image src={subsubsubItem.image} alt="Come" /> : ""}
                                            <h3>{subsubsubItem.label}</h3>
                                        </div>
                                    )
                                    )}
                                    <h5>{subitem.heading}</h5>
                                </div>
                            ))}
                            {item.fourthMenu && item.fourthMenu.map((subitem: any, index: number) => (
                                <div key={index + 5000} className="-mt-4" >
                                    {subitem.content && subitem.content.map((subsubsubItem: any, index: number) => (
                                        <div key={index + 6000} >
                                            <h4 className='text-xl tracking-widest leading-8'>{subsubsubItem.label}</h4>
                                        </div>
                                    )
                                    )}
                                    <h5>{subitem.heading}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}