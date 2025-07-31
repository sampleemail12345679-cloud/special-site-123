"use client";

import { AiOutlineLogin } from "react-icons/ai"; 


import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { SignIn } from "@clerk/elements/sign-in";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Searchbox from "../Components/Searchbbox"
import Cart from "../Components/Cart"
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <>
    
      <header className="  h-30 text-white sticky top-0 z-50 outline-none">
        <nav className="w-full h-20 px-4 flex items-center backdrop-blur-[10px] justify-around max-w-screen-xl mx-auto na1aa overflow-hidden !mt-2 rounded-3xl bg-[rgb(0,0,0,0.7)]">
          <a href="#" className="text-[27px] font-normal ">
            ClonicalClone
           
          </a>
          
          <div className="hidden md:flex gap-10 text-[16px]">
          <a href="/" className="hover:text-gray-400 transition">
              Home
            </a>
            <a href="/Product" className="hover:text-gray-400 transition">
              Shop
            </a>
            <a href="/About" className="hover:text-gray-400 transition">
              About
            </a>
         
            <a href="/Contact" className="hover:text-gray-400 transition">
              Contact
            </a>
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
          <div className="md:hidden bg-black text-white flex flex-col items-center gap-6 py-6 transition-all duration-300 idk">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/Product" className="hover:text-gray-400">
              Shop
            </a>
            
            <a href="/About" className="hover:text-gray-400">
              About
            </a>
        
            <a href="/Contact" className="hover:text-gray-400">
              Contact
            </a>
            <div className="flex gap-6 text-[26px] mt-4">
            <RiSearch2Line
  className="hover:text-gray-400 cursor-pointer"
  onClick={() => setIsSearchOpen(true)}
/>
              <CgShoppingCart lassName="hover:text-gray-400 cursor-pointer"
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
