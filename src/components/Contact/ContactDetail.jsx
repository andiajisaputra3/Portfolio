import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import ButtonCv from './ButtonCv';
import IconsContact from './IconsContact';

export default function ContactDetail() {

    return (
        <div className='w-full px-14 lg:px-20 py-10 bg-white shadow-custom-dark lg:shadow-none'>
            <h1 className='font-poor mb-3 text-6xl text-center lg:text-start lg:text-7xl'>Let's Talk</h1>
            <p className='text-center'>I’m excited to hear from you! Drop me a message and let’s create something great together.</p>
            <div className='mt-10'>
                <div className='flex items-center gap-3 py-4 '>
                    <p><MdEmail className='text-3xl' /></p>
                    <p>:</p>
                    <p>andiajisaputra3@gmail.com</p>
                </div>
                <div className='flex items-center gap-3 py-4 '>
                    <p><FaWhatsappSquare className='text-3xl' /></p>
                    <p>:</p>
                    <p>+62 8215 7927 221</p>
                </div>
            </div>
            <ButtonCv />
            <IconsContact />
        </div>
    )
}
