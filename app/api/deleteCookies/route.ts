import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {

    const response = NextResponse.json({ message: "Cookies supprimés" })

    const cookieNames = ["CookieSession", "CookiePersistent"]

    cookieNames.forEach(cookieName => {
        response.cookies.set(cookieName, '',{
            maxAge: -1,
            path: '/',
        })
    })

    return response;

}