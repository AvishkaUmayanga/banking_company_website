import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import YellowButton from '../../components/YellowButton'
import { JobData } from '../../data/JobData';

export default function JobOpening() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center text-mainYellow'>Job Opening</h1>
        <p>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
      </div>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        {JobData?.map(({jobTitle,location, department, aboutJob,reqQualification},index)=>(
          <div key={index} className='flex flex-col gap-6 p-5 lg:p-8 bg-lighterGray rounded-xl h-max'>
            <h3 className='text-xl font-semibold'>{jobTitle}</h3>
            <div className='flex gap-2 opacity-80 max-md:flex-col max-w-fit'>
              <div className='px-3 py-1 text-center bg-black rounded-full '>Location: {location}</div>
              <div className='px-3 py-1 text-center bg-black rounded-full '>Department: {department}</div>
            </div>
            <div className='flex flex-col gap-3 '>
              <h4 className='text-lg font-semibold'>About This Job</h4>
              <p className=' opacity-80'>{aboutJob}</p>
            </div>
            <div className='flex flex-col gap-3 '>
              <h4 className='text-lg font-semibold'>Requirements & Qualifications</h4>
              <div className='flex flex-col gap-1 opacity-80'>
                {reqQualification?.map((qualifications, index)=>(
                  <div key={index} className='flex items-center gap-2'>
                    <FaBriefcase/>
                    <p>{qualifications}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <YellowButton text='Apply Now'/>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}
