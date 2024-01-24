import React, { useEffect } from 'react'
import securityImg from '../assets/securityImage.png'
import HeaderWithImage from '../components/HeaderWithImage'
import HowWeProtect from '../containers/SecurityPageContainer/HowWeProtect'
import AskedQuestions from '../containers/HomePageContainer/AskedQuestions'

export default function Security() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className=" px-[80px] max-lg:px-[35px] max-md:px-6 mt-32 text-white flex flex-col max-xs:px-4 gap-[150px] xl:gap-[200px]">
      <HeaderWithImage
         titlePart1='Your Security is' titlePart2='Our Top Priority' 
         description='At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.'
         imgPath={securityImg}
      />
      <HowWeProtect/>
      <AskedQuestions/>
    </div>
  )
}
