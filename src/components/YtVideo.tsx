import React from 'react'

export default function YtVideo() {
    return (
        <div>
            <h3 className=' text-xl font-bold text-center my-10'>Video guides</h3>
                <div className=''>
                    {/* <embed
                        src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1&autoplay=1"
                        wmode="transparent"
                        type="video/mp4"
                        width="100%" height="100%"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                        title="Keyboard Cat"
                    /> */}
                    <object
                        className='amx-w-[820px] w-[60%] h-[461.25px] float: none; clear: both; margin: m-auto'
                        data="https://www.youtube.com/embed/L08ar8JHqQY">
                    </object>
                    {/* <iframe className='' src="https://www.youtube.com/embed/L08ar8JHqQY" width={800} height={475} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                </div>
                <h3 className='text-gray-700 text-center my-10'>View more guides on our <span className='text'>YouTube channel</span></h3>
        </div>
    )
}
