import React from 'react'
import { Link } from 'react-scroll'

export default function Logo() {
    return (
        <div className='w-1/5 text-start'>
            <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className='font-piedra text-5xl cursor-pointer'>A</Link>
        </div>
    )
}
