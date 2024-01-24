import React, { useState } from 'react'
import { CiBank } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import YellowButton from './YellowButton';


export default function Navbar() {
  const location = useLocation()

  const routes = [
    { path: '/',  name: 'Home' },
    { path: '/careers',  name: 'Careers' },
    { path: '/about', name: 'About' },
    { path: '/security',  name: 'Security' },
  ];

  const [isOpnen, setIsOpnen] = useState(false)

  const toggeleMenu = () =>{
    setIsOpnen(!isOpnen)
  }

  return (
    <div>
      <div className=' border-[#1E1E1E] border-2 mx-[80px] max-lg:mx-[35px] max-md:mx-6 z-50 max-md:shadow-none bg-darkGray flex justify-between items-center text-white rounded-full  p-3  shadow-lg fixed top-0 right-0 left-0 max-md:border-b-0'>
        <div className='flex items-center '>
          <CiBank className=' text-mainYellow'/>
          <p>YourBank</p>
        </div>
        <div className=' max-md:hidden'>
          <ul className='flex items-center gap-5'>
            {routes.map((route, index) => (
              <li key={index} className={location.pathname === route.path ? ' bg-lighterGray px-2 py-1 rounded-full' : ''}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-5 max-md:hidden'>
          <Link to='/signup'><button className='px-3 py-1 '>Sign Up</button></Link>
          <Link to='/login'><YellowButton text='Login'/></Link>
        </div>
        <div className=' md:hidden'>
          <HiMiniBars3BottomRight className='w-5 h-5 p-1 text-black rounded-full bg-mainYellow ' onClick={toggeleMenu}/>
        </div>
      </div>
      <div className={`${isOpnen ? ' translate-y-0 flex flex-col bg-darkGray  fixed top-0 right-0 left-0 shadow-lg text-white rounded-b-2xl py-3 mt-8' : ' translate-y-[-100%] fixed top-0 right-0 left-0' } z-40  duration-700 mx-[80px] max-lg:mx-[35px] max-md:mx-6`} >
        <ul className='flex flex-col items-center gap-5 mt-3'>
          {routes.map((route, index) => (
            <li key={index} className={location.pathname === route.path ? 'bg-[#262626] px-2 py-1 rounded-full' : ''}>
              <Link to={route.path} onClick={toggeleMenu}>{route.name}</Link>
            </li>
           ))}
           <Link to='/signup' onClick={toggeleMenu}><button className='px-3 py-1 '>Sign Up</button></Link>
           <Link to='/login' onClick={toggeleMenu}><YellowButton text='Login'/></Link>
        </ul>       
      </div>
    </div>
  )
}
