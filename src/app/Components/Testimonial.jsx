import { FaQuoteRight } from "react-icons/fa"; 
import React from 'react'

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container !px-5 !py-54 !mx-auto">
     <div className="xl:w-1/2 lg:w-3/4 w-full !mx-auto text-center scale-90 md:scale-100">
      <FaQuoteRight className="inline-block w-8 h-8 text-white !mb-8"/>
      <p className="leading-relaxed text-lg text-neutral-400">I recently purchased a Rolex watch from this store, and I couldn’t be happier with the experience. The ordering process was simple, the delivery was fast, and the watch arrived in perfect condition. It looks even better in person and feels very high-quality. I’ll definitely shop here again!</p>
      <span className="inline-block h-1 w-10 rounded bg-white !mt-8 !mb-6"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">Rahul Mehra
</h2>
      <p className="text-gray-500"> Intraday Trader</p>
    </div>
  </div>
</section>
  )
}

export default Testimonial
