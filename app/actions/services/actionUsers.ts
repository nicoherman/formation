"use server"

import fs from 'fs'
import path from 'path'

import { User } from '@/types/types'

const dataPath = path.join(process.cwd(), 'data.json')

const readUsers = (): User[] => {
    const jsonData = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(jsonData)
}

const writeUsers = (users: User[])=> {
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2))
}

export const getAllUsers = async () : Promise<User[]> => {
    try {
        return readUsers()
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getUserById = async (id: number) : Promise<User | undefined> => {
    try {
        const users = readUsers()
        return users.find(user => user.id === id)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const createUser = async (age:number, name: string, gender: string, email: string, country: string) : Promise<User | undefined> => {
    try {

        const users = readUsers()
        const newUser : User = {
            id: users.length + 1, 
            age, 
            name, 
            gender, 
            email, 
            country}

            users.push(newUser)
            writeUsers(users)
            return newUser

    } catch (error: any) {
        throw new Error(error)
    }
}
export const updateUser = async (id: number, age?:number, name?: string, gender?: string, email?: string, country?: string) : Promise<User | undefined> => {
    try {

        const users = readUsers()
        const index = users.findIndex(user => user.id === user.id)

        if(index === -1){
            throw new Error('User not found')
        }

        users[index] = {
            ...users[index], 
            ...(age && {age}), 
            ...(name && {name}), 
            ...(gender && {gender}), 
            ...(email && {email}), 
            ...(country && {country}) }

        writeUsers(users)

        return users[index]

    } catch (error: any) {
        throw new Error(error)
    }
}
export const deleteUser = async (id: number) : Promise<{message} |undefined> => {
    try {

        const users = readUsers()
        const index = users.findIndex(user => user.id === user.id)

        if(index === -1){
            throw new Error('User not found')
        }

        users.splice(index, 1)

        writeUsers(users)
        return {message: 'User deleted successfully'}

    } catch (error: any) {
        throw new Error(error)
    }
}