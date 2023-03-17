import { FaLongArrowAltRight } from "react-icons/fa"

export default function RightFit() {
    return (
        <div className=" border-y-[1px] border-gray-300 py-16 ml:mx-16 mx-10">
            <h1 className=" text-center md:text-3xl text-2xl font-bold">Is Motion the right fit for your store?</h1>
            <button className='group overflow-hidden text-white flex bg-[#111111] font-bold m-auto pl-[20px] py-[12px] mt-[20px] transition-all delay-300 duration-1000'>
                <span className="transition-all duration-300 group-hover:pr-[35px]">
                    Learn More
                </span>
                <FaLongArrowAltRight className="relative -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
            </button>
        </div>
    )
}
