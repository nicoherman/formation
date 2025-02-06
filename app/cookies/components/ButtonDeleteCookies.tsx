"use client"

import React from 'react'

export default function ButtonDeleteCookies() {

    const handleClearCookies = async ()=> {

        try {

            const response = await fetch('/api/deleteCookies', {
                method: 'DELETE',
            })

            if(response.ok) {
                const data = await response.json()
                console.log(data)
                alert("Cookies supprimés")
            }else{
                alert("Erreur lors de la suppression des cookies")
            }
            
        } catch (error) {
            alert("Erreur lors de la suppression des cookies")
        }
    }

  return (
    <button onClick={handleClearCookies} className='bg-red-500 hover:bg-red-800 text-white rounded-md p-2'>
        Supprimer tous les cookies
    </button>
  )

}