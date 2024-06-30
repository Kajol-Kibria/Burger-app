"use client";

import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { RiCloseFill } from "react-icons/ri";
import { FaBurger } from "react-icons/fa6";
import {  MdOutlineShoppingCart, MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";

export default function MobNav() {
  
  const [nav , setNav] =  useState(true)
  return (
    <div >
     <div className=' bg-white flex justify-between items-center  p-5  sm:hidden'>
      <div className='flex justify-between items-center gap-3 text-md '>
            <FaBurger className='text-orange-500' />
            <h1 className='font-bold ' >OnlyBurg</h1>
        </div>
        <div className='flex justify-between items-center gap-3 ml-4'>
            <p className='flex items-center gap-1 bg-blue-950 font-bold  rounded-md text-lg text-gray-100 hover:bg-red-600 transition-colors duration-300 cursor-pointer p-2'><MdDeliveryDining/>Order now</p>
              
            <div className=' text-gray-100 text-lg bg-red-500 rounded-md cursor-pointer hover:bg-red-600 transition-colors duration-300 p-3'><MdOutlineShoppingCart/></div>
            
        </div>
        <div className='flex items-center text-2xl z-[1001]'  onClick={()=>{setNav(!nav)}} >
          {nav?<MdOutlineMenu/>:
          <MdOutlineClose className='text-white'/>}
        </div>
        
        
     </div>
     <div className= {`fixed bg-[#000000e0] top-0 bottom-0 right-0 left-0  h-[100vh] z-[100] ${nav?"hidden":"block"}`}>
        
        
        <div className='bg-emerald-600 w-[75%] h-[100%] flex flex-col items-center transition-all duration-300 delay-200 justify-center '>
        <ul className='  text-3xl font-semibold text-white space-y-10 '>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/chefs">Chefs</Link></li>
                <li><Link href="/burgers">Burgers</Link></li>
                <li><Link href="/location">Location</Link></li>
            </ul>
        </div>
    </div>
        </div>
        
    
  )
}
