import Image from 'next/image'
import React from 'react'

export default function Chefs() {
  return (
    <div className='py-12'>
        <h1 className='text-4xl font-bold text-center pt-10 pb-20'>MEET OUR EXPERT <span className='text-red-600'>CHEFS</span></h1>
        <div className='sm:flex justify-center'>
            <div className='flex flex-col items-center sm:w-1/4'>
                <Image className='w-[80%] h-[80%] object-cover rounded-xl' src='/images/t1.jpg' alt="chefs" quality={100} width={200} height={200}/>
                <div className='text-center space-y-3 px-20 py-5'>
                <h1 className=' font-bold text-4xl pb-4'>John Doe</h1>
                <span className='bg-green-600 text-white text-sm py-2 px-3'>Kitchen Porter</span>
                <p className='text-gray-800 text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex flex-col items-center sm:w-1/4'>
                <Image className='w-[80%] h-[80%] object-cover rounded-xl' src='/images/t2.jpg' alt="chefs" quality={100} width={200} height={200}/>
                <div className='text-center space-y-3 px-20 py-5'>
                <h1 className=' font-bold text-4xl pb-4'>John Doe</h1>
                <span className='bg-green-600 text-white text-sm py-2 px-3'>Kitchen Porter</span>
                <p className='text-gray-800 text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex flex-col items-center sn:w-1/4'>
                <Image className='w-[80%] h-[80%] object-cover rounded-xl' src='/images/t3.jpg' alt="chefs" quality={100} width={200} height={200}/>
                <div className='text-center space-y-3 px-20 py-5'>
                <h1 className=' font-bold text-4xl pb-4'>John Doe</h1>
                <span className='bg-green-600 text-white text-sm py-2 px-3'>Kitchen Porter</span>
                <p className='text-gray-800 text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
