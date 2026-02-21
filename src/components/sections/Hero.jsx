import Icon from "../helpers/Icon"

import DarkModeToggle from "../helpers/DarkModeToggle"
import Navbar from "./Navbar"

export default function Hero() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1><a href="/" >Beatriz Doneux</a></h1>
                <h2 className="!text-lg mt-4 sm:text-xl">Full stack developer</h2>
                <p className="mt-4 max-w-xs">I build clean, accessible things for the web.</p>

                <Navbar />

            </div>
            
            <DarkModeToggle />

            <ul className="mt-8 flex items-center" aria-label="Social media and resumé">
                <li className="mr-5 shrink-0 text-xs">
                    <Icon href="mailto:beatrizdoneux@outlook.com" label="Email" icon="fa-regular fa-envelope" />
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <Icon href="https://www.linkedin.com/in/beatrizdoneux/" label="LinkedIn" icon="fa-brands fa-linkedin-in" />
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <Icon href="https://github.com/beatrizdoneux" label="Github" icon="fa-brands fa-github" />
                </li>
                {/* <li>
                    <a className="rounded-lg bg-accent-2 py-1 px-3 hover:cursor-pointer dark:bg-accent-1 dark:text-primary-light">
                        Resume
                    </a>
                </li> */}
            </ul>
        </header>
    )
}

