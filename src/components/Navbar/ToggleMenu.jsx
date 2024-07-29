import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";

export default function ToggleMenu({ toggleMenu, menuOpen }) {
    return (
        <div className='block content-center lg:hidden '>
            <button onClick={toggleMenu} aria-expanded={menuOpen} aria-controls='mobile-menu' >
                <RiMenu3Fill size={40} className='transition duration-300 hover:text-white' />
            </button>
        </div>
    )
}
