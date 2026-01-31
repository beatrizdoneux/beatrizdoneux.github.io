import React from 'react';


export default function Section({children}) {
    return(
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8 font-body min-h-screen">
            {children}
        </div>
    )
}