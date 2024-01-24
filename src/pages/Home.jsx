import React, { useEffect } from 'react'
import Header from '../containers/HomePageContainer/Header';
import OurProducts from '../containers/HomePageContainer/OurProducts';
import UseCases from '../containers/HomePageContainer/UseCases';
import OurFeatures from '../containers/HomePageContainer/OurFeatures';
import AskedQuestions from '../containers/HomePageContainer/AskedQuestions';
import OurTestimonials from '../containers/HomePageContainer/OurTestimonials';
import FinancialJourney from '../containers/HomePageContainer/FinancialJourney';

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className=" px-[80px] max-lg:px-[35px] max-md:px-6 mt-32 text-white flex flex-col max-xs:px-4 gap-[150px] xl:gap-[200px]">
      <Header/>
      <OurProducts/>
      <UseCases/>
      <OurFeatures/>
      <AskedQuestions/>
      <OurTestimonials/>
      <FinancialJourney/>
    </div>
  )
}
