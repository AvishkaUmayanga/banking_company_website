import React from 'react'
import { MdVerified } from "react-icons/md";
import YellowButton from '../../components/YellowButton';
import { LuPlus } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import lkFlag from '../../assets/slFlag.png'
import usFlag from '../../assets/usFlag.jpg'
import { IoLogoUsd } from "react-icons/io";
import { FaEuroSign, FaYenSign } from "react-icons/fa";
import { TbCurrencyRubel } from "react-icons/tb";


export default function Header() {
  return (
    <div>
      <div className='flex justify-between max-lg:flex-col max-lg:gap-24 '>
        <div className='flex flex-col gap-6  xl:w-[600px] lg:w-[400px] 2xl:w-[700px]  w-full max-lg:items-center max-lg:text-center '>
          <div className=' flex gap-3 items-center bg-lighterGray p-1 w-[260px] justify-center rounded-full'>
            <MdVerified className= ' text-mainYellow'/>
            <p className='text-sm '>No LLC Required, No Credit Check.</p>
          </div>
          <div>
            <h1 className='text-3xl font-bold '>Welcome to YourBank <br></br>Empowering Your  <span className=' text-mainYellow'>Financial <br></br>Journey</span></h1>
          </div>
          <div>
            <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
          </div>
          <div>
            <YellowButton text=' Open Account '/>
          </div>
        </div>
        <div className='flex flex-col items-center p-3'>
          <div className= ' shadow-lg rounded-lg bg-lightYellow w-[150px] justify-center relative  z-10 -translate-y-1/2 -translate-x-[100px] max-lg:-translate-x-[280px] max-md:translate-x-[-100px]'>
            <div className='flex items-center gap-4 p-1'>
              <LuPlus className='h-[25px] w-[25px] text-black rounded-full bg-mainYellow p-1'/>
              <div>
                <p className='text-md '>+ $5000,00</p>
                <p className='text-sm '>monthly income</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col translate-y-[-40px] border p-6 bg-darkGray border-mainYellow rounded-lg border-opacity-50 max-lg:w-[600px] max-sm:w-[280px]'>
            <h2>Your Transactions</h2>
            <div className='z-10 flex items-center justify-between p-2 rounded-lg bg-lighterGray'>
              <div className='flex items-center gap-4 '>
                <GrTransaction className='h-[25px] w-[25px] text-black rounded-full bg-mainYellow p-1'/>
                <div>
                  <p className='text-sm '>Transaction</p>
                  <p>Joel Kenley</p>
                </div>
              </div>
              <div>
                <p>-$68.00</p>
              </div>
            </div>
            <div className='relative flex items-center justify-between p-2 mx-3 translate-y-[-10px] rounded-lg bg-lighterGray opacity-70'>
              <div className='flex items-center gap-4 '>
                <GrTransaction className='h-[25px] w-[25px] text-black rounded-full bg-mainYellow p-1'/>
                <div>
                  <p className='text-sm '>Transaction</p>
                  <p>Mark Smith</p>
                </div>
              </div>
              <div>
                <p>-$60.00</p>
              </div>
            </div>
            <div className='flex items-center justify-between p-2 rounded-lg mx-7 bg-lighterGray opacity-50 translate-y-[-20px] '>
              <div className='flex items-center gap-4 '>
                <GrTransaction className='h-[25px] w-[25px] text-black rounded-full bg-mainYellow p-1'/>
                <div>
                  <p className='text-sm '>Transaction</p>
                  <p>Joe Root</p>
                </div>
              </div>
              <div>
                <p>-$100.00</p>
              </div>
            </div>
            <h2>Money Exchange</h2>
            <div className='px-1 border border-opacity-50 rounded-lg bg-lighterGray'>
            <table className='w-full '>
              <tr>
                <th className='p-4 border-r border-opacity-50'>
                  <div className='flex gap-2 '>
                    <img src={lkFlag} alt="LK Flag" className='w-[25px] h-[25px] rounded-full object-fill'/>
                    <p>LKR</p>
                  </div>
                </th> 
                <th className='p-4 border-b'>
                  <div className='flex gap-2 '>
                    <img src={usFlag} alt="LK Flag" className='w-[25px] h-[25px] rounded-full object-fill'/>
                    <p>USD</p>
                  </div>
                </th>
              </tr>
              <tr>
                <th className='p-4 border-t'>5000</th>
                <th className='p-4 border-l '>15</th>
              </tr>
            </table>
            </div>
            <button type="button" className='py-1 mt-4 duration-300 rounded-full bg-lightYellow text-mainYellow hover:scale-110'>Exchange</button>
          </div>
          <div className='flex items-center p-2 text-white rounded-full translate-x-[60px] bg-lightYellow -translate-y-1/2 justify-center gap-2 max-lg:translate-x-[200px] max-md:translate-x-[50px]'>
            <div>
              <p className='text-sm '>Supported Currency</p>
            </div>
            <div className='flex gap-3 p-2 rounded-full text-mainYellow bg-darkGray'>
              <IoLogoUsd className='p-1 rounded-full bg-lighterGray w-[20px] h-[20px]'/>
              <FaEuroSign className='p-1 rounded-full bg-lighterGray w-[20px] h-[20px]'/>
              <FaYenSign className='p-1 rounded-full bg-lighterGray w-[20px] h-[20px]'/>
              <TbCurrencyRubel className='p-1 rounded-full bg-lighterGray w-[20px] h-[20px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
