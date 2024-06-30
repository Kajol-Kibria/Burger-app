import React from 'react';
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { PiChefHat } from "react-icons/pi";



export default function Reservation() {
  return (
    <div className='bimg'>
        <div className='bg-[#000000a6] sm:flex justify-center items-center text-white py-20 px-10 sm:px-48'>
            <div className='sm:w-[50%] space-y-4'>
              <h1 className='sm:text-4xl text-2xl font-extrabold'>DO YOU HAVE ANY DINNER PLAN TODAY?<br/> RESERVE YOUR TABLE</h1>  
              <p className='text-gray-100 w-[70%] text-xs sm:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illum veniam sed hic minus. Nam at qui eos nihil ipsum. Consequatur porro eligendi fuga aliquid.</p>
              <div className='flex items-center gap-4 sm:text-3xl pb-6'>
                <p><FaSquarePhoneFlip className=' text-red-500 sm:text-6xl text-3xl'/></p>
                <div>
                  <p>Quick order 24/7</p>
                  <p className='text-yellow-400'>+0123 456 789</p>
                </div>
              </div>
            </div>
            <div className='sm:w-[50%] bg-green-600 text-white rounded-lg text-center py-10'>
              <div className='space-y-4'>
                <PiChefHat className='text-8xl mx-auto'/>
                <p className='sm:text-6xl text-2xl font-bold'>RESERVATION</p>
                <p  className='sm:text-2xl'>BOOK YOUR TABLE</p>
              </div>
              <div className='sm:text-lg font-semibold'>
                <div className=' sm:flex gap-5 justify-center pt-8 sm:w-[70%] mx-auto' >
                <select className='block sm:mb-0 mb-5 px-3 sm:px-14 w-[70%] mx-auto py-2 rounded-lg  border-[2px] border-gray-100 bg-transparent outline-none' name='people' id='people'>
                  <option  value='1'className='text-black'>1 people</option>
                  <option value='2' className='text-black'>2 people</option>
                  <option value='3' className='text-black'>3 people</option>
                  <option value='4' className='text-black'>4 people</option>
                </select>
                <input type='date' className='w-[70%] px-3 py-2 rounded-lg  border-[2px] border-gray-100 bg-transparent outline-none'></input>
              </div>
              <input type='time' className='w-[70%] px-3 py-2 rounded-lg  border-[2px] border-gray-100 bg-transparent outline-none my-5 text-lg'></input>
                <button className='w-[70%] py-3 rounded-lg sm:my-6 block mx-auto bg-blue-950 text-white'>Book Now</button>
              </div>
            </div>
            
           
        </div>
    </div>
  )
}
