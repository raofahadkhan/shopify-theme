import React from 'react'
import { desFeature } from './Databse'

export default function DesignFeatures() {
    return (
        <div>
            {desFeature.map((elem) => (
                <div key={elem.id}>
                    <h1 className=' text-2xl font-bold text-center'>{elem.title}</h1>
                    <div className='ml:flex text-[14px] max-w-[900px] m-auto pb-6 px-5'>
                        <h2 className='font-bold ml:w-[30%] ml:text-right text-center'>{elem.subTitie}</h2>
                        <p className=' text-gray-700 ml:pl-7 px-5 ml:w-[70%] text-center ml:text-left'>{elem.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
