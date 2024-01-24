import React, { useEffect } from 'react'
import HeaderWithImage from '../components/HeaderWithImage'
import aboutImg from '../assets/aboutImage.png'
import MissionAndVision from '../containers/AboutPageContainer/MissionAndVision'
import PressReleases from '../containers/AboutPageContainer/PressReleases'

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" px-[80px] max-lg:px-[35px] max-md:px-6 mt-32 text-white flex flex-col max-xs:px-4 gap-[150px] xl:gap-[200px]">
      <HeaderWithImage
         titlePart1='Where Banking Meets' titlePart2='Excellence!' 
         description='At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.'
         imgPath={aboutImg}
      />
      <MissionAndVision/>
      <PressReleases/>
    </div>
  )
}
