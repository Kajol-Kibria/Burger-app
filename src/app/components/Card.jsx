import Image from 'next/image'
import React from 'react';
import { GoStarFill } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";


export default function Card({image , title , des, price }) {
  return (
    <div className=' space-y-2 sm:m-8 p-5 rounded-md bg-white '>
                <div className='h-[200px] mx-auto w-[200px]'><Image className='h-[100%] w-[100%] object-cover' height={200} width={200} src={image} alt=''/></div>
                <h1 className='font-bold text-xl'>{title}</h1>
                <p className='flex text-yellow-500'><GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/></p>
                <p className='text-gray-800'>{des}</p>
                <div className='flex justify-between'>
                    <p className='text-red-700 font-bold text-lg '>{price}</p><button className='bg-orange-500 rounded-lg text-white px-3 py-2'><FaBagShopping/></button>
                </div>
            </div>
  )
}
