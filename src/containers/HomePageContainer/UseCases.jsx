import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import FourBoxGrid from '../../components/HomeComponents/FourBoxGrid';
import { BsBuildingsFill } from "react-icons/bs";
import { RiCashLine } from "react-icons/ri";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import PercentageWithdes from '../../components/HomeComponents/PercentageWithdes';
import { IndividualsData } from '../../data/ForIndividuals';
import { BusinessData } from '../../data/ForBusiness';

export default function UseCases() {
  return (
    <div className='flex flex-col gap-10 text-white '>
      <div>
        <h1 className='pb-2 text-3xl text-mainYellow max-md:text-2xl max-lg:text-center'>Use Cases</h1>
        <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
      </div>
      <div className='flex justify-between gap-16 md:gap-10 lg:gap-20 max-md:flex-col-reverse'>
        <FourBoxGrid
          icon1={GiReceiveMoney} title1='Managing Personal Finances'
          icon2={SiFuturelearn} title2='Saving for the Future'
          icon3={TiHome} title3='Homeownership'
          icon4={FaBookOpen} title4='Education Funding'
        />
        <div className='lg:w-[500px] md:w-[320px] flex flex-col gap-7 '>
          <div>
            <h2 className='mb-4 text-2xl font-semibold max-md:text-xl'>For Individuals</h2>
            <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
          </div>
          <div className='flex flex-wrap xl:gap-4'>
            {IndividualsData.map(({percent,desc},index)=>(
              <PercentageWithdes key={index} percentage={percent} perDescription={desc}/>
            ))}
          </div>
          <div>
            <button className='px-3 py-1 duration-300 rounded-full hover:scale-110 bg-lighterGray'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='flex justify-between lg:gap-20 md:gap-10 max-md:flex-col'>
        <div className='lg:w-[500px] md:w-[320px] flex flex-col gap-7 md:-translate-y-1/3 relative xl:translate-y-0 '>
          <div>
            <h2 className='mb-4 text-2xl font-semibold max-md:text-xl'>For Businesses</h2>
            <p>For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
          </div>
          <div className='relative flex flex-wrap xl:gap-4'>
            {BusinessData.map(({percent,desc},index)=>(
              <PercentageWithdes key={index} percentage={percent} perDescription={desc}/>
            ))}
          </div>
          <div>
            <button className='px-3 py-1 duration-300 rounded-full max-md:mb-5 hover:scale-110 bg-lighterGray'>Learn More</button>
          </div>
        </div>
        <FourBoxGrid
          icon1={BsBuildingsFill} title1='Startups and Entrepreneurs'
          icon2={RiCashLine} title2='Cash Flow Management'
          icon3={HiMiniPresentationChartBar} title3='Business Expansion'
          icon4={AiFillDollarCircle} title4='Payment Solutions'
        />
      </div>
    </div>
  )
}
