import React from 'react'

const PercentageWithdes=({percentage,perDescription})=> {
  return (
    <div className='flex flex-col  h-[120px] justify-center  p-1 px-3 w-[150px] '>
      <h2 className='text-2xl text-mainYellow'>{percentage}</h2>
      <p className='text-sm '>{perDescription}</p>
    </div>
  )
}

export default PercentageWithdes
