
import React from 'react'

const CP1 = (parms) => {
  return (
    <div className="flex relative !pt-10 !pb-20 sm:items-center md:w-2/3 !mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-white pointer-events-none"></div>
    </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full !mt-10 sm:!mt-0 inline-flex items-center justify-center bg-white text-black relative z-10 title-font font-medium text-sm">{ parms.id}</div>
    <div className="flex-grow md:!pl-8 !pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24 bg-white text-black rounded-full inline-flex items-center justify-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          {parms.icon}
        </svg>
      </div>
      <div className="flex-grow sm:!pl-6 !mt-6 sm:!mt-0">
                  <h2 className="font-medium title-font text-white mb-1 text-xl">{parms.name}</h2>
                  <p className="leading-relaxed">{parms.dp}</p>
      </div>
    </div>
  </div>
  )
}

export default CP1
