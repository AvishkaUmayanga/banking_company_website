import React from 'react'

const AskedBox = ({title,description}) => {
  return (
    <div className='flex flex-col gap-5 p-5 rounded-lg border-lg bg-lighterGray '>
      <div className='pb-3 text-lg font-semibold border-b ' style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AskedBox