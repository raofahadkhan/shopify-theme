import React from 'react'

export default function YtVideo() {
    return (
        <div>
            <h3 className=' text-xl font-bold text-center my-10'>Video guides</h3>
                <div className=''>
                    <object
                        className=' w-[60%] h-[461.25px] float: none; clear: both; margin: m-auto'
                        data="https://www.youtube.com/embed/L08ar8JHqQY">
                    </object>
                </div>
                <h3 className='text-gray-700 text-center my-10 after:block'>View more guides on our <span className='text'>YouTube channel</span></h3>
        </div>
    )
}
