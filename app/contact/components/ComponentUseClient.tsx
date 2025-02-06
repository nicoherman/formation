"use client" // Pour utiliser des fonctionnalitées spécifiques aux clients

import React from 'react'
import { useState, useEffect } from 'react'

export default function ComponentUseClient() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("rendu client")
    }, []);

  return (
    <div>
        <p className='text-center'>Compteur: {count}</p>
        <button className='bg-sky-500 rounded-sm p-3 mt-20 hover:bg-sky-700 ...' onClick={ ()=>setCount(count + 1) }>Incrementer</button>
    </div>
  )
}