"use client"
import Image from "next/image";
import { useState } from "react";
import { ImageData, ImageDataType } from "@/components/typesandArrays/GridImageData";

export default function ImageHoverEffect() {
    let [scalingAnimation, setScalingAnimation] = useState("scale-125");

    const isBrowser = (): boolean => typeof window !== "undefined";

    if (isBrowser()) {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 200) {
                setScalingAnimation("scale-100");
            } else {
                setScalingAnimation("scale-125");
            }
        })
    }


    return (
        <div className="w-full px-5 py-6 sm:p-12">
            <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
                {/* This is dynamic */}
                {ImageData.map((item: ImageDataType, index: number) =>
                    <div key={index + 2} className={`${item.colSpan} ${item.TabColStart} ${item.TabColSpanEnd} overflow-hidden cursor-pointer relative group w-full`}>
                        <Image src={item.imageUrl} className={`${item.maxHeight ? "max-h-80 object-cover" : "image-prop"} ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                        <div className="dullness"></div>
                        <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                            <h2>
                                {item.label}
                            </h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
