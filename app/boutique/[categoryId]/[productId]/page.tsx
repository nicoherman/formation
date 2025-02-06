"use client"

import React from 'react'
import { useParams, notFound } from 'next/navigation'

export default function PageCategory() {

    const params = useParams()
    const productId = params.productId

    if(productId === "ifone"){
      notFound()
    }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>
            Produit
        </h1>
        <h2 className='text-3xl mt-5 font-black uppercase'>{productId}</h2>
    </div>
  )
}