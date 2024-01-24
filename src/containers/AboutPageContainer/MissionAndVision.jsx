import React from 'react'
import missionImg from '../../assets/mission image.png'
import visionImg from '../../assets/vision image.png'

export default function MissionAndVision() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center text-mainYellow'>Mission & Vision</h1>
        <p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
      </div>
      <div className='flex flex-col gap-16 2xl:gap-0'>
        <div className='flex items-center justify-between gap-10 max-lg:flex-col '>
          <div className='p-4 pb-0 rounded-t-2xl bg-gradient-to-r from-lightYellow to-lighterGray'>
            <img src={missionImg} alt="mission" className=' w-[700px] max-lg:w-full max-lg:h-[400px] max-md:h-[250px]'/>
          </div>
          <div className='flex flex-col gap-2 p-3 border-l border-mainYellow'>
            <h3 className='text-xl font-semibold '>Mission</h3>
            <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-10 max-lg:flex-col-reverse '>
          <div className='flex flex-col gap-2 p-3 border-r border-mainYellow'>
            <h3 className='text-xl font-semibold '>Vision</h3>
            <p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
          </div>
          <div className='p-4 pb-0 rounded-t-2xl bg-gradient-to-r from-lightYellow to-lighterGray'>
            <img src={visionImg} alt="mission" className=' w-[700px] max-lg:w-full max-lg:h-[400px] max-md:h-[250px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

