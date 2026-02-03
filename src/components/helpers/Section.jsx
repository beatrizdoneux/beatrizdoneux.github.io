import React from "react"

export default function Section({title, children, className=""}) {
    return(
        <div className={`mx-auto max-w-7xl px-6 py-2 w-screen sm:px-6 lg:px-8 font-body lg:flex lg:gap-20 lg:mb-20 ${className}`}>
            <div className="font-title uppercase text-left text-3xl mb-6 md:text-6xl md:mb-10" >
                <h2>{title}</h2>
            </div>
            <div className="flex flex-col gap-5">
            {children}
            </div>
        </div>
    )
}