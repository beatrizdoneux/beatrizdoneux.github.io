import React from "react"

export default function Section({title, children, className=""}) {
    return(
        <div className={`mx-auto max-w-7xl mt-10 px-6 py-2 sm:px-6 lg:px-8 font-body lg:flex lg:gap-20 lg:mb-20 ${className}`}>
            <div className="font-title uppercase text-center text-4xl mb-6 md:text-6xl md:mb-10" >
                <h2>{title}</h2>
            </div>
            <div className="lg:flex-1">
            {children}
            </div>
        </div>
    )
}