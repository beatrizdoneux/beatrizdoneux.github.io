import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme'); //use local storage to persist even after page reloads
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="container=fluid text-center fixed-bottom border-top py-2 d-flex justify-content-evenly">
            <p className="m-0">&copy; Beatriz Doneux 2024</p>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="switchDarkMode"
                checked={isDarkMode}
                onChange={toggleDarkMode} />
                <label class="form-check-label" for="switchDarkMode">Dark mode</label>
            </div>
        </div>
    )
}

export default Footer