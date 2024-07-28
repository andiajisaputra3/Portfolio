import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function AboutSosmed() {
    return (
        <div className='w-32 mt-5 text-center'>
            <h3 className='text-lg xl:text-2xl font-semibold pb-2'>Follow Me</h3>
            <a href="https://www.instagram.com/andiasaputra/" target='_blank' rel='noopener noreferrer' className='group flex justify-center items-center content-center gap-2 py-2 xl:text-lg font-semibold border-y-2 border-customPrimary hover:text-customSecond'>
                Instagram <MdArrowOutward className='transition-transform duration-300 group-hover:rotate-45' />
            </a>
        </div>
    )
}
