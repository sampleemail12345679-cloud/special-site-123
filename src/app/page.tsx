'use client';  
import './App.css'
import Navbar from './Components/Navbar';
import Homes from './Components/Home';
import Newsletter from './Components/Newsletter';
import FeaturedProducts from './Components/FeaturedProducts';
import Footers from './Components/Footers';
import Testimonial from './Components/Testimonial';

import { useEffect } from 'react';
import Lenis from 'lenis';
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
    });

    interface RafFunction {
      (time: number): void;
    }

    const raf: RafFunction = function (time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
    
      <Navbar />
      <Homes />
      <FeaturedProducts />
      
      <Testimonial />
      <Newsletter />
     <Footers />
    </>
  );
}
