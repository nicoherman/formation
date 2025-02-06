import React from 'react'
import { Metadata } from 'next'
import ComponentUseClient from './components/ComponentUseClient'
import ComponentUseServer from './components/ComponentUseServer'
import ComponentForm from './components/ComponentForm'

export const metadata:Metadata = {
  title: 'Contact',
  description: 'Je suis une description',
  keywords: 'mot1, mot2, mot3'
}

export default function PageContact() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>Contact</h1>
        <ComponentUseClient />
        <ComponentUseServer />
        <ComponentForm />
    </div>
  )
}