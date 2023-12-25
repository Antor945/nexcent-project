import React from 'react'
import pixelgrade from '../../assets/Pixelgrade.png'

const Pixelgrade = () => {
    return (
        <div className=' max-w-container mx-auto mt-[42px]'>
            <div className='md:flex flex-wrap justify-between items-center'>
                <div className='md:w-2/5 py-[52px]'>
                    <picture>
                        <img src={pixelgrade} alt="" className='w-full' />
                    </picture>
                </div>
                <div className='md:w-3/5 text-center md:pb-0 pb-10'>
                    <div>
                        <h2 className='text-4xl font-inter font-semibold text-halka mb-[16px]'>
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className='text-[#717171] font-inter font-medium text-sm leading-5 mb-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
                            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                            aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <a href="" className='px-8 py-[14px] bg-green text-white rounded-md text-[16px]
                        font-medium'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pixelgrade