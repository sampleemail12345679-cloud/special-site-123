import { FaRupeeSign } from "react-icons/fa"; 
import React from 'react'
import '../App.css'
import Link from "next/link";
import Image from 'next/image';
// This component displays a section of featured products with images and titles.

const FeaturedProducts = () => {
  return (
    <section className="text-white  min-height-200 w-full bg-black flex md:!pl-20 md:!py-25 !mt-6 flex-col  md:items-start md:justify-start items-center justify-center">
     <div className='!mb-10 flex flex-col align-center md:items-start justify-center  items-center '>
            <h1 className="sm:text-3xl text-2xl font-medium title-font !mb-2 text-white h-10">Featured Products</h1>
        <div className="h-1 w-20 bg-white rounded"></div>
      </div>
      
      <div className='flex flex-wrap   gap-12 xl:gap-5 md:!pr-15 items-center justify-center md:items-start md:justify-start lg:gap-5'>
      
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500'>
          <Link href='/products/3'>
            <Image width={500} height={500} src="/images/Seiko-Prospex-Arnie-2_fde1398b-1529-4b20-aa1d-2852c5e7d164.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Seiko Prospex “Arnie” SNJ025</h2>
            <div className="flex items-center w-full justify-center "><del className="flex items-center text-zinc-600"><FaRupeeSign />43,135</del> &nbsp;&nbsp;&nbsp;&nbsp;<FaRupeeSign />36,999</div>
            </Link>
          </div>
          
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500'>
          <Link href='/products/22'>
            <Image width={500} height={500} src="/images/Zenith-Defy-Extreme-2_c824b1a4-97e2-4e36-ac94-d3f4db2be0a2.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Zenith Defy Extreme</h2>
            <div className="flex items-center w-full justify-center "><del className="flex items-center text-zinc-600"><FaRupeeSign />34,81,763</del> &nbsp;&nbsp;&nbsp;&nbsp;<FaRupeeSign />26,78,999</div>
            </Link>
          </div>
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500'>
          <Link href='/products/4'>
            <Image width={500} height={500} src="/images/thumbnail-1-0.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Omega Seamaster Diver 300m</h2>
            <div className="flex items-center w-full justify-center "><del className="flex items-center text-zinc-600"><FaRupeeSign />9,86,869</del> &nbsp;&nbsp;&nbsp;&nbsp;<FaRupeeSign />7,06,999</div>
            </Link>
          </div>
      
          
          
      </div>
    </section>
  )
}

export default FeaturedProducts


