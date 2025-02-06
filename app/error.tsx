"use client"

import React from 'react'
import { useEffect } from 'react'

export default function Error({error, reset} : {error: Error; reset: ()=> void}) {

    useEffect(()=>{
        console.error(error)
    }, [error])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className="text-2xl font-bold text-red-600">Oups, il y a une erreur</h2>
        <p>{error.message}</p>
        <button onClick={()=>reset()} className='p-2 text-white bg-blue-500 rounded-md'>Réessayer</button>
    </div>
  )
}
