"use client"

import React from 'react'
import {useState, FormEvent } from 'react'
import AlertSuccess from '../../components/AlertSuccess'
import AlertError from '../../components/AlertError'

import {createUser} from '../services/actionUsers'
import { useRouter } from 'next/navigation'

export default function CreatePage() {

    const[age, setAge] = useState<number>(18)
    const[name, setName] = useState<string>('')
    const[gender, setGender] = useState<string>('')
    const[email, setEmail] = useState<string>('')
    const[country, setCountry] = useState<string>('')

    const[errors, setErrors] = useState<string | null>(null)
    const[success, setSuccess] = useState<string>('')

    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setErrors(null)
        setSuccess('')

        if (!age || !name || !gender || !email ||!country) {
            return setErrors('All fileds are required')
        }

        try {

            await createUser(age, name, gender, email, country)
            setSuccess(`utilisateur créé avec succès: ${name}`)
            setAge(18)
            setName('')
            setGender('')
            setEmail('')
            setCountry('') 
            router.push('/actions')


        } catch (error: any) {
            setErrors(error.message)
        }
    }


  return (

    <div className="bg-green-200 min-h-screen flex items-center">
    <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
    <h3 className='text-center mb-5 text-3xl text-gree'>AJOUTER UN NOUVEL UTILISATEUR</h3>
        <form onSubmit={handleSubmit} className='flex flex-col'>
        {success && AlertSuccess(success)}
        {errors && AlertError(errors)}
            <div className="flex items-center mb-5">
                <label className="w-20 inline-block text-right mr-4 text-gray-500">Age</label>
                <input 
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                    type="number"
                    placeholder='Indiquez votre Age'
                    required
                    value={age}
                    min={18}
                    max={100}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />
            </div>

            <div className="flex items-center mb-10">
                <label className="w-20 inline-block text-right mr-4 text-gray-500">Name</label>
                <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            type="text"
            placeholder='Indiquez votre nom'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
            </div>
            <div className="flex items-center mb-10">
                <label className="w-20 inline-block text-right mr-4 text-gray-500">Gender (Sexe)</label>
                <select className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            required
            value={gender}
            onChange={(option) => setGender(option.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>
            <div className="flex items-center mb-10">
                <label className="w-20 inline-block text-right mr-4 text-gray-500">Email</label>
                <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            type="email"
            placeholder='Indiquez votre email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            </div>
            <div className="flex items-center mb-10">
                <label className="w-20 inline-block text-right mr-4 text-gray-500">Country</label>
                <input className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            type="text"
            placeholder='Indiquez votre pays'
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
             />
            </div>
            <div className="text-right">
                <button type='submit' className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Créer</button>
            </div>
        </form>
    </div>
</div>
  )
}