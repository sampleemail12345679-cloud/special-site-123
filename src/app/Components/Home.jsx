import React from 'react'
import '../index.css';
import '../App.css';
import Image from "next/image";


import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

const Home = () => {
   
    return (
        <>
        
        <section>
        {/* Hero Section */}
            <div className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden mb-20 ">
                {/* Replace w-[100vw] with w-full */}
                <div className='order-2 md:order-1 h-[50vh] w-full md:w-1/2 text-5xl md:h-[100vh] flex items-center md:translate-x-20 md:gap-20 2xl:translate-x-10 xl:h-200 '>
                    <div className='flex flex-col gap-10 text-white md:items-start items-center md:text-left text-center md:align-none w-full h-full justify-center '>
                    <h1 className=' font-medium text-5xl/16 mb-4 '>Discover Our <br /> Latest Collection</h1>
                        <a className='text-2xl bt' href='/Product'>Shop Now</a>
                    </div>
                </div>
                {/* Keep this as is since it's properly contained */}
                <div className='order-1 md:w-1/2 w-full overflow-hidden md:h-[100vh] flex items-center h-[50vh] xl:h-200'>
                    <img src="/ss.avif" alt="Latest Collection" />
                </div>
           </div>
           </section>
          
        </>
    )
}

export default Home