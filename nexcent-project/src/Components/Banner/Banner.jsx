
import React from 'react'
import banner from '../../assets/Banner.png'
const Banner = () => {
  return (
    <>
   <div className='bg-[#F5F7FA]'>
   <div className='max-w-container mx-auto '>
      <div className='md:flex flex-wrap items-center md:py-[96px]  md:mt-[0] mt-10'>
        <div className='md:w-2/3 w-full'>
           <h2 className='text-halka md:text-[64px] text-[50px] font-bold  font-inter md:text-start text-center'>
            Lessons and insights <span className='text-[64px] font-bold text-green font-inter'>
                from 8 years</span></h2>
           <p className='mt-4 text-[#717171] font-inter font-medium text-base md:text-start text-center'>
            Where to grow your business as a photographer: site or social media?</p>
           <div className='mt-8 md:text-start text-center md:mb-0 mb-8'>
            <a href="" className='px-8 py-[14px] bg-green text-white rounded-md text-[16px]
            font-medium'>Register</a>
           </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <div>
            <picture className='flex justify-center'>
                <img src={banner} alt=""  className=''/>
            </picture>
          </div>
        </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default Banner
