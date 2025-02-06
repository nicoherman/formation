import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const {cookieName, cookieValue} = await request.json();

    const maxAge = 30 * 24 * 60 * 60 // 30 jours

    const response = NextResponse.json({ message: 'Cookie persistent créé' })

    response.cookies.set(cookieName, cookieValue, {
        path: '/',
        maxAge,
        httpOnly: true,
        // secure: true,
})

return response

}