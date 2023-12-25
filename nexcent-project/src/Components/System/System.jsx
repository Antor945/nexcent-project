import React from 'react'
import client1 from '../../assets/Clients1.png'
import client2 from '../../assets/Clients2.png'
import client3 from '../../assets/Clients3.png'

const System = () => {
    return (
        <div className=' max-w-container mx-auto'>
            <div className=' flex justify-center'>
                <div className='md:w-6/12'>
                    <h2 className=' font-inter text-3xl text-[#4D4D4D] font-semibold text-center mb-[8px]'>
                        Manage your entire community in a single system
                    </h2>
                    <p className='text-[#717171] font-inter font-medium text-center text-base mb-8'>
                        Who is Nextcent suitable for?
                    </p>
                </div>
            </div>
            <div className='md:flex flex-wrap md:justify-between justify-center'>
                <div className='md:w-[299px] px-8 py-6 text-center shadow-lg shadow-black-500/50 '>
                    <div className='flex justify-center mb-[24px]'>
                        <picture>
                            <img src={client1} alt="" />
                        </picture>
                    </div>
                    <h2 className='text-halka text-[28px] font-bold font-inter mb-2'>
                    National Associations
                    </h2>
                    <p className='text-[#717171] text-sm font-medium font-inter'>
                        Our membership management software provides full automation of membership 
                        renewals and payments
                    </p>
                </div>
                <div className='md:w-[299px] px-8 py-6 text-center shadow-lg shadow-black-500/50 '>
                    <div className='flex justify-center mb-[24px]'>
                        <picture>
                            <img src={client2} alt="" />
                        </picture>
                    </div>
                    <h2 className='text-halka text-[28px] font-bold font-inter mb-2'>
                        Membership Organisations
                    </h2>
                    <p className='text-[#717171] text-sm font-medium font-inter'>
                        Our membership management software provides full automation of membership 
                        renewals and payments
                    </p>
                </div>
                <div className='md:w-[299px] px-8 py-6 text-center shadow-lg shadow-black-500/50 '>
                    <div className='flex justify-center mb-[24px]'>
                        <picture>
                            <img src={client3} alt="" />
                        </picture>
                    </div>
                    <h2 className='text-halka text-[28px] font-bold font-inter mb-2'>
                    Clubs And Groups
                    </h2>
                    <p className='text-[#717171] text-sm font-medium font-inter'>
                        Our membership management software provides full automation of membership 
                        renewals and payments
                    </p>
                </div>
            </div>

        </div>
    )
}

export default System