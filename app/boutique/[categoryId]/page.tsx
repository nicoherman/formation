"use client"

import React from 'react'
import { useParams, notFound } from 'next/navigation'

export default function PageCategory() {

    const params = useParams()
    const categoryId = params.categoryId

    if(categoryId === "hello"){
      notFound()
    }

    if(categoryId === "salut"){
      return <div>Vous n&apos;avez pas accès</div>
    }


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>
            Boutique
        </h1>
        <h2 className='text-3xl mt-5 font-black uppercase'>{categoryId}</h2>
    </div>
  )
}
