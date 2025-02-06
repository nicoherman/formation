import React from "react";

export default function Template({children}: {children: React.ReactNode}) {

    return(
        <div>
            <h1 className="p-2 bg-green-800 text-white">Template de page</h1>
            {children}
        </div>
    )
}