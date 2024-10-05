import React, { useEffect, useState } from 'react';
import "../App.css";
import { Container } from 'react-bootstrap';

const Hero = () => {

    const texts = ["front-end developer", "mother of cats", "martial artist", "pilot", "lotr fan"];
    const [currentText, setCurrentText] = useState("front-end developer");

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setTimeout(() => {
                setCurrentText(texts[index]);
            }, 800);

            index += 1;

            if (index >= texts.length) {
                clearInterval(intervalId);
                index = 0;
            }
        }, 800);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container className="vh-100" id="hello">
        {/* <div className="d-flex flex-column justify-content-center align-items-center vh-100" id="hello"> */}
            <p className="fs-1">
                Hi, I'm Bea
            </p>
            <p className="px-0" id="title">
                <span className={`fs-5 ${currentText === texts[0] ? 'border-bottom border-5 border-info-subtle' : ''}`}>
                    {currentText}
                </span>
            </p>
        {/* </div> */}
        </Container>
    )
}

export default Hero