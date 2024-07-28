import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { IoIosSend } from "react-icons/io";
import './Contact.css'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ykpv1n4',
            'template_2k4s9oz',
            form.current, {
                publicKey: 'uSq7gBCPTHQT-DHQN',
        }).then((result) => {
            console.log('SUCCESS!', result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
                confirmButtonText: 'OK'
            });
            setName('');
            setEmail('');
            setMessage('');
            form.current.reset();
        },
            (error) => {
                console.log('FAILED...', error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Send Failed',
                    text: 'Oops! Something went wrong. Please try again later.',
                    confirmButtonText: 'OK'
                });
            },
        );
    };
    return (
        <div className='w-full py-10 px-20 bg-customPrimary'>
            <h1 className='font-poor mb-3 text-6xl text-center lg:text-start lg:text-7xl text-customSecond'>Send a Message</h1>
            <form ref={form} className='py-8' onSubmit={handleSubmit}>
                <div className="my-5">
                    <div className="input-data relative w-full h-10 mt-7 text-white">
                        <input type="text" name="from_name" value={name} onChange={(e) => (setName(e.target.value))} className='block w-full h-full border-b-2 border-white bg-transparent outline-none' required />
                        <div className="underline absolute bottom-0 w-full h-1"></div>
                        <label className='absolute bottom-2 transition-all duration-300 ease-in-out pointer-events-none'>Full Name</label>
                    </div>
                    <div className="input-data relative w-full h-10 mt-7 text-white">
                        <input type="text" name="from_email" value={email} onChange={(e) => (setEmail(e.target.value))} className='block w-full h-full border-b-2 border-white bg-transparent outline-none' required />
                        <div className="underline absolute bottom-0 w-full h-1"></div>
                        <label className='absolute bottom-2 transition-all duration-300 ease-in-out pointer-events-none'>Email</label>
                    </div>
                    <div className="input-data textarea relative w-full h-36 mt-7 text-white">
                        <textarea rows="8" cols="80" name="message" value={message} onChange={(e) => (setMessage(e.target.value))} className='block w-full h-full border-b-2 border-white bg-transparent outline-none resize-none pt-3' required />
                        <div className="underline absolute bottom-0 w-full h-1"></div>
                        <label className='absolute top-3 w-full transition-all duration-300 ease-in-out pointer-events-none'>Write your message</label>
                    </div>
                    <div className='mt-7'>
                        <button type='submit' className='btn-form relative flex justify-center items-center text-white font-semibold gap-2 w-40 h-14 rounded-md border-2 border-solid border-white overflow-hidden tracking-wide transition-all duration-500 hover:text-customPrimary hover:border-customPrimary '>
                            <span className='text-content'>Send</span> <IoIosSend className='text-3xl' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
