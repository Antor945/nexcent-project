import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Navbar = () => {

    const [Show, SetShow] = useState(false)
    const HandleClick = () => {
        SetShow(!Show);
    }

    return (
        <div className='bg-[#F5F7FA]'>
            <div className='max-w-container mx-auto '>
                <div className='md:flex flex-wrap justify-between items-center py-[30px] '>
                    <div className='md:w-1/5 w-full flex justify-between'>
                        <picture>
                            <img src={logo} alt="" />
                        </picture>
                        <div onClick={HandleClick} className='md:hidden mr-10'>
                            {
                                Show == true ? <ImCross /> : <FaBars />
                            }
                        </div>
                    </div>
                    <div className='md:w-4/5 w-full'>
                        <div className={`md:flex items-center justify-between md:static absolute
                         ${Show ? "ml-0 md:ml-0 md:bg-transparent bg-green duration-500 w-8/12 rounded-3xl md:mt-0 mt-5"
                                : "ml-[-570px] md:ml-0 duration-1000 md:mt-0 mt-5 "} `}>
                            <ul className='md:flex gap-[50px] text-center '>
                                <li className='md:mb-0 mb-3 md:pt-0 pt-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'>Service</a></li>
                                <li className='md:mb-0 mb-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'>Home</a></li>
                                <li className='md:mb-0 mb-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'>Feature</a></li>
                                <li className='md:mb-0 mb-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'>Product</a></li>
                                <li className='md:mb-0 mb-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'>Testimonial</a></li>
                                <li className='md:mb-0 mb-3'><a href="" className='md:text-[#18191F] text-white font-medium font-inter'> FAQ</a></li>
                            </ul>
                            <div className='md:flex gap-[20px] justify-end '>
                                <div className='flex justify-center md:mb-0 mb-2'>
                                    <a href="" className='md:py-[10px] py-1 md:px-[20px] px-3 md:text-green font-medium font-inter
                         md:hover:bg-green hover:bg-white md:hover:text-white hover:text-green hover:rounded-md duration-1000'
                                    >Login</a>
                                </div>
                                <div className='flex justify-center md:pb-0 pb-4'>
                                    <a href="" className='md:py-[10px] py-1 md:px-[20px] px-3 md:text-green font-medium font-inter
                         md:hover:bg-green hover:bg-white md:hover:text-white hover:text-green hover:rounded-md duration-1000'>Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar