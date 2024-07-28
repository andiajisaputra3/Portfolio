import React from 'react'
import CardItems from './CardItems'
import VerticalDot from './VerticalDot'

export default function CardAbout() {
    return (
        <div className='relative grid grid-cols-12 lg:grid-rows-1 gap-4 lg:gap-10 justify-center items-center mt-20'>
            <VerticalDot />
            <div className='col-start-3 col-end-11 lg:row-start-1 lg:col-start-3 lg:col-end-7'>
                <CardItems type="education" />
            </div>
            <div className='col-start-3 col-end-11 lg:row-start-2 lg:col-start-7 lg:col-end-11'>
                <CardItems type="experience" />
            </div>
            <div className='col-start-3 col-end-11 lg:row-start-3 lg:col-start-3 lg:col-end-7'>
                <CardItems type="certificate" />
            </div>
            <div className='col-start-3 col-end-11 lg:row-start-4 lg:col-start-7 lg:col-end-11'>
                <CardItems type="skills" />
            </div>
            
        </div>
    )
}
