import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const FeaturesBox = ({title, description}) => {
  return (
    <div className='flex flex-col gap-5 px-5 rounded-lg border-lg bg-lighterGray py-7'>
      <div className='flex justify-between text-lg font-semibold'>
        <h3>{title}</h3>
        <MdArrowOutward className=' text-mainYellow'/>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeaturesBox

