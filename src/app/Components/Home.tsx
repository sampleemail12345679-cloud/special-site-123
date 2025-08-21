import React from 'react'
import '../index.css'
import '../App.css'
import Image from "next/image"



const Home = () => {
    return (
        <>
            <section className="w-full overflow-x-hidden ">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row w-full min-h-screen  !px-4 sm:!px-6 lg:!px-14 xl:!px-12 2xl:!px-16 !py-8 lg:!py-0 !gap-12 md:!mt-0 !mt-50 overflow-x-hidden">

                    {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
                    <div className='order-2 lg:order-1 w-full lg:w-1/2 flex items-center justify-center lg:justify-start h-auto lg:h-screen py-8 lg:py-0 '>
                        <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10 text-white text-center lg:text-left items-center lg:items-start max-w-lg lg:max-w-none !pl-5'>

                            {/* Responsive heading */}
                            <h1 className='font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight'>
                                Discover Our <br /> Latest Collection
                            </h1>

                            {/* Responsive button */}
                            <a
                                className=' text-lg sm:text-xl lg:text-2xl bt px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300'
                                href='/Product'
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>

                    {/* Image Content - Order 1 on mobile, Order 2 on desktop */}
                    <div className='order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center overflow-hidden h-64 sm:h-80 md:h-96 lg:h-screen'>
                        <div className="relative w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                            <Image
                                src="/ss.avif"
                                alt="Latest Collection"
                                fill
                                className="object-cover object-center rounded-lg lg:rounded-none"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home