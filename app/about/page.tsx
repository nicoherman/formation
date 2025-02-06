import React from 'react'
import ComponentAdmin from './components/ComponentAdmin';
import ComponentUser from './components/ComponentUser';

export default function PageAbout() {

  const user = {
    role: 'admin'
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>About</h1>
        { user?.role === 'admin' ? <ComponentAdmin /> : <ComponentUser /> }
    </div>
  )
}