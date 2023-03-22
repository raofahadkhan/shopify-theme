import { YtSection } from "./Databse"

interface YtType {
    title: string,
    desc: string,
    YtVideo: string
}

const YtData: YtType = YtSection;

export default function YtVideo() {
    return (
        <div>
            <h3 className=' text-xl font-bold text-center my-10'>{YtData.title}</h3>
            <div className=''>
                <object
                    className=' w-[60%] h-[461.25px] float: none; clear: both; margin: m-auto'
                    data={YtData.YtVideo}>
                </object>
            </div>
            <h3 className='text-gray-700 text-center my-10 after:block'>{YtData.desc}</h3>
        </div>
    )
}
