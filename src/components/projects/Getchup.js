import { useState } from 'react';
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ArchitectureModal from '../ArchitectureModal';


const Getchup = () => {

    const [index, setIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);

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
            <Container>
                <h3>Getchup</h3>
                <Container>
                    <Row>
                        <Col xs={12} md={5} lg={7} className="d-flex flex-column align-items-start">
                            <p>A mobile application that helps users with ADHD enhance their focus and productivity through attainable daily goals and smart reminders.</p>
                            <p>It features an AI-powered task divider for managing tasks, a focus timer to help the user keep calm and functions to improve concentration.</p>
                            <p><span>My role: </span>Front-end lead, project landing page, research and training on Gluestack UI, local notifications POC and implementation with Expo, home and calendar pages.</p>

                            <Container fluid className="p-0">
                                <Button variant="primary" className="me-1" onClick={() => setModalShow(true)}>System Architecture</Button>
                                <Button variant="info" href="https://getchup.ca" target="_blank" className="me-1">Project website</Button>
                            </Container>
                        </Col>
                        <Col xs={0} md={1}></Col>
                        <Col xs={12} md={6} lg={4} className="position-relative">
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
                        </Col>
                    </Row>
                </Container>
            </Container>

            <ArchitectureModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                projectName="Getchup"
                frontEndStack="React Native, Expo, Gluestack, Zustand, Tanstack"
                backEndStack="Nginx, PM2, NodeJs, Express"
                otherTechs="JWT, OpenAI, Amazon S3, MongoDB"
            />
        </>
    );
}

export default Getchup;
