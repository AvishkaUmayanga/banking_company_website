import React from 'react'
import YellowButton from '../../components/YellowButton'
import CarouselDiv from '../../components/Carousel'

export default function OurTestimonials() {
  return (
    <div className='flex flex-col gap-5 text-white '>
      <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>Our <span className=' text-mainYellow'>Testimonials</span></h1>
      <div className='flex items-center justify-between gap-5 max-lg:flex-col'>
        <div className=' 2xl:w-[800px] xl:w-[700px] lg:w-[500px]'>
          <p>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
        </div>
        <div className=' bg-lighterGray flex items-center py-1 rounded-full text-sm px-2 h-[50px] gap-3'>
          <YellowButton text=" For Individuals "/>
          <button className='px-3 text-white duration-300 rounded-full hover:py-1 hover:text-black hover:bg-mainYellow hover:scale-110'>For Business</button>
        </div>
      </div>
      <div className='mt-8'>
          <CarouselDiv/>
        </div>
    </div>
  )
}
