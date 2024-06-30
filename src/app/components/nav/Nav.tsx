import Link from 'next/link';
import React from 'react'
import { FaBurger } from "react-icons/fa6";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
export default function Nav() {
  return (
    <div className=' bg-white hidden sm:block'>
    <div className='flex justify-between items-center px-40 py-6  '>
        <div className='flex justify-between items-center gap-3 text-2xl font-bold '>
            <FaBurger className='text-orange-500'/>
            <h1 >OnlyBurg</h1>
        </div>
        
        <div >
            <ul className='flex gap-6 text-xl font-semibold'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/chefs">Chefs</Link></li>
                <li><Link href="/burgers">Burgers</Link></li>
                <li><Link href="/location">Location</Link></li>
            </ul>
        </div>
        
        <div className='flex justify-between items-center gap-4 text-2xl'>
            <p className='bg-blue-950 flex items-center gap-1 px-8 py-2 rounded-md text-gray-100 hover:bg-red-500 transition-colors duration-300 cursor-pointer'><MdDeliveryDining/> Order now</p>
            
            <div className='p-3  text-gray-100 bg-red-500 rounded-md cursor-pointer hover:bg-red-600 transition-colors duration-300'><MdOutlineShoppingCart/></div>
            
        </div>
    </div>
    </div>
  )
}
