"use client"

import React from 'react'

export default function ButtonCookiePersistent() {

    const handleCreateCookiePersistent = async ()=> {
        await fetch('/api/cookiesPersistent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cookieName: 'CookiePersistent', cookieValue: 'Valeur du cookie persistent' })
        });
        alert('Cookie persistent créé')
    }

  return (
    <button onClick={handleCreateCookiePersistent} className='bg-green-500 hover:bg-green-800 text-white rounded-md p-2'>
        Créer un cookie persistent
    </button>
  )
}