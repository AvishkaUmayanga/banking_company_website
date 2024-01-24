import React from 'react'

const YellowButton = ({text}) => {
  return (
    <button className='px-3 py-1 text-black duration-300 rounded-full bg-mainYellow hover:scale-110 '>{text}</button>
  )
}

export default YellowButton