import React from 'react'
import CardService from './CardService'

export default function MyService() {
  return (
    <div className='bg-customPrimary pb-20 lg:px-16'>
      <h1 className='font-poor text-6xl text-center lg:text-start text-customSecond lg:text-8xl py-8 lg:py-10'>My Service</h1>
      <CardService />
    </div>
  )
}
