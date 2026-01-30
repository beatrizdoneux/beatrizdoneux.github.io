import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react'



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
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray transition data-checked:bg-green hover:cursor-pointer"
        >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
        </Switch>
    )
}
