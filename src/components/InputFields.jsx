import React from 'react'

const InputFields = ({inputType, inputName, placeholderText}) => {
  return (
    <div className='border rounded-full bg-darkGray border-mainYellow border-opacity-30' >
      <input type={inputType} name={inputName} placeholder={placeholderText} className='px-5 py-1 rounded-full outline-none bg-darkGray' />
    </div>
  )
}

export default InputFields
