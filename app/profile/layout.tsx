import React, {Suspense} from 'react';

export default function ProfileLayout({primary, notification, analytics}: {primary: React.ReactNode, notification: React.ReactNode, analytics: React.ReactNode }){
    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <main>
                    {primary}
                </main>
            </Suspense>
            <hr /><br />
            <Suspense fallback={<div>loading...</div>}>
                <main>
                    {notification}
                </main>
            </Suspense>
            <hr /><br />
            <Suspense fallback={<div>loading...</div>}>
                <main>
                    {analytics}
                </main>
            </Suspense>
        </div>
    )
}