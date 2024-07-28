import React from 'react'
import DetailProfile from './DetailProfile'
import ProfileImage from './ProfileImage'
import CardAbout from './CardAbout'

export default function About() {
    return (
        <div className='pb-20'>
            <h1 className='font-poor text-center text-6xl lg:text-8xl py-8 lg:py-10'>About</h1>
            <div className='relative px-10 lg:px-20'>
                <DetailProfile />
                <ProfileImage />
            </div>
            <CardAbout />
        </div>
    )
}
