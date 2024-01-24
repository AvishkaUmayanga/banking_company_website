import React from 'react'

const IconTitle = ({icon:IconComponent,title,}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 rounded-lg  bg-darkGray xl:w-[200px] xl:h-[150px] md:w-[150px] md:h-[120px] text-center p-1 w-[150px] h-[120px] '>
      {IconComponent && (<IconComponent className='p-1 text-white rounded-full w-[25px] h-[25px] bg-mainYellow bg-gradient-to-t xl:w-[30px] xl:h-[30px] from-mainYellow to-lightYellow'/>)}
      <p >{title}</p> 
    </div>
  )
}

export default IconTitle