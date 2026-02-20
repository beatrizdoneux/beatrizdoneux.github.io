import About from "./sections/About"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Work from "./sections/Work"

export default function Home() {
    return (
        <>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Hero className="" />
                    <main className="pt-24 lg:w-[60%] lg:py-24">
                        <About />
                        <Work />
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    )
}