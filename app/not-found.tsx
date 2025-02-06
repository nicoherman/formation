"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PageNotFound() {

  const ImageUrl = "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f875057f08a451c5a6b43eb0/gfg.jpg"

  return (
<div className="flex h-screen flex-col bg-black">
<Image 
          src={ImageUrl}
          width={1920} 
          height={1400}
          alt="Erreur 404 - Page Introuvable"
          onLoad={()=>{
            console.log("Image chargée")
          }}
          onError={()=>{
            console.log("Chargement interrompu")
          }}
          className='h-500 w-full object-cover'
         />

  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
</div>

  )
}