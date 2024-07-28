import React from 'react'
import { PiArrowBendUpLeftFill } from "react-icons/pi";
import { sosmedIcons } from '../../utils/data';
import './Header.css'

export default function HeaderIcons() {
    const items = sosmedIcons();

    return (
        <div className='lg:w-1/4 flex justify-center gap-4 py-4 '>
            <div className='relative w-32 lg:w-3/5 flex gap-2 '>
                {items.map((item) => (
                    <a key={item.id} href={item.target} target={item.target.startsWith('#') ? '_self' : '_blank'} rel='noopener noreferrer' className='link-header group flex justify-center w-full h-full text-3xl text-white cursor-pointer hover:text-customSecond z-10'>
                        <item.icon className='icon-header transition-all duration-500' />
                    </a>
                ))}
            </div>
            <div className='lg:flex flex-col hidden w-2/5 md:w-1/2'>
                <PiArrowBendUpLeftFill className='text-3xl' />
                <p>Get started</p>
            </div>
        </div>
    )
}
