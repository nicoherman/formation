import { NextRequest, NextResponse } from "next/server";

import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data.json')

export async function PUT(req: NextRequest) {
    try {

        const {id, age, name, gender, email, country} = await req.json()

        const jsonData = (fs.readFileSync(dataPath, 'utf-8'))
        const users : {id: number, age:number, name: string, email: string, country: string}[] = JSON.parse(jsonData)

        const index = users.findIndex(user => user.id === parseInt(id))

        if(index === -1){
            return NextResponse.json({message: 'User not found'}, {status: 404})
        }

        users[index] = {
            ...users[index], 
            ...(age && {age}), 
            ...(name && {name}), 
            ...(gender && {gender}), 
            ...(email && {email}), 
            ...(country && {country}) }
        
        fs.writeFileSync(dataPath, JSON.stringify(users, null, 2))

        return NextResponse.json(users[index], {status: 200})
        
    } catch (error: any) {
        return NextResponse.json({message: 'Erreur durant le PUT', error}, {status: 500})
        
    }
}

