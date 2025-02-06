"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {

  const pathname = usePathname()


  return (
    <nav className='bg-gray-600 p-3 text-white'>
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link href='/' className={pathname === "/" ? 'text-violet-400' : ''} >Home</Link>
          </li>
          <li>
            <Link href='/contact' className={pathname === "/contact" ? 'text-violet-400' : ''}>Contact</Link>
          </li>
          <li>
            <Link href='/login' className={pathname === "/login" ? 'text-violet-400' : ''} >Login</Link>
          </li>
          <li>
            <Link href='/register' className={pathname === "/register" ? 'text-violet-400' : ''}>Register</Link>
          </li>
          <li>
            <Link href='/archives/webdesign' className={pathname === "/archives/webdesign" ? 'text-violet-400' : ''}>WebDesign</Link>
          </li>
          <li>
            <Link href='/users' className={pathname === "/users" ? 'text-violet-400 ml-6' : 'ml-6'}>LES UTILISATEURS</Link>
          </li>
        </ul>
    </nav>
  )
}
