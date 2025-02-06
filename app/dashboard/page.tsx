import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Dashboard',
  description: 'Je suis une description',
  keywords: 'mot1, mot2, mot3'
}

export default function Dashboard() {
    return (
    <div className='w-full h-screen flex items-center justify-center'>
        <h1 className='text-3xl font-black uppercase'>
            Dashboard
        </h1>
    </div>
    );
  }