import React from 'react'
import CareersImg from '../../assets/careersImage.png'

export default function CareersHeader() {
  return (
    <div className='flex justify-between gap-5 p-5 text-white rounded-lg bg-lighterGray max-lg:flex-col '>
      <div className='flex flex-col gap-2 w-[600px] 2xl:w-[500px] p-7 h-max rounded-br-[40px] max-lg:w-full items-start bg-black  shadow-md lg:translate-x-1/4 xl:w-[650px] '>
        <h1 className='text-3xl xl:text-4xl max-md:text-2xl max-lg:text-center'>Welcome to <span className='text-mainYellow '>YourBank </span>Careers!</h1>
        <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
      </div>
      <div className=' w-[900px]  h-[500px] max-xl:w-[800px] max-xl:h-[400px] max-lg:w-full max-md:h-[250px]'>
        <img src={CareersImg} alt="careers" className='object-cover w-full h-full rounded-xl'/>
      </div>
    </div>
  )
}
