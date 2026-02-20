import { useEffect } from "react"
import { Switch } from "@headlessui/react"
import { SunIcon } from "@heroicons/react/24/solid"
import { MoonIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ThemeContext } from "../../App"

export default function DarkModeToggle() {
    
    const {darkTheme, toggleTheme} = useContext(ThemeContext)

    useEffect(() => {
        const root = document.documentElement;

        if (darkTheme) {
            root.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            root.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkTheme]);

    return (
        <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            className="group inline-flex h-6 w-11 items-center rounded-full my-6 bg-accent-2 transition data-checked:bg-accent-1 hover:cursor-pointer"
        >
            <span className="size-5 translate-x-1 rounded-full transition group-data-checked:translate-x-5" >
                {darkTheme ? <MoonIcon /> : <SunIcon />}
            </span>
        </Switch>
    )
}
