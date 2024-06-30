"use client";
import Image from 'next/image';
import React from 'react'
import B1 from "../../../public/images/b1.png"
import B2 from "../../../public/images/b2.png"
import { MdDeliveryDining } from "react-icons/md";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bs123 } from 'react-icons/bs';
export default function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel responsive={responsive} infinite autoPlay={true} autoPlaySpeed={3000} arrows={true} showDots={true} itemClass={"mycss"} >
        <div className={`flex justify-around sm:px-20 px-8 gap-5 sm:h-[850px]  bg-blue-950  sm:clip_path`}>
          <Image className='sm:block hidden' src={B1} alt='b1'/>
          <div className='sm:space-y-8 space-y-4 sm:pt-52 py-32 sm:pr-36'>
            <div className='text-yellow-400 sm:text-4xl text-3xl font-bold'>Fast Food Burger</div>
            <div className='text-white font-bold sm:text-8xl text-6xl'>BEST <br/>BURGERS</div>
            <div className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt aliquid, cumque tempora placeat maiores molestias good burders at low price tempore laborum dicta! Cum iusto amet quasi odio corporis.</div>
            <button className='bg-green-500 flex items-center gap-1 px-8 py-2 rounded-md text-gray-100  transition-colors duration-300 cursor-pointer'><MdDeliveryDining/> Order now</button>
            
          </div>
        </div>
        <div className={`flex justify-around sm:px-20 px-8 gap-5 sm:h-[850px]  bg-red-950  sm:clip_path`}>
          <Image className='sm:block hidden' src={B2} alt='b2'/>
          <div className='sm:space-y-8 space-y-4 sm:pt-52 py-32 sm:pr-36'>
            <div className='text-yellow-400 sm:text-4xl text-3xl font-bold'>Tasty Burger</div>
            <div className='text-white font-bold sm:text-8xl text-6xl'>TOP <br/>BURGERS</div>
            <div className='text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt aliquid, cumque tempora placeat maiores molestias good burders at low price tempore laborum dicta! Cum iusto amet quasi odio corporis.</div>
            <button className='bg-blue-500 flex items-center gap-1 px-8 py-2 rounded-md text-gray-100  transition-colors duration-300 cursor-pointer'><MdDeliveryDining/> Order now</button>
            
          </div>
        </div>
        

        
    </Carousel>
  )
}
