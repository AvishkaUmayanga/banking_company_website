import React, { useEffect } from 'react'
import OurValues from '../containers/CareesPageContainer/OurValues';
import OurBenefits from '../containers/CareesPageContainer/OurBenefits';
import JobOpening from '../containers/CareesPageContainer/JobOpening';
import HeaderWithImage from '../components/HeaderWithImage';
import CareersImg from '../assets/careersImage.png'
import FinancialJourney from '../containers/HomePageContainer/FinancialJourney';

export default function Careers() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className=" px-[80px] max-lg:px-[35px] max-md:px-6 mt-32 text-white flex flex-col max-xs:px-4 gap-[150px] xl:gap-[200px]">
      <HeaderWithImage 
        titlePart1='Welcome to' titlePart2='YourBank' titlePart3='Careers!'
        description='Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.'
        imgPath={CareersImg}
      />
      <OurValues/>
      <OurBenefits/>
      <JobOpening/>
      <FinancialJourney/>
    </div>
  )
}
