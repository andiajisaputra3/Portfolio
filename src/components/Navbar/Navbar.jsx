import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { navbarItems } from '../../utils/data';
import { PiArrowBendDownRightFill } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Navbar() {
    const navItems = navbarItems();
    const [menuOpen, setMenuOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLinkClick = () => {
        if(menuOpen) {
            toggleMenu();
        }
    }

    const handlerScroll = () => {
        if (window.scrollY > 0 ) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', handlerScroll);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
        } 
    }, [])

    return (
        <nav className={`bg-customPrimary sticky w-full top-0 text-customSecond font-poor z-50 ${sticky ? 'sticky bg-customPrimary shadow-md shadow-customSecond top-0 left-0' : 'relative'} transition-all duration-500`}>
            <div className='flex justify-between items-center h-20 transition-all duration-500 px-10 md:px-16 lg:px-24 '>
                {/* Logo Left */}
                <div className='w-1/5 text-start'>
                    <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className='font-piedra text-5xl cursor-pointer'>A</Link>
                </div>

                <div className='block content-center lg:hidden '>
                    <button onClick={toggleMenu} aria-expanded={menuOpen} aria-controls='mobile-menu' >
                        <RiMenu3Fill size={40} className='transition duration-300 hover:text-white' />
                    </button>
                </div>

                {/* Menu Center */}
                <div className='w-3/5 h-full hidden lg:flex justify-center'>
                    <ul className='flex items-center gap-5'>
                        {navItems.map((item) => (
                            <li key={item.id} className='cursor-pointer transition-all duration-300 hover:text-white'>
                                <Link to={item.target} activeClass="active" spy={true} smooth={true} offset={item.offset} duration={1000} className='text-2xl block py-2 px-4'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu Right */}
                <div className='w-1/5 h-full content-center hidden lg:flex justify-end'>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-70} className='flex items-center gap-2 text-2xl cursor-pointer transition-all duration-300 hover:text-white'><PiArrowBendDownRightFill /> Let's Talk</Link>
                </div>
            </div>

            {/* Mobile Menu */}
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
        </nav >
    )
}
