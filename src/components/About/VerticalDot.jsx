import React from 'react'

export default function VerticalDot() {
    return (
        <div className='absolute hidden left-1/2 w-1 h-full lg:flex flex-col justify-around items-center bg-customPrimary rounded-full'>
            {[...Array(4)].map((_, index) => (
                <div key={index} className={`bg-customSecond w-5 h-5 rounded-full ${index === 0 ? '-mt-5' : index === 2 ? 'mt-10' : index === 3 ? 'mt-11' : 'mt-5' }`}></div>
            ))}
        </div>
    )
}
