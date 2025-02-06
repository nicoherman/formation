"use client"

import React from 'react'
import { useParams } from 'next/navigation'

export default function PageSingleCatchAllSegmentPage() {

    const params = useParams()
    const slug = Array.isArray(params.slug) ? params.slug : [params.slug]

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>
            posts
        </h1>
        <h2 className='text-3xl mt-5  font-black uppercase'>{slug?.length > 0 && slug.join('/')}</h2>
    </div>
  )
}