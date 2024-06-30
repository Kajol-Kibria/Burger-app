import React from 'react'
import ResNav from "./nav/ResNav";
import Hero from './Hero'
import LoveCare from './LoveCare'
import Popular from './Popular'
import Delivery from './Delivery'
import Chefs from './Chefs'
import Reservation from './Reservation'
import Offers from './Offers'
import Footer from './Footer'
export default function Home() {
  return (
    <div className='bg-orange-50'>
    <ResNav/>
      <Hero/>
      <LoveCare/>
      <Popular/>
      <Delivery/>
      <Chefs/>
      <Reservation/>
      <Offers/>
      <Footer/>
    </div>
  )
}
