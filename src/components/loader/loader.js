import React from 'react'

export default function Loader() {
  return (
    <div className='flex flex-row justify-center items-center gap-4 h-screen '>
      <span className=' h-7 w-7  md:h-10 md:w-10 rounded-full bg-gray-500 animate-ping '> </span>
      <span className=' h-7 w-7 md:h-10 md:w-10 rounded-full bg-blue-700 animate-ping '> </span>
      <span className=' h-7 w-7  md:h-10 md:w-10  rounded-full bg-gray-500 animate-ping '> </span>
      <span className=' h-7 w-7 md:h-10 md:w-10 rounded-full bg-blue-600 animate-ping '> </span>
    </div>
  )
}
