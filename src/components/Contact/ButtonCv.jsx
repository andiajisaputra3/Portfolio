import React from 'react'

export default function ButtonCv() {
    return (
        <div className='mt-7 w-full lg:w-44 h-12 '>
            <a href="/assets/CV.pdf" download="CV_Andi_Aji_Saputra.pdf" className='link-cv group relative block w-full h-full text-center items-center content-center border-2 border-customPrimary font-semibold rounded-md overflow-hidden transition duration-500 cursor-pointer outline-none hover:border-white'>
                <button type="button" className='btn-cv relative transition duration-500 group-hover:text-white'>Download CV</button>
            </a>
        </div>
    )
}
