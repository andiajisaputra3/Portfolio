import React from 'react'
import { sosmedIcons } from '../../utils/data';

export default function IconsContact() {
    const iconSosmed = sosmedIcons();

    return (
        <div className='mt-12'>
            <h2 className='text-center font-semibold text-2xl underline underline-offset-8 tracking-wide pb-4'>Follow Me</h2>
            <ul className='flex justify-center items-center gap-5 py-4 px-2'>
                {iconSosmed.map((item) => (
                    <li key={item.id} className='flex justify-center items-center w-11 h-11'>
                        <a href={item.target} target='_blank' rel="noopener noreferrer" className='icon-contact relative w-full h-full flex justify-center items-center text-2xl rounded-full border-solid border-2 border-customPrimary transition duration-500 cursor-pointer overflow-hidden hover:border-white'>
                            <item.icon className='relative text-customPrimary transition duration-500 rotate-y-360' />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
