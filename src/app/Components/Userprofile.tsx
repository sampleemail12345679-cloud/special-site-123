/* eslint-disable */
import React from 'react'

/* eslint-disable */
const Userprofile = ( props : any ) => {
  return (
    <div className="!p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:!mb-0 !mb-4 border-white border-t-2 border-b-2" src={ `${props.src ? props.src : "/unknown.jpg"} `} />
          <div className="flex-grow sm:!pl-8">
            <h2 className="title-font font-medium text-lg ">{props.name} </h2>
                  <h3 className="text-gray-500 !mb-3">{ props.rank}</h3>
                  <p className="!mb-4">{ props.cb}</p>
            
          </div>
        </div>
      </div>
  )
}

export default Userprofile
