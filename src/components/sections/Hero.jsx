import Section from "../helpers/Section";
import Flower from "../Flower";
import Flower2 from "../Flower2";

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8 font-title uppercase min-h-screen flex flex-col items-center justify-evenly borber-b-1 border-orange">
            <div className="mt-2 mb-10 text-center">
                <p className="text-5xl mb-8">Hi, I'm Bea</p>
                <p className="text-2xl">A front-end developer</p>
            </div>
            <div className="max-h-1/10">
                <Flower2 className="stroke-green fill-green dark:fill-white dark:stroke-white " />
            </div>
        </div>
    )
}