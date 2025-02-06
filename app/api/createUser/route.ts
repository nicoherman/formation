import { NextRequest, NextResponse } from "next/server";

import fs from 'fs'
import path from "path";

import {User} from '@/types/types'
import users from '@/data.json'

export async function POST(request : NextRequest) {

    try {

        const body = await request.json()
        const {age, name, gender, email, country} = body

        const filePath = path.join(process.cwd(), 'data.json')
        const jsonData = fs.readFileSync(filePath, 'utf-8')
        const data : User[] = JSON.parse(jsonData)

        const newUser = {
            id: data.length + 1,
            age,
            name,
            gender,
            email,
            country
        }

        data.push(newUser)

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

        return NextResponse.json(newUser, {status: 201})

    } catch (error: any) {
        return NextResponse.json({message: 'Il y a eu une erreur'}, {status: 500})
    }
}