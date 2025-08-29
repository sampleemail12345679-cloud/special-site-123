'use client'
import { ImFacebook } from "react-icons/im"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiOutlineCustomerService } from "react-icons/ai"; 

import Cart from './Cart'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footers = () => {
  const [cartView, setCartView] = useState(false);
  return (
  <>
    <footer className="text-white body-font !mt-60 !pt-10 bg-black justify-center flex flex-col items-center md:!h-60 !h-100 na2">
  <div className="container !px-5 !py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="!w-64 flex-shrink-0 md:!mx-0 !mx-auto text-center md:text-left md:!mt-0 !mt-10">By
      <div className="flex title-font font-medium  md:justify-start justify-center items-center md:items-start text-white">
        <Image width={30} height={30} src="/favicon.ico" alt="Logo" />
        <span className="ml-3 text-xl">ClonicalClone</span>
      </div>
      <p className="mt-2 text-sm text-gray-200">Aesthic Watch brand.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:!pr-20 !-mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4  w-full !px-4">
        <h2 className="title-font font-medium  tracking-widest  mb-3 text-xl">Links</h2>
        <ul className="list-none mb-10 flex gap-4 w-full items-center justify-center md:justify-start">
          <li>
                  <Link className=" hover:text-gray-400 " href='/'>Home</Link>
          </li>
          <li>
                  <Link className=" hover:text-gray-400" href='/Product'>Products</Link>
          </li>
          <li>
                  <Link className=" hover:text-gray-400" href='/About'>About</Link>
          </li>
          <li>
                  <Link className=" hover:text-gray-400" href='/Contact'>Contacts</Link>
          </li>
        </ul>
        
        <h2 className="title-font font-medium text-white tracking-widest  mb-3 !mt-5 text-xl ">Other</h2>
        <ul className="list-none mb-10 flex gap-4 items-center justify-center md:justify-start">
        <li>
                  <a className=" hover:text-gray-400" href="#" onClick={() => { setCartView(!cartView) }}>Cart</a>
          </li>
          <li>
            <a className=" hover:text-gray-400 " href="#discount">Discounts</a>
          </li>
          <li>
            <a className=" hover:text-gray-400" href="#">Offers</a>
          </li>
          <li>
                  <a className=" hover:text-gray-400" href="#">Expensives</a>
          </li>
        </ul>
      </div>
      
            {cartView && <Cart onClose={() => setCartView(false)} />}
      
    </div>
  </div>
  <div >
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row gap-7  text-white">
      <p className=" text-sm text-center sm:text-left ">© 2025 ClonicalClone  —
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2">
              <a className="" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <ImFacebook className="w-5 h-5"  />
        </a> 
              <a className="!ml-3 " href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <AiOutlineTwitter className="w-5 h-5"  />
        </a>
              <a className="!ml-3 " href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiOutlineInstagram className="w-5 h-5" />
        </a>
              <a className="!ml-3 " href="mailto:clonicalcloner@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Customer Service">
                <AiOutlineCustomerService className="w-5 h-5" />
        </a>
      </span>
    </div>
  </div>
</footer>
</>
  )
}

export default Footers
