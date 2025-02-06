"use client"

import { useState, useEffect, useTransition, FormEvent } from 'react'
import { useParams } from 'next/navigation'
import { User } from '@/types/types'
import Link from 'next/link'
import Alert from '../../../components/AlertSuccess';

export default function EditPage() {

    const { id } = useParams()
    const [user, setUser] = useState({age: 0, name: '', gender: '', email: '', country: ''})

    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')

    const [isPending, startTransition] = useTransition()

        useEffect(()=> {
            const fetchUserById = async ()=> {
                try{
                    startTransition(async ()=> {
                        const response = await fetch(`/api/getUserById?id=${id}`)
    
                        if(!response.ok){
                            throw new Error('User not found !')
                        }
    
                        const data : User = await response.json()
                        setUser(data)
                    })
                }catch(error: any){
                    setErrors(error.message)
                }
            }
    
            fetchUserById()
        }, [id])

        const handleSubmit = async (e: FormEvent) => {
            e.preventDefault()
            setErrors('')
            setSuccess('')

            try {

                startTransition(async ()=> {
                    const response = await fetch(`/api/editUser`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })

                    if(!response.ok){
                        throw new Error('An error occurred')
                    }

                    const data = await response.json()
                    setSuccess(`User updated successfully: ${data.name}`)
                })
                
            } catch (error: any) {
                setErrors(error.message)
            }
        }

        const handleChange = (e: FormEvent<HTMLInputElement>) => {
            const {name, value} = e.target as HTMLInputElement
            setUser(prevUser => ( {...prevUser, [name]: value} ))
        }

  return (
            <div className="bg-yellow-100 min-h-screen flex items-center">
            <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
            <h3 className='text-center mb-5 text-3xl text-gree'>MODIFIER : {user.name}</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                {errors && Alert(errors)}
                {success && Alert(success)}
                    <div className="flex items-center mb-5">
                        <label className="w-20 inline-block text-right mr-4 text-gray-500">Age</label>
                        <input 
                            className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                            type="number"
                            placeholder='Indiquez votre Age'
                            required
                            value={user.age}
                            onChange={handleChange}
                        />
                    </div>
        
                    <div className="flex items-center mb-10">
                        <label className="w-20 inline-block text-right mr-4 text-gray-500">Name</label>
                        <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                    type="text"
                    placeholder='Indiquez votre nom'
                    required
                    value={user.name}
                    onChange={handleChange}               />
                    </div>
                    <div className="flex items-center mb-10">
                        <label className="w-20 inline-block text-right mr-4 text-gray-500">Gender (Sexe)</label>
                        <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                    type="text"
                    placeholder='Indiquez votre sexe'
                    required
                    value={user.gender}
                    onChange={handleChange}                 />
                    </div>
                    <div className="flex items-center mb-10">
                        <label className="w-20 inline-block text-right mr-4 text-gray-500">Email</label>
                        <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                    type="email"
                    placeholder='Indiquez votre email'
                    required
                    value={user.email}
                    onChange={handleChange}                />
                    </div>
                    <div className="flex items-center mb-10">
                        <label className="w-20 inline-block text-right mr-4 text-gray-500">Country</label>
                        <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                    type="text"
                    placeholder='Indiquez votre pays'
                    required
                    value={user.country}
                    onChange={handleChange}
                     />
                    </div>
                    <div className="text-right">
                        <button type='submit' className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
