import React from 'react'
import { serviceItems } from '../../utils/data'
import { Link } from 'react-scroll';
import './MyService.css'

export default function CardService() {
    const cardItems = serviceItems();

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mt-10 transition-all duration-500'>
            {cardItems.map((item) => (
                <div key={item.id} className='group relative bg-customThird w-72 h-80 p-5 rounded-lg shadow shadow-white duration-300 hover:shadow-md hover:shadow-customSecond'>
                    <div className='flex flex-col w-full h-60 items-center mt-10'>
                        <h2 className='text-customSecond text-2xl font-semibold pt-10 pb-5'>{item.title}</h2>
                        <div className='h-full text-center flex flex-col justify-between items-center px-2'>
                            <p className='text-white'>{item.desc}</p>
                            <Link to={item.target} activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className='w-40 py-2 bg-white font-semibold rounded-lg duration-300 cursor-pointer hover:bg-customSecond' >Learn More</Link>
                        </div>
                    </div>
                    <div className='absolute flex items-center justify-center left-0 top-0 bg-customSecond w-full h-full rounded-lg transition-all duration-500 group-hover:w-20 group-hover:h-20 card-face'>
                        <item.icon className={`text-9xl transition-all duration-500 group-hover:text-5xl ${item.animateCard ? 'animate-spin-slow group-hover:animate-none' : ''}`} />
                    </div>
                </div>
            ))}
        </div>
    )
}
