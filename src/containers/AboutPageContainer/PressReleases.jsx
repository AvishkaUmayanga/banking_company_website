import React from 'react'
import { pressData } from '../../data/PressReleasesData'

export default function PressReleases() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center text-mainYellow'>Press Releases</h1>
        <p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
      </div>
      <div className='grid gap-6 md:grid-cols-2 xl:gap-10 2xl:gap-14'>
        {pressData?.map((pressReleasData, index)=>(
        <div key={index} className='flex flex-col gap-5 p-5 rounded-2xl bg-lighterGray max-md:p-3'>
          <img src={pressReleasData.imgPath} alt='press releases' className='h-[200px] max-md:h-[150px]'/>
          <h3 className='text-lg font-semibold'>{pressReleasData.title}</h3>
          <div className='flex gap-2 opacity-80'>
            <div className='px-2 bg-black rounded-full'>
              <p>Location: {pressReleasData.locationDetails}</p>
            </div>
            <div className='px-2 bg-black rounded-full'>
              <p>Date: {pressReleasData.dateDetails}</p>
            </div>
          </div>
          <p className='opacity-80'>{pressReleasData.explainDetails}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

