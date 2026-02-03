import React from "react"

export default function Section({title, children, className=""}) {
    return(
        <div className={`mx-auto px-6 py-2 w-full font-body ${className}`}>
            <div className="font-title uppercase text-left text-3xl mb-6 " >
                <h2>{title}</h2>
            </div>
            <div className="flex flex-col gap-5">
            {children}
            </div>
        </div>
    )
}