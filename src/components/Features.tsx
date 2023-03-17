import Image from "next/image"
import { Feature, topFeature } from "./Databse"


interface featureType {
    id: number;
    src: string;
    title: string;
    desc: string;
}

interface topFeatureType {
    title: string;
    src: string;
}

const FeatureData: topFeatureType = topFeature;


export default function Features() {
    return (
        <>
            <div className=' mt-10'>
                <h1 className=' mx-5 text-3xl tracking-widest text-center'>{FeatureData.title}</h1>
            </div>
            <Image src={FeatureData .src} alt="" width={200} height={200} className=' m-auto mt-4'/>
            <div className="grid px-10 md:grid-cols-3 grid-cols-1 text-center max-w-[1300px] m-auto md:mt-24 mt-12 md:gap-y-28 gap-y-12 gap-x-16">
              {Feature.map((elem:featureType) => (
                <div className="" key={elem.id}>
                    <Image src={elem.src} alt="" width={90} height={200} className='m-auto'/>
                    <h1 className=" text-2xl font-extrabold mt-5">{elem.title}</h1>
                    <p className="mt-2 font-medium text-gray-700">{elem.desc}</p>
                </div>
                ))}
            </div>
        </>
    )
}
