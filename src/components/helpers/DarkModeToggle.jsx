import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
    const [enabled, setEnabled] = useState(() => localStorage.theme === "dark")

    useEffect(() => {
        const root = document.documentElement;

        if (enabled) {
            root.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            root.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [enabled]);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full my-5 bg-orange transition data-checked:bg-green hover:cursor-pointer md:h-8 md:w-13"
        >
            <span className="size-5 translate-x-1 rounded-full transition group-data-checked:translate-x-5 md:size-6 md:group-data-checked:translate-x-6" >
                {enabled ? <MoonIcon /> : <SunIcon />}
            </span>
        </Switch>
    )
}
