import { NextRequest, NextResponse } from "next/server";

import fs from "fs"
import path from "path";

import {headers} from "next/headers"

export async function GET(req : NextRequest) {

    const requestHeaders = await headers()
    console.log(`Header de la requète : ${requestHeaders}`)

    const authToken = requestHeaders.get('Authorization')
    console.log("Authorization : ", authToken)

    const filePath = path.join(process.cwd(), 'data.json')
    
    const data = await fs.promises.readFile(filePath, 'utf-8')

    const users = JSON.parse(data)

    return new NextResponse(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
        }
    })

}