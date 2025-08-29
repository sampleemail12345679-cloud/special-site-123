'use client'
import { SiMaterialdesignicons } from "react-icons/si"; 
import { FaStarOfLife } from "react-icons/fa"; 
import { FaBandcamp } from "react-icons/fa"; 
import { IoWaterOutline } from "react-icons/io5"; 
import React, { useEffect } from 'react'

import { Si1001Tracklists } from "react-icons/si"; 

import Navbar from '../Components/Navbar'
import Footers from '../Components/Footers'
import Userprofile from '../Components/Userprofile'
import CP1 from '../Components/CP1'
import Lenis from 'lenis'

// This page is about the team members who contributed to the project
// It includes a section for team profiles and a timeline of contributions
// The page is styled with Tailwind CSS for a modern look

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    interface RafFunction {
      (time: number): void;
    }

    const raf: RafFunction = function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
  <>
  <Navbar />
    
      <section className="text-white body-font">
      
  <div className="container !px-5 !py-24 mx-auto">
  <div className="flex flex-col text-center w-full !mb-20">
      <h1 className="text-2xl font-medium title-font !mb-4  tracking-widest">OUR MOTIVE</h1>
      <p className="lg:w-2/3 !mx-auto leading-relaxed text-base">Our aim is to provide customers with high-quality timepieces that combine style, durability, and reliable performance. We strive to offer a convenient online shopping experience, backed by professional service and a carefully curated selection of trusted brands.</p>

    </div>
    <div className="flex flex-col text-center w-full !mb-20">
      <h1 className="text-2xl font-medium title-font !mb-4  tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 !mx-auto leading-relaxed text-base">This ecommerce website was made by the contribution of many members.</p>

    </div>
    <div className="flex flex-wrap items-center justify-center">
    <Userprofile name="Jatin Singh" rank="Web Developer" cb="Contributed in making the website." src="/logo.png" />
      <Userprofile name="Anmol" rank="Designer" cb="Contributing in ideas, designs regarding the website." />
      <Userprofile name="Rohit" rank="??" cb="??????????????????????????????????" />
      <Userprofile name="????????????????????????" rank="??????????????????????????" cb="????????????????????????????????????????????" />
      
      
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
<h1 className="text-3xl text-white text-center !mb-25 !mt-42">Features We Provide You</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <ul className="timeline timeline-vertical">
    <CP1 icon={<Si1001Tracklists className=" size-full text-2xl"/>} id = "1" name="Extended Warranty Coverage" dp="Comprehensive protection plans covering manufacturing defects, movement issues, and battery replacements for up to 5 years, giving customers long-term peace of mind."/>
    <CP1 icon={<SiMaterialdesignicons  className=" size-full text-2xl"/>} id = "2" name="Superior Material Selection" dp="Watches crafted from premium materials such as surgical-grade stainless steel, sapphire crystal glass, ceramic bezels, and hypoallergenic titanium to ensure exceptional durability and comfort."/>
    <CP1 icon={ <IoWaterOutline className=" size-full text-2xl"/>} id = "3" name="Certified Water Resistance Testing" dp="Each watch undergoes rigorous water resistance certification, guaranteeing performance under specific conditions (e.g., 100m–300m depths), ideal for swimmers and divers."/>
    <CP1 icon={<FaBandcamp className=" size-full text-2xl"/>} id = "4" name="Complimentary Strap Customization" dp="Personalized fitting and customization of straps in high-quality leather, rubber, or metal, allowing customers to tailor the style and comfort of their timepiece."/>
    <CP1 icon={<FaStarOfLife className=" size-full text-2xl"/>} id = "5" name="Lifetime Service & Polishing Program" dp="Exclusive lifetime cleaning, polishing, and mechanical servicing to keep watches in pristine condition and maintain their value over time."/>
        </ul>
    
  </div>
</section>
   
    <Footers />
    </>
  )
}

export default Page
