import React from 'react'
import Navbar from './Navbar'
import Footers from './Footers'
import '../App.css'
import data from '../data.json'


const Productpg = (parms) => {
  const handleBuyNow = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItem = existingCart.find((item) => item.id === parms.id);
  
    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === parms.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: parms.id,
          name: parms.name,
          price: parms.price,
          discount: 1, // Or customize if needed
          quantity: 1,
          size: "M", // You can make this dynamic
          color: "Black",
          image: parms.srcss,
        },
      ];
    }
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    // Optionally navigate to cart or alert
    alert("Added to cart!");
  };
  return (
  <>
  <Navbar />
  
    <section className="text-white body-font overflow-hidden ">
      <div className="container !px-5 !py-24 !mx-auto ">
        <div className="lg:w-4/5 !mx-auto flex md:flex-nowrap flex-wrap">
            <img alt="ecommerce" className="md:w-1/2 w-full md:h-auto h-64 object-cover object-center rounded" src={parms.srcss} />
          <div className="lg:w-1/2 !w-full md:!pl-10 md:!py-6 !mt-6 lg:!mt-0">
              <h2 className="text-sm title-font text-white tracking-widest">{parms.brand }</h2>
              <h1 className="text-white text-3xl title-font font-medium !mb-1">{ parms.name}</h1>
            <div className="flex !mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 !ml-3">{parms.review} Reviews</span>
              </span>
              <span className="flex !ml-3 !pl-3 !py-2 border-l-2 border-gray-200 !space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
              <p className="leading-relaxed">{ parms.description}</p>
            <div className="flex !mt-6 items-center !pb-5 border-b-2 border-gray-100 !mb-5">
            
              <div className="flex !ml-6 items-center">
              </div>
            </div>
            <div className="flex">
                <span className="title-font font-medium text-2xl text-white">₹{ parms.price}.00</span>
              <a className="flex !ml-auto text-white  !py-2 !px-6 focus:outline-none  rounded bt cursor-pointer "  onClick={handleBuyNow} > Buy Now</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footers />
    </>
  )
}

export default Productpg
