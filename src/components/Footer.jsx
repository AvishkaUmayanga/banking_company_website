import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='flex flex-col items-center gap-5 px-8 py-8 text-white bg-lighterGray mt-[150px] max-md:gap-3 max-md:px-3'>
      <div className='flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center justify-center gap-3 max-md:pr-4 '>
          <div className='flex items-center justify-center gap-3 '>
            <CiBank className=' text-mainYellow'/>
            <p>YourBank</p>
          </div>
          <ul className='flex gap-4 '>
            <Link to='/'><li>Home</li></Link>
            <Link to='/careers'><li>Careers</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/security'><li>Security</li></Link>
          </ul>
        </div>
        <div className='flex flex-wrap justify-center gap-4 py-5 border-y ' style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
          <div className='flex items-center gap-1'>
            <MdEmail className=' text-mainYellow'/>
            <p>help@yourbank.com</p>
            </div>
          <div className='flex items-center gap-1'>
            <MdCall className=' text-mainYellow'/>
            <p>+94 764009627</p>
          </div>
          <div className='flex items-center gap-1'>
            <MdLocationOn className=' text-mainYellow'/>
            <p>Badulla, Sri lanka</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full px-5 py-1 rounded-full bg-darkGray max-md:px-2 max-md:justify-center max-md:gap-3 max-sm:rounded-xl max-sm:flex-col max-sm:mt-5'>
        <div className='flex gap-3 text-black rounded-full max-sm:-translate-y-1/2'>
          <FaFacebookF className=' bg-mainYellow w-[25px] h-[25px] rounded-full p-1'/>
          <FaXTwitter className=' bg-mainYellow w-[25px] h-[25px] rounded-full p-1'/>
          <FaLinkedinIn className=' bg-mainYellow w-[25px] h-[25px] rounded-full p-1'/>
        </div>
        <div>
          <h4 className='text-white '>YourBank  All Right Reserved</h4>
        </div>
        <div>
          <h4 className='text-white '>Privacy Policy | Terms of Service</h4>
        </div>
      </div>
    </div>
  )
}
