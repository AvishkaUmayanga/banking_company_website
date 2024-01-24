import React from 'react'
import YellowButton from '../../components/YellowButton'
import IconTitleWithDescribe from '../../components/IconTitleWithDescribe'
import { FaCalendarCheck } from "react-icons/fa";
import { BsFillSave2Fill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

export default function OurProducts() {
  return (
    <div className='flex flex-col gap-5 text-white '>
      <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>Our <span className=' text-mainYellow'>Products</span></h1>
      <div className='flex items-center justify-between gap-5 max-lg:flex-col'>
        <div className=' 2xl:w-[800px] xl:w-[700px] lg:w-[500px]'>
          <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
        </div>
        <div className=' bg-lighterGray flex items-center py-1 rounded-full text-sm px-2 h-[50px] gap-3'>
          <YellowButton text=" For Individuals "/>
          <button className='px-3 text-white duration-300 rounded-full hover:py-1 hover:text-black hover:bg-mainYellow hover:scale-110'>For Business</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-5 mt-10 xl:justify-between'>
        <IconTitleWithDescribe icon={FaCalendarCheck} title='Checking Accounts' description='Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.'/>
        <IconTitleWithDescribe icon={BsFillSave2Fill} title='Savings Accounts' description='Build your savings with our competitive interest rates and flexible savings account options. Whether you are saving for a specific goal or want to grow your wealth over time, we have the right account for you.'/>
        <IconTitleWithDescribe icon={AiFillHome} title='Loans and Mortgages' description='Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.'/>
      </div>
    </div>
  )
}
