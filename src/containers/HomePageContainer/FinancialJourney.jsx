import React from 'react'
import YellowButton from '../../components/YellowButton'

export default function FinancialJourney() {
  return (
    <div className='flex items-center justify-between px-12 py-5 rounded-lg max-md:text-center bg-gradient-to-r from-lightYellow to-lighterGray max-lg:px-8 max-md:flex-col'>
      <div className='xl:w-[920px] gap-5 flex flex-col md:w-[500px] '>
        <h1 className='pb-2 text-3xl max-md:text-2xl '>Start your financial journey with <span className=' text-mainYellow'>YourBank today!</span></h1>
        <p>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
      </div>
      <div className=' max-md:mt-5'>
        <YellowButton text='Open Account'/>
      </div>
    </div>
  )
}

