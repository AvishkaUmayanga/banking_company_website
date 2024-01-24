import React from 'react'
import { protectData } from '../../data/ProtectData'

export default function HowWeProtect() {
  return (
    <div>
      <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>How We <span className=' text-mainYellow'>Protect You</span></h1>
        <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
      </div>
      <div className='grid grid-cols-2 p-8 bg-darkGray gap-x-5 max-md:grid-cols-1 lg:gap-x-8 gap-y-10 max-md:p-5'>
        {protectData?.map(({Icon,title,description},index)=>(
          <div key={index} className='flex flex-col gap-4 px-4 py-6 duration-300 shadow-md rounded-xl bg-gradient-to-r from-lightYellow to-lighterGray hover:scale-105'>
            <div className='flex items-center gap-3'>
              <Icon className='rounded-full w-[25px] h-[25px] bg-gradient-to-t from-mainYellow to-lightYellow p-[6px]'/>
              <h3 className='text-xl'>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}


