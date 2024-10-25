import React, { useEffect, useState } from 'react';
import "../App.css";
import { Col, Container, Image, Row } from 'react-bootstrap';

const Hero = () => {

    const img = require("../assets/hero/hero.png")

    return (
        <Container className="vh-100 gap-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center" id="hello">
            <Row>
                <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
                    <Container>
                        {/* <p className="fs-1 text-center">Hi, I'm Bea,</p> */}
                        <p className="fs-1 text-center">Hi, I'm Bea, and I write code!</p>
                        {/* <p className=" fs-4 text-center">A full stack developer</p> */}
                        <p className=" text-center">...and drink coffee</p>
                    </Container>
                </Col>
                <Col  sm={12} md={6}>
                    <Container>
                        <Image src={img} className="img-fluid" />
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

// flex-grow: 1; /* Ensures the hero section takes up remaining space */
// display: flex;
// flex-direction: column;
// justify-content: center; /* Centers content vertically */
// align-items: center; /* Centers content horizontally */

export default Hero