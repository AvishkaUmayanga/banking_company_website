import React, { useEffect } from 'react'
import LoginSignup from '../components/LoginSignup'

export default function LoginPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const loginInputFields = [
    {inputType :'email', inputName:'enterEmail', placeholderText:'Enter your email'},
    {inputType :'password', inputName:'enterPassword', placeholderText:'Enter your password'}
  ]
  return (
    <div>
      <LoginSignup
        pageTitle='Login'
        titleDesc='Welcome back! Please log in to access your account.'
        frogetText='Forgot Password?'
        yellowBtnText='Login'
        grayBtnText='Sign Up'
        inputFields={loginInputFields}
      />
    </div>
  )
}
