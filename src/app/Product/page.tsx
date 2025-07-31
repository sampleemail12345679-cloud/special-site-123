'use client'

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';
import '../App.css'
import data from '../data.json'
import Lenis from 'lenis';
import { useEffect } from 'react';
import {
  ClerkProvider
} from "@clerk/nextjs";



export default function Products() {
const products = data;
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
  <>
  <ClerkProvider>
  <Navbar />
    <section className=" bg-black text-white body-font">
      <div className="container !px-5  mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white  !pt-12 !pb-21">
          Our Collections
       
        </h1>
        
        <div className="flex flex-wrap -m-4 gap-12 justify-center
        ">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-6 w-full">
              <Link 
                href={`/products/${product.id}`}
                className="block relative h-50 rounded overflow-hidden group"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-115 transition-transform duration-300 rounded-2xl "
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  
                 
                />
              </Link>
              <div className="!mt-4 flex   flex-col items-center ">
                
                <h2 className="text-white title-font text-lg font-medium hover:text-gray-300 transition-colors">
                  <Link href={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h2>
                <p className="mt-1 text-lg text-[14px] text-zinc-400 font-light">
                ₹{product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footers/>
    </ClerkProvider>
    </>
  );
}