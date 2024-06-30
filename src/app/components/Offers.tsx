import React from 'react'

export default function Offers() {
  return (
    <div className='sm:py-24 py-16 sm:px-44 px-10 flex flex-col gap-6 items-center'>
        <h1 className='sm:text-6xl text-3xl font-bold'>JOIN FOR HOT OFFERS</h1>
        <p className='text-gray-800 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur nostrum hic culpa libero iusto dolor cum veritatis itaque, provident in ipsa magni fugiat deleniti. </p>
        <div className='sm:flex mt-5'>
            <input className='pl-5 sm:pr-[37rem] pr-28 py-4  rounded-lg bg-gray-400 placeholder:text-black outline-none' type='email' placeholder='Email address'></input>
            <div className='flex justify-center'><button className='bg-green-600 sm:mt-0 mt-4  text-white px-10 py-3 rounded-lg sm:ml-6 font-bold text-lg'>Subscribe</button></div>
        </div>
    </div>
    
  )
}
