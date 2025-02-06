"use client"

import React from 'react'

export default function ButtonCookieSession() {

    const handleCreateCookieSession = async ()=> {
        await fetch('/api/cookiesSession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cookieName: 'CookieSession', cookieValue: 'Valeur du cookie de session' })
        });
        alert('Cookie de session créé')
    }

  return (
    <button onClick={handleCreateCookieSession} className='bg-blue-500 hover:bg-blue-800 text-white rounded-md p-2'>
        Créer un cookie de session
    </button>
  )
}
