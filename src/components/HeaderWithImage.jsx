import React from 'react'

const HeaderWithImage = ({titlePart1, titlePart2, titlePart3, description, imgPath}) => {
  return (
    <div className='flex justify-between gap-5 p-5 text-white rounded-lg bg-lighterGray max-lg:flex-col '>
      <div className='flex flex-col gap-2 w-[600px] 2xl:w-[500px] p-7 h-max rounded-br-[40px] max-lg:w-full items-start bg-black  shadow-md lg:translate-x-1/4 xl:w-[650px] '>
        <h1 className='text-3xl xl:text-4xl max-md:text-2xl max-lg:text-center'>{titlePart1} <span className='text-mainYellow '>{titlePart2} </span>{titlePart3}</h1>
        <p>{description}</p>
      </div>
      <div className=' w-[900px]  h-[500px] max-xl:w-[800px] max-xl:h-[400px] max-lg:w-full max-md:h-[250px] '>
        <img src={imgPath} alt="careers" className='object-cover w-full h-full rounded-xl'/>
      </div>
    </div>
  )
}

export default HeaderWithImage
