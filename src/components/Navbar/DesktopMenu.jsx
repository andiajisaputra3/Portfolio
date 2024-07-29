import React from 'react'
import { Link } from 'react-scroll'
import { PiArrowBendDownRightFill } from "react-icons/pi";

export default function DesktopMenu({ navItems }) {
    return (
        <>
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
        </>
    )
}
