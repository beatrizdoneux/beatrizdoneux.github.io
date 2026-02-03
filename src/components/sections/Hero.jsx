import Section from "../helpers/Section"
import Flower from "../Flower"

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8 font-title uppercase min-h-screen flex flex-col gap-5 items-center justify-evenly md:flex-row">

            <div className="mt-2 mb-10 text-center md:text-left">
                <p className="text-5xl mb-8 md:text-7xl">Hi, I'm Bea</p>
                <p className="text-2xl md:text-4xl">A front-end developer</p>
            </div>

            {/* THIS is the key */}
            <div className="flex-1 min-h-0 flex items-center justify-center w-full">
                <Flower className="max-h-full max-w-1/2 stroke-green fill-green dark:fill-white dark:stroke-white" />
            </div>

        </div>
    )
}
