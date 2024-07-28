import React from 'react'

export default function HeaderProfile() {
    return (
        <div className='py-10 text-center items-center mx-auto max-w-2xl'>
            <p>Hello! I'm</p>
            <h1 className='py-2 uppercase font-poor text-6xl px-2 lg:text-7xl'><span className='text-customSecond'>andi</span> aji saputra</h1>
            <h3 className='uppercase text-2xl lg:text-4xl font-semibold text-customSecond'>front end developer</h3>
            <p className='mt-3 text-sm'>
                My mission is to design and develop websites <br /> that you and your audience love <span className='text-customSecond'>❤</span>.
            </p>
        </div>
    )
}
