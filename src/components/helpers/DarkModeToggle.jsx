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
            className="group inline-flex h-6 w-11 items-center rounded-full my-5 bg-accent-2 transition data-checked:bg-accent-1 hover:cursor-pointer"
        >
            <span className="size-5 translate-x-1 rounded-full transition group-data-checked:translate-x-5" >
                {enabled ? <MoonIcon /> : <SunIcon />}
            </span>
        </Switch>
    )
}
