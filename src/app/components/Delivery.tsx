import Image from 'next/image'
import React from 'react';
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";


export default function Delivery() {
  return (
    <div className='sm:flex justify-center items-center px-10 pb-10'>
        <Image className='sm:w-[40%]  sm:pr-20 mx-auto'  src="/images/delivery.svg" alt='delivery image' height={600} width={600}/>
        <div className='space-y-2'>
            
            <h1 className='sm:text-6xl text-2xl pt-4  font-bold'>YOUR <span className='text-red-700 '>FAVORITE BURGER</span><br/> ON THE WAY!</h1>
            <p className='text-gray-800 py-2 sm:w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptates?</p>
            <p className='flex items-center gap-2'><CiDeliveryTruck className='text-red-500 text-3xl'/>DELIVERY IN 30 MINUTES</p>
            <p className='flex items-center gap-2'><IoFastFoodOutline className='text-red-500 text-3xl'/>FREE SHIPPING FROM 75$</p>
            <p className='flex items-center gap-2'><BsDoorOpen className='text-red-500 text-3xl'/>DELIBERY ON YOUR DOORSTEP</p>
        </div>
    </div>
  )
}
