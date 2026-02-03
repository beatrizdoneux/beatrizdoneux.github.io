import Section from "../helpers/Section"
import Flower from "../Flower"
import Icon from "../helpers/Icon"

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-6 lg:px-8">

            <div className="mt-2 mb-7 text-left ">
                <p className="text-5xl mb-3 md:text-7xl font-title uppercase">Beatriz Doneux</p>
                <p className="text-2xl md:text-4xl font-title uppercase mb-5">Full stack developer</p>
                <p className="paragraph">I build clean, accessible front-end experiences at the intersection of design and code.</p>
            </div>
            <div className="flex gap-5">
                <Icon href="mailto:beatrizdoneux@outlook.com" label="" icon="fa-regular fa-envelope" />
                <Icon href="https://www.linkedin.com/in/beatrizdoneux/" label="" icon="fa-brands fa-linkedin-in" />
                <Icon href="https://github.com/beatrizdoneux" label="" icon="fa-brands fa-github" />

            </div>

            {/* <div className="flex-1 min-h-0 flex items-center justify-center w-full">
                <Flower className="max-h-full max-w-1/2 stroke-green fill-green dark:fill-white dark:stroke-white" />
            </div> */}
        </div>
    )
}

