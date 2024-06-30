"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import { GoStarFill } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";

import Card from './Card'


export default function Popular() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='sm:px-32 sm:py-12 m-10'>
        <h1 className='text-center text-4xl pb-10 font-bold'>OUR POPULAR <p className='text-red-700'>BURGERS</p></h1>
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} arrows={true} infinite >
        <Card image='/images/b1.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b2.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b3.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b4.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b5.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b6.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b7.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b8.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        <Card image='/images/b9.png' title={'Beefy bite'} des={'The burger with extra cheese and beaf with perfect combinition'} price={'10.50$'}/>
        
        </Carousel>
    </div>
  )
}
