"use client";

import React, { useState } from 'react'
import '../App.css'
import { ToastContainer, toast, Slide } from 'react-toastify';



const Newsletter = () => {
  const [email, setEmail] = useState('');
  const notify = () => {
    if (email && email.includes('@') && email.includes('.') && email.length > 5 ){ 
      toast.success('Subscribed successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "black",
        transition: Slide,
      })
      setEmail(''); // Clear the input field after successful subscription
    }
    else{
      toast.error('Invalid Email', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        theme: "black",
        transition: Slide,
        });
    }
};
  
  return (
    <section className=' text-white md:h-50 h-100 w-full flex items-center justify-center !mt-10'>
      <div className='container mx-auto text-center  flex flex-col justify-center items-center gap-6 sm '>
        <h2 className='text-4xl font-bold mb-2 md:self-start md:!pl-10  !pb-0'>Newsletter</h2>
        <div className='text-lg mb-10 max-w-2xl flex [@media(min-width:900px)]:text-nowrap  md:self-start md:!pl-10 w-screen xl:gap-24 md:gap-7 flex-col md:flex-row gap-7 items-center md:items-start '>
          <p>Stay updated with the latest trends and exclusive offers.</p>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="Enter your email" 
            className='p-0 rounded-lg    border-none outline-none in1 bg-transparent text-white w-[60vw] md:w-auto !mb-0 md:!mb-0 !mt-0 md:!mt-0 !h-10 !px-4' 
          />
          <button onClick={notify} className=' text-white rounded-lg font-semibold b2 md:w-auto hover:scale-115 transition-all duration-700 cursor-pointer '>
            Subscribe
          </button>
          <ToastContainer position="bottom-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"
               transition={Slide}/>
        </div>
        
      </div>
    </section>
  )
}

export default Newsletter