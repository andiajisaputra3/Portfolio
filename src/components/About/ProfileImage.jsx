import React from 'react'
import imgAbout from '/assets/image/img-about.jpg'
import DetailImage from './DetailImage'
import AboutSosmed from './AboutSosmed'

export default function AboutImage() {
    return (
        <div className='w-full'>
            <div className='flex justify-center lg:justify-end'>
                <img src={imgAbout} alt="Image About" className='w-[400px] lg:w-[550px] lg:h-[350px] xl:w-[694px] xl:h-[430px] object-fit' />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-12'>
                <div className='row-start-2 xl:row-start-1 col-end-1 lg:mt-5 xl:mt-0 xl:col-start-1 xl:col-end-3'>
                    <div className='flex justify-center'>
                        <AboutSosmed />
                    </div>
                </div>
                <div className='row-start-1 col-end-1 xl:col-start-6 xl:col-end-13'>
                    <DetailImage />
                </div>
            </div>
        </div>
    )
}
