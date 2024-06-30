import Image from 'next/image'
import React from 'react'
import Img1 from '../../../public/images/f1.jpg';  
import Img2 from '../../../public/images/f2.jpg';  
import Img3 from '../../../public/images/f3.jpg';  
export default function LoveCare() {
  return (
    <div className='px-10 py-10 sm:pb-20'>
        <h1 className='text-3xl text-center sm:p-20'>BURGERS MADE WITH LOVE AND <p className='text-red-700'>CARE</p></h1>
        <div className='sm:flex justify-around '>
        <div className='sm:w-[25%] flex flex-col items-center gap-2 p-4 rounded-md hover:bg-white transition-colors duration-500'>
            <Image src={Img1} alt='' className='rounded-xl'/>
            <h1 className='text-2xl font-bold pt-3 px-5'>Blust Burger</h1>
            <p className='text-sm text-gray-800 px-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero provident nam quidem magnam fugit delectus amet doloremque sint labore itaque!</p>
        </div>
        <div className='sm:w-[25%] flex flex-col items-center gap-2 sm:translate-y-10 p-4 rounded-md hover:bg-white transition-colors duration-500'>
            <Image src={Img2} alt='' className='rounded-xl'/>
            <h1 className='text-2xl font-bold pt-3 px-5'>Cheesy Burgers</h1>
            <p className='text-sm text-gray-800 px-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero provident nam quidem magnam fugit delectus amet doloremque sint labore itaque!</p>
        </div>
        <div className='sm:w-[25%] flex flex-col items-center gap-2 p-4 rounded-md hover:bg-white transition-colors duration-500'>
            <Image src={Img3} alt='' className='rounded-xl' />
            <h1 className='text-2xl font-bold pt-3 px-5'>Chicken Burger</h1>
            <p className='text-sm text-gray-800 px-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero provident nam quidem magnam fugit delectus amet doloremque sint labore itaque!</p>
        </div>
        </div>
       
    </div>
  )
}
