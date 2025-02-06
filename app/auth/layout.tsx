import React from "react";
import MenuAuth from "./components/MenuAuth";

export default function AuthLayout({children} : Readonly<{children: React.ReactNode}>) {
    return(
        <>
            <MenuAuth/>
            {children}
        </>
    )
}