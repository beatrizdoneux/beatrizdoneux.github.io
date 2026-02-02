import React from 'react';


export default function Section({title, children}) {
    return(
        <div className="mx-auto max-w-7xl mt-10 px-6 py-2 sm:px-6 lg:px-8 font-body min-h-screen">
            <div className="font-title uppercase text-center text-4xl mb-6">
                <h2>{title}</h2>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}