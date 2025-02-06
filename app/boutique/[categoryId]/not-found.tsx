"use client"

import React from 'react'
import { useParams } from 'next/navigation'

export default function PageNotFound() {

    const params = useParams()
    const categoryId = params.categoryId


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>
            Oups - Categorie introuvable
        </h1>
        <h2 className='text-3xl mt-5  font-black uppercase'>{categoryId}</h2>
    </div>
  )
}