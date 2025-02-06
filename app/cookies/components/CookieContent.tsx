import React from 'react'

import ButtonCookieSession from './ButtonCookieSession'
import ButtonCookiePersistent from './ButtonCookiePersistent'
import ButtonDeleteCookies from './ButtonDeleteCookies';

export default function CookieContent() {
  return (
    <div className='w-full flex items-center justify-center gap-4 flex-col'>
        <ButtonCookieSession />
        <ButtonCookiePersistent />
        <ButtonDeleteCookies />
    </div>
  )
}