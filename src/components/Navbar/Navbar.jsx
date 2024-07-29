import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { navbarItems } from '../../utils/data';
import DesktopMenu from './DesktopMenu';
import ToggleMenu from './ToggleMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const navItems = navbarItems();
    const [menuOpen, setMenuOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLinkClick = () => {
        if (menuOpen) {
            toggleMenu();
        }
    }

    const handlerScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
        }
    }, [])

    return (
        <nav className={`bg-customPrimary sticky w-full top-0 text-customSecond font-poor z-40 ${sticky ? 'sticky bg-customPrimary shadow-md shadow-customSecond top-0 left-0' : 'relative'} transition-all duration-500`} >
            <div className='flex justify-between items-center h-20 transition-all duration-500 px-10 md:px-16 lg:px-24 '>
                <Logo />
                <ToggleMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
                <DesktopMenu navItems={navItems} />
            </div>
            <MobileMenu navItems={navItems} menuOpen={menuOpen} toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />
        </nav >
    )
}
