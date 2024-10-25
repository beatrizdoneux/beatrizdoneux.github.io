import { useState } from 'react';
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ArchitectureModal from '../templates/ArchitectureModal';
import ProjectTemplate from '../templates/ProjectTemplate';

const Getchup = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <ProjectTemplate
                projectName="Getchup"
                contentFirstColumn={<FirstColumn setModalShow={setModalShow} />}
                contentSecondColumn={<SecondColumn />}
                frontEndStack="React Native, Expo Go, Gluestack, Zustand, Tanstack"
                backEndStack="Amazon EC2, Nginx, PM2, Docker, NodeJs, Express"
                otherTechs="JWT, OpenAI, Amazon S3, MongoDB, Github actions"
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </>
    )
}

const FirstColumn = ({ setModalShow }) => {
    return (
        <>
            <p>A mobile application that helps users with ADHD enhance their focus and productivity through attainable daily goals and smart reminders.</p>
            <p>It features an AI-powered task divider for managing tasks, a focus timer to help the user keep calm and functions to improve concentration.</p>
            <p><span>My role: </span>Front-end lead, project landing page, research and training on Gluestack UI, local notifications POC and implementation with Expo, home and calendar pages.</p>

            <Container fluid className="p-0">
                <Button variant="outline-primary" className="me-1" onClick={() => setModalShow(true)}>System Architecture</Button>
                <Button variant="outline-info" href="https://getchup.ca" target="_blank" className="me-1">Project website</Button>
            </Container>
        </>
    )
}

const SecondColumn = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const images = [
        require("../../assets/getchup/mockup-0.png"),
        require("../../assets/getchup/mockup-1.png"),
        require("../../assets/getchup/mockup-2.png"),
        require("../../assets/getchup/mockup-3.png"),
        require("../../assets/getchup/mockup-4.png"),
        require("../../assets/getchup/mockup-5.png"),
        require("../../assets/getchup/mockup-8.png"),
        require("../../assets/getchup/mockup-9.png"),
        require("../../assets/getchup/mockup-10.png"),
    ];

    const blankPhone = require("../../assets/getchup/blank-iphone.png");
    return (
        <>
            <Image
                src={blankPhone}
                fluid
                className="position-absolute top-0 start-50 z-3"
                style={{ maxWidth: "95%", maxHeight: "100%" }}
                id="phone"
            />
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className=""
                indicators={false}
                touch={true}
                controls={true}
                fade
            >
                {images.map((img, i) => (
                    <Carousel.Item key={i} className="">
                        <div fluid className="d-flex justify-content-center align-items-center">
                            <Image src={img}
                                fluid
                                style={{ maxWidth: "70%", height: "50%", padding: "2px" }}
                                className="rounded-5"
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Getchup;
