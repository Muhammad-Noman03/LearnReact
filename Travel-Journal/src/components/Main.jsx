import React from 'react'
import Japan from "../Images/Japan.svg"
import Location from "../Images/Location.svg"
import Sydney from "../Images/Sydney.svg"

const Main = (props) => {
    return (
        <>
            <div className='Main flex mt-10  p-4 items-center justify-center gap-5 h-[250px] w-full mx-auto'>
                <div className='image'>
                    <img src={props.img} alt={props.countryName} className='w-full h-[250px] object-cover ' />
                </div>
                <div className='main-dis h-full flex flex-col justify-center'>
                    <div className='flex gap-2 mb-2'>
                        <img src={Location} alt="location" className='w-[10px]' />
                        <p className='font-bold'>{props.countryName}</p>
                        <a className='text-gray-500 underline' href={props.mapLink} target='_blank'>View on Google Maps</a>
                    </div>
                    <h1 className='font-bold text-3xl'>{props.placeName}</h1>
                    <div className='Mountain-discription mt-6'>
                        <h2 className='font-bold text-xl mb-2'>{props.date}</h2>
                        <p className='line-clamp-4 w-[500px]'>{props.discription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main