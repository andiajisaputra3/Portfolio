import React from 'react'
import ContactDetail from './ContactDetail'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className='w-full'>
            <div className='flex flex-col lg:flex-row'>
                <ContactDetail />
                <ContactForm />
            </div>
        </div>
    )
}
