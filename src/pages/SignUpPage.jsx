import React, { useEffect } from 'react'
import LoginSignup from '../components/LoginSignup'

export default function SignUpPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const signupInputFields = [
    {inputType :'text', inputName:'firstName', placeholderText:'Enter first name'},
    {inputType :'text', inputName:'lasttName', placeholderText:'Enter last name'},
    {inputType :'email', inputName:'enterEmail', placeholderText:'Enter your email'},
    {inputType :'password', inputName:'enterPassword', placeholderText:'Enter your password'},
  ]
  return (
    <div>
      <LoginSignup
        pageTitle='Sign Up'
        titleDesc='Join our community today! Create anaccount to unlock exclusive features and personalized experiences.'
        yellowBtnText='Sign Up'
        grayBtnText='Login'
        inputFields={signupInputFields}
      />
    </div>
  )
}
