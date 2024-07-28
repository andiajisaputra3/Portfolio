import React from 'react';
import HeaderProfile from './HeaderProfile';
import HeaderIcons from './HeaderIcons';
import HeaderTime from './HeaderTime';
import HeaderFreelance from './HeaderFreelance';

export default function Header() {

    return (
        <div className='w-full bg-customPrimary lg:pt-10 pb-16 text-white'>
            <HeaderProfile />
            <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center w-full mt-8 lg:px-16 lg:mt-24'>
                <HeaderIcons />
                <HeaderTime />
                <HeaderFreelance />
            </div>
        </div>
    )
}
