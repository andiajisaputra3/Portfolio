import React from 'react'
import { cardsItems } from '../../utils/data'

export default function CardItems({ type }) {
    const cardItems = cardsItems[type];
    const title = type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div className='py-5 bg-customPrimary rounded-md shadow-lg'>
            <h1 className='text-customSecond text-center text-2xl font-bold mb-5'>{title}</h1>
            {cardItems.map((item) => (
                <div key={item.id} className='mx-5 mt-3'>
                    <h3 className='text-customSecond font-semibold py-1 text-center lg:text-start'>{item.heading}</h3>
                    <p className='text-white text-sm text-center lg:text-start'>{item.content}</p>
                </div>
            ))}
        </div>
    )
}
