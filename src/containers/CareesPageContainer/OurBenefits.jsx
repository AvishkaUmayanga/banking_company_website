import React from 'react'
import { benefitsData } from '../../data/BenefitsData'

export default function OurBenefits() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>Our <span className=' text-mainYellow'>Benefits</span></h1>
        <p>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
      </div>
      <div className='grid grid-cols-2 gap-x-5 max-md:grid-cols-1 lg:gap-x-8 gap-y-10'>
        {benefitsData?.map(({icon:Icons,title,description},index)=>(
          <div key={index} className='flex flex-col gap-4 px-4 py-6 rounded-tl-[35px] rounded-br-[35px] bg-gradient-to-r from-lightYellow to-lighterGray hover:scale-105 duration-300 shadow-md'>
            <div className='flex items-center gap-3'>
              <Icons className='rounded-full w-[25px] h-[25px] bg-gradient-to-t from-mainYellow to-lightYellow p-[6px]'/>
              <h3 className='text-xl'>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
        ))}
      </div>
    </div>
  )
}
