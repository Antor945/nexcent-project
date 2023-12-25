import React from 'react'
import pana from '../../assets/pana.png'

const Design = () => {
    return (
        <div className=' max-w-container mx-auto mt-[48px] mb-[48px]'>
            <div className='md:flex flex-wrap items-center justify-between'>
                <div className='md:w-5/12'>
                    <div>
                        <picture className='flex md:justify-start justify-center'>
                            <img src={pana} alt="" />
                        </picture>
                    </div>
                </div>
                <div className='md:w-6/12 text-center'>
                    <div>
                        <h2 className='text-halka font-semibold font-inter text-4xl mb-4'>
                            How to design your site footer like we did
                        </h2>
                        <p className='text-[#717171] font-medium text-sm font-inter mb-8'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
                            elit erat a magna. Donec quis erat at libero ultrices mollis.
                            In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                            at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                            non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                            efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit
                            venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <div>
                            <a href="" className='px-8 py-[14px] bg-green text-white rounded-md text-[16px]
                        font-medium'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design