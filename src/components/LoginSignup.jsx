import React from 'react'
import bgImage from '../assets/login&signup.png'
import { FaGoogle, FaFacebook, FaApple  } from "react-icons/fa";
import InputFields from './InputFields';

const LoginSignup = ({pageTitle, titleDesc, frogetText, yellowBtnText, grayBtnText, inputFields}) => {
  const renderInputs = () =>{
    return inputFields.map(({inputType, inputName, placeholderText},index)=>{
      return <InputFields key={index} inputType={inputType} inputName={inputName} placeholderText={placeholderText}/>
    })
  }
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-8 p-5 mt-32 text-white bg-cover' style={{ backgroundImage: `url(${bgImage})`}}>
        <div className='flex flex-col gap-3 text-center'>
          <h3 className='text-3xl font-semibold text-mainYellow'>{pageTitle}</h3>
          <p>{titleDesc}</p>
        </div>
        <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
          {renderInputs()}
        </div>
        <p>{frogetText}</p>
        <div className='w-[350px] flex flex-col gap-5 max-md:w-[250px]'>
          <button type="button" className='w-full p-2 text-black rounded-full bg-mainYellow'>{yellowBtnText}</button>
          <button type="button" className='w-full p-2 text-white rounded-full bg-lighterGray'>{grayBtnText}</button>
        </div>
        <div class="flex items-center w-[350px]">
          <div class="flex-1  border"></div>
          <span class="px-3 ">Or Continue with</span>
          <div class="flex-1 border "></div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='p-2 rounded-full bg-gradient-to-t from-lightYellow to-mainYellow'>
            <div className='p-2 rounded-full bg-lighterGray'>
              <FaGoogle className='text-mainYellow '/> 
            </div>
          </div>
          <div className='p-2 rounded-full bg-gradient-to-t from-lightYellow to-mainYellow'>
            <div className='p-2 rounded-full bg-lighterGray'>
              <FaFacebook className='text-mainYellow '/> 
            </div>
          </div>
          <div className='p-2 rounded-full bg-gradient-to-t from-lightYellow to-mainYellow'>
            <div className='p-2 rounded-full bg-lighterGray'>
              <FaApple className='text-mainYellow '/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
