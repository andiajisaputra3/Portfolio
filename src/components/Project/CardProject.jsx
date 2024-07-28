import React from 'react'
import { projectItems } from '../../utils/data'
import { Link } from 'react-scroll'

export default function CardProject() {
  const projectsItems = projectItems()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mt-10'>
      {projectsItems.map((item) => (
        <div key={item.id} className='group relative shadow-lg shadow-customPrimary rounded-lg overflow-hidden cursor-pointer'>
          <img src={item.image} alt="Image Project" className='block w-full h-64 lg:h-72 rounded-lg transition-transform duration-500 group-hover:scale-110' />
          <div className='absolute left-0 bottom-0 h-0 bg-custom-gradient flex flex-col justify-center items-center text-center text-white px-5 transition-all duration-300 overflow-hidden group-hover:h-full'>
            <h3 className='text-2xl font-semibold mt-10 mb-5'>{item.title}</h3>
            <p className='text-sm'>{item.desc}</p>
            <Link to={item.target} activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className='w-40 py-2 mt-10 font-semibold border-2 border-customSecond rounded-md transition duration-300 hover:bg-customSecond hover:text-customPrimary' >
              Look Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
