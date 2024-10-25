import React, { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';

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
        <footer>
                <Container className="py-2">
                    <Stack direction="horizontal" gap={3} className="justify-content-between">
                        <p className="m-0">&copy; Beatriz Doneux 2024</p>
                        {/* <Stack direction="horizontal" gap={2}>
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="switchDarkMode">
                                </label>
                                <input class="form-check-input" type="checkbox" role="switch" id="switchDarkMode"
                                    checked={isDarkMode}
                                    onChange={toggleDarkMode} />
                            </div>
                            {isDarkMode ? <i class="fa-solid fa-moon"></i> : <i class="fa-regular fa-moon"></i>}
                        </Stack> */}
                        <p>Made with <i class="fa-solid fa-heart"></i> and lots of <i class="fa-solid fa-mug-hot"></i></p>
                    </Stack>
                </Container>
        </footer>
    )
}

export default Footer