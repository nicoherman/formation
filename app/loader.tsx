import React from 'react'

export default function loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className="animate-spin rounded--full h-32 w-32 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  )
}