import Link from 'next/link';
import React from 'react'
import { FaBurger } from "react-icons/fa6";
import { FaFacebook, FaInstagram , FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-gray-900 text-gray-300 sm:px-48 px-10 font-semibold'>
        <div className='sm:flex justify-center gap-20 sm:py-20 py-10 '>
            <div className='sm:w-[25%] pb-6'>
                <div className='flex items items-center gap-3 text-2xl font-bold pb-4'>
                    <FaBurger className='text-orange-500'/>
                    <h1 className='text-white'>OnlyBurg</h1>
                </div>
                <p className='pb-4 text-sm'>Lorem ipsum dolor sit,consectetur adipisicing elit. odio.</p>
                <p className='text-xl text-white'>kajolkibria95@gmail.com</p>
                <p className='text-xl text-yellow-200'>+88014 028 74542</p>
            </div>
            <div className='sm:w-[25%] pb-6'>
                <h1 className='pb-4 text-xl text-white'>Products</h1>
                <ul>
                    <li>Chicken Burger</li>
                    <li>Beef Burger</li>
                    <li>Chicken Burger</li>
                    <li>Clasic Burger</li>
                    <li>Delight Burger</li>
                </ul>
            </div>
            <div className='sm:w-[25%] pb-6'>
                <h1 className='pb-4 text-xl text-white'>Quick Links</h1>
                <ul className='font-semibold'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/chefs">Chefs</Link></li>
                <li><Link href="/burgers">Burgers</Link></li>
                <li><Link href="/location">Location</Link></li>
            </ul>
            </div>
            <div className='sm:w-[25%] pb-6'>
                <h1 className='pb-4 text-xl text-white'>OPENING HOURS</h1>
                <p>Monday - Friday :<span className='text-yellow-400'> 8am - 4pm</span></p>
                <p>Saturday :  <span className='text-yellow-400'>8am - 12am</span></p>
                <div className='flex gap-3 text-3xl pt-4'>
                    {/* links */}
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>

                </div>
            </div>
            
        </div>
        <hr/>
        <p className='text-center p-6 text-[10px] sm:text-[16px]'>Copyright © 2024 <span className='text-yellow-200'>KIbria</span>. All rights reserved</p>
    </div>
  )
}
