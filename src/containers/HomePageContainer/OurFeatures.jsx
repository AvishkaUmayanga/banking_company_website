import React from 'react'
import FeaturesBox from '../../components/HomeComponents/FeaturesBox'

export default function OurFeatures() {
  return (
    <div className='flex flex-col gap-8 text-white '>
      <div className=' max-w-[900px] max-sm:text-center'>
        <h1 className='pb-2 text-3xl max-md:text-2xl max-lg:text-center'>Our <span className=' text-mainYellow'>Features</span></h1>
        <p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
      </div>
      <div className='flex gap-5 max-lg:items-center xl:gap-16 lg:gap-10 max-lg:flex-col '>
        <div className='flex flex-col gap-5 rounded-lg bg-lighterGray w-max h-max p-7 max-lg:flex-row max-lg:rounded-full max-md:flex-col max-md:rounded-lg'>
          <button className='w-[150px] py-1 duration-500 bg-darkGray border-opacity-50 rounded-full text-mainYellow hover:text-black hover:bg-mainYellow '>Online Banking</button>
          <button className='w-[150px] py-1 text-white duration-500 border border-opacity-50 rounded-full hover:text-black hover:bg-mainYellow '>Financial Tools</button>
          <button className='w-[150px] py-1 text-white duration-500 border border-opacity-50 rounded-full hover:text-black hover:bg-mainYellow '>Customer Support</button>
        </div>
        <div className='grid w-full grid-cols-2 grid-rows-2 gap-4 max-sm:grid-cols-1'>
          <FeaturesBox title='24/7 Account Access' description='Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'/>
          <FeaturesBox title='Mobile Banking App' description='Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'/>
          <FeaturesBox title='Secure Transactions' description='Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'/>
          <FeaturesBox title='Bill Pay and Transfers' description='Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'/>
        </div>
      </div>
    </div>
  )
}
