import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-10 md:py-12 md:px-10">
                <Hero />
                <div className="flex flex-col gap-10">
                    <About />
                    <Work />
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    )
}