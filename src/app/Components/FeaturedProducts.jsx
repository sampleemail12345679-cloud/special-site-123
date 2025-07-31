import React from 'react'
import '../App.css'

// This component displays a section of featured products with images and titles.

const FeaturedProducts = () => {
  return (
    <section className="text-white  min-height-200 w-full bg-black flex md:!pl-20 md:!py-25 !mt-6 flex-col  md:items-start md:justify-start items-center justify-center">
     <div className='!mb-10 flex flex-col align-center md:items-start justify-center  items-center '>
            <h1 className="sm:text-3xl text-2xl font-medium title-font !mb-2 text-white h-10">Featured Products</h1>
        <div className="h-1 w-20 bg-white rounded"></div>
      </div>
      
      <div className='flex flex-wrap   gap-12 xl:gap-5 md:!pr-15 items-center justify-center md:items-start md:justify-start t'>
      
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden '>
          <a href='/products/3'>
            <img src="/images/Seiko-Prospex-Arnie-2_fde1398b-1529-4b20-aa1d-2852c5e7d164.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Seiko Prospex “Arnie” SNJ025</h2>
            </a>
          </div>
          
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden '>
          <a href='/products/22'>
            <img src="/images/Zenith-Defy-Extreme-2_c824b1a4-97e2-4e36-ac94-d3f4db2be0a2.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Zenith Defy Extreme</h2>
            </a>
          </div>
          <div className=' p-4 rounded-2xl shadow-lg overflow-hidden '>
          <a href='/products/4'>
            <img src="/images/thumbnail-1-0.webp" alt="Watch" className='w-screen md:w-90 md:h-50 h-60 object-cover rounded-2xl i1'/>
            <h2 className=' text-white text-center h-10 !mt-4'>Omega Seamaster Diver 300m</h2>
            </a>
          </div>
      
          
          
      </div>
    </section>
  )
}

export default FeaturedProducts


