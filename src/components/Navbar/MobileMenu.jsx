import React from 'react'
import { Link } from 'react-scroll';
import { IoCloseCircleSharp } from "react-icons/io5";

export default function MobileMenu({ navItems, menuOpen, toggleMenu, handleLinkClick }) {
    return (
        <div className={`bg-customPrimary h-full transition-transform duration-500 ease-in-out ${menuOpen ? '-translate-x-0' : 'translate-x-full'} fixed w-full top-0 content-center py-4 lg:hidden`} aria-hidden={!menuOpen}>
            <button onClick={toggleMenu} aria-expanded={menuOpen} aria-controls='mobile-menu' className='absolute top-4 right-7' >
                <IoCloseCircleSharp size={40} className='transition duration-300 hover:text-white' />
            </button>
            <ul className='flex flex-col items-center space-y-10'>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link to={item.target} activeClass="active" spy={true} smooth={true} offset={item.offset} duration={1000} onClick={handleLinkClick} className='text-4xl cursor-pointer transition-all duration-300 hover:text-white'>
                            {item.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} className='text-4xl cursor-pointer transition-all duration-300 hover:text-white' onClick={handleLinkClick}>Let's Talk</Link>
                </li>
            </ul>
        </div>
    )
}
