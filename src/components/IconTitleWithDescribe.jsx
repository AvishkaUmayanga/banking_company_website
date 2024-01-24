import React from 'react'

const IconTitleWithDescribe = ({icon:Icon, title, description}) => {
    return (
      <div className='flex flex-col items-center justify-center gap-3 h-max p-1 text-center rounded-lg 2xl:w-[400px] py-5 md:w-[320px] lg:w-[270px] xl:w-[350px]'>
        {Icon && (<Icon className='p-[6px] text-white rounded-full w-[25px] h-[25px] bg-mainYellow bg-gradient-to-t xl:w-[30px] xl:h-[30px] from-mainYellow to-lightYellow'/>)}
        <p className='text-lg font-semibold'>{title}</p> 
        <p>{description}</p>
      </div>
    )
}

export default IconTitleWithDescribe
