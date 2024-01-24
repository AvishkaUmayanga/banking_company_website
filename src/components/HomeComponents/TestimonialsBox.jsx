import React from 'react'
import { VscQuote } from "react-icons/vsc";

const TestimonialsBox = () => {
  return (
    <div className='flex flex-col items-center p-2 mx-5 text-center border rounded-lg text-mainYellow ' style={{ borderColor: 'rgba(202, 255, 51, 0.4)' }}>
      <VscQuote className='text-3xl '/>
      <p className='text-white '>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
      <p>John D</p>
    </div>
  )
}

export default TestimonialsBox
