import CookieContent from "./components/CookieContent"
import ComponentCookiesServer from "./components/ComponentCookiesServer"

export default function PageCookies() {

  return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <h1 className='mb-6 text-3xl font-black uppercase'>
                COOKIES PAGE
            </h1>
            <CookieContent />
            <br />
            <ComponentCookiesServer />
        </div>
  )
}
