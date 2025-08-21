"use client";

import { AiOutlineLogin } from "react-icons/ai"; 


import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import Searchbox from "./Searchbbox"
import Cart from "./Cart"
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <>
    
      <header className="   text-white sticky top-0 z-50 outline-none w-full ">
        <nav className="w-full h-26   flex items-center backdrop-blur-[10px] justify-around shadow-[0px_0px_173px_-27px_rgba(231,_231,231,0.689)] mx-auto animate-[shadower_4s_infinite] bg-[rgb(0,0,0,0.7)]">
          <a href="#" className="text-[25px] font-normal ">
            ClonicalClone
           
          </a>
          <div className={`md:flex  text-lg items-center gap-13 hidden`}>
          <Link href="/" className="hover:text-gray-400 transition">
              Home
            </Link>
           
          <Link href="/Product" className="hover:text-gray-400 transition">
              Shop
          </Link>
          <Link href="/About" className="hover:text-gray-400 transition">
              About
          </Link>
         
          <Link href="/Contact" className="hover:text-gray-400 transition">
              Contact
          </Link>
          </div>
          {/* Icons */}
          <div className="hidden md:flex gap-6 text-2xl items-center">
          <RiSearch2Line
  className="hover:text-gray-400 cursor-pointer"
  onClick={() => setIsSearchOpen(true)}
/>
            <CgShoppingCart className="hover:text-gray-400 cursor-pointer" onClick={() => setIsCartOpen(true)}/>

            <SignedIn >
              <UserButton appearance={{
    elements: {
      navbar: {
        display: 'none',
        backgroundColor: 'black',
      },
    },
  }}/>
            </SignedIn>

            <SignedOut>
            <SignUpButton mode="modal">
                <button className="hover:text-gray-400">
                  <AiOutlineUser />
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="hover:text-gray-400">
                  <AiOutlineLogin />
                </button>
              </SignInButton>
            
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
        <>
        <div className=" w-full h-screen bg-black relative z-40 flex flex-col items-center justify-center gap-14 " >
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            
            <Link href="/Product" className="hover:text-gray-400">
              Shop
            </Link>
            
            <Link href="/About" className="hover:text-gray-400">
              About
            </Link>
        
            <Link href="/Contact" className="hover:text-gray-400">
              Contact
            </Link>
            <div className="flex gap-6 text-[26px] mt-4">
            <RiSearch2Line
  className="hover:text-gray-400 cursor-pointer"
  onClick={() => setIsSearchOpen(true)}
/>
              <CgShoppingCart className="hover:text-gray-400 cursor-pointer"
  onClick={() => setIsCartOpen(true)}/>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button>
                    <AiOutlineUser />
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
            </div>
          </>
        )}
      </header>
      {isCartOpen && (
      
      <Cart onClose={() => setIsCartOpen(false)} />
      
    )}
      {isSearchOpen && (
      
  <Searchbox onClose={() => setIsSearchOpen(false)} />
  
)}

    </>
  );
};

export default Navbar;
