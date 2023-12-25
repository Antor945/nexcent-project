import React from 'react'

import Marketing1 from '../../assets/Marketing1.png'
import Marketing2 from '../../assets/Marketing2.png'
import Marketing3 from '../../assets/Marketing3.png'

const Marketing = () => {
    return (
        <div className=' max-w-container mx-auto pt-12 '>
            <div className='md:flex flex-wrap  justify-center '>
                <div className='text-center'>
                    <h2 className='text-halka font-semibold font-inter text-4xl mb-2'>
                        Caring is the new marketing
                    </h2>
                    <p className='md:w-[628px] text-[#717171] font-medium font-inter text-base mb-4'>
                        The Nexcent blog is the best place to read about the latest membership insights,
                        trends and more. See who's joining the community, read about how our community
                        are increasing their membership income and lot's more.
                    </p>
                </div>
            </div>
            <div className='md:flex flex-wrap justify-between '>
                <div className='md:w-[32%]  '>
                    <div className='relative'>
                        <picture>
                            <img src={Marketing1} alt="" className='w-full'/>
                        </picture>
                        <div className='text-center p-4 w-[320px] shadow-2xl md:absolute bg-[#F5F7FA] ml-[30px]
                        hover:mt-[-100px] duration-1000 rounded-md'>
                            <p className='text-halka font-inter font-semibold text-xl mb-6'>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </p>
                            <div className='flex justify-center'>
                                <h2 className='flex items-center gap-3  text-xl font-semibold text-green'>
                                    Readmore
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                        <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='md:w-[32%]   '>
                    <div className='relative'>
                        <picture>
                            <img src={Marketing2} alt="" className='w-full' />
                        </picture>
                        <div className='text-center p-4 w-[320px] shadow-2xl md:absolute bg-[#F5F7FA] ml-[30px]
                        hover:mt-[-100px] duration-1000 rounded-md'>
                            <p className='text-halka font-inter font-semibold text-xl mb-6'>
                                What are your safeguarding responsibilities and how can you manage them?
                            </p>
                            <div className='flex justify-center'>
                                <h2 className='flex items-center gap-3  text-xl font-semibold text-green'>
                                    Readmore
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                        <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='md:w-[32%]   '>
                    <div className='relative'>
                        <picture>
                            <img src={Marketing3} alt="" className='w-full' />
                        </picture>
                        <div className='text-center p-4 w-[320px] shadow-2xl md:absolute bg-[#F5F7FA] ml-[30px]
                        hover:mt-[-100px] duration-1000 rounded-md'>
                            <p className='text-halka font-inter font-semibold text-xl mb-6'>
                            Revamping the Membership   Model with  in Triathlon   Australia
                            </p>
                            <div className='flex justify-center'>
                                <h2 className='flex items-center gap-3  text-xl font-semibold text-green'>
                                    Readmore
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                        <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Marketing