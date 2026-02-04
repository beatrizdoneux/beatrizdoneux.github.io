export default function Section({id, title, children, className=""}) {
    return(
        <section id={id} className={`mb-16 scroll-mt-16 flex flex-col gap-5 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}>
                <h2>{title}</h2>
            {children}
        </section>
    )
}