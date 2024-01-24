import React from 'react'
import { ValuesData } from '../../data/ValuesData'

export default function OurValues() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>Our <span className=' text-mainYellow'>Values</span></h1>
        <p>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
      </div>
      <div className='grid grid-cols-2 gap-x-5 max-md:grid-cols-1 lg:gap-x-8 gap-y-10'>
        {ValuesData?.map(({title,description},index)=>(
          <div key={index} className='flex flex-col gap-4 p-4 border-l-2 border-opacity-50 border-mainYellow'>
            <h3 className='text-3xl opacity-50 max-md:text-2xl'>{title}</h3>
            <p>{description}</p>
        </div>
        ))}
      </div>
    </div>
  )
}
 
