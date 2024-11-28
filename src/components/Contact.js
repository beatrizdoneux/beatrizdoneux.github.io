import { Button, Card, Col, Container, Form, Image, Row, Stack } from "react-bootstrap"
import Section from "./templates/Section"
import leaves from "../assets/contact/leaves.png"

const Contact = () => {
    return (
        <Section sectionName="Let's work together!" id="contact">
            <Row>
                <ContactCard
                    title="Get serious"
                    href="#"
                    icon="fa-regular fa-file"
                >
                    {/* <p>Let's get serious</p> */}
                    <p>Download my resume <a href="/Beatriz_Doneux_Resume.pdf" download="/Beatriz_Doneux_Resume.pdf" target="_blank" >here</a></p>
                </ContactCard>

                <ContactCard
                    title="Say hello"
                    href="mailto:beatrizdoneux@outlook.com"
                    icon="fa-regular fa-envelope"
                >
                    {/* <p>I'd love to hear from you!</p> */}
                    <p>Email me at <a href="mailto:beatrizdoneux@outlook.com">beatrizdoneux@outlook.com</a></p>
                </ContactCard>

                <ContactCard
                    title="Connect"
                    href="https://www.linkedin.com/in/beatrizdoneux/"
                    icon="fa-brands fa-linkedin-in"
                >
                    {/* <p>Let's connect!</p> */}
                    <p>Find me on <a href="https://www.linkedin.com/in/beatrizdoneux/" target="_blank">LinkedIn</a></p>
                </ContactCard>

                <ContactCard
                    title="See some code!"
                    href="https://github.com/beatrizdoneux"
                    icon="fa-brands fa-github"
                >
                    {/* <p>See my code!</p> */}
                    <p>Check out what I'm up to on <a href="https://github.com/beatrizdoneux" target="_blank">Github</a></p>
                </ContactCard>
                <Col sm={12} className="mt-3 mb-3 d-flex justify-content-center flex-wrap">
                    <Image src={leaves} className="mt-5 mb-3 mx-auto" fluid style={{maxWidth: "110px"}} aria-hidden="true"/>
                </Col>
            </Row>
        </Section >
    )
}

const ContactCard = ({ title, href, icon, children }) => {
    return (
        <Col sm={12} md={6} className="mt-3">
            <Card className="rounded-4 border border-1 shadow-sm h-100">
                <Card.Header className="border-bottom border-1 d-flex justify-content-between align-items-center">
                    <h3 className="m-0 fs-4">
                        {/* <span className="fs-5 text-warning me-2">
                        <i class="fa-solid fa-check"></i>
                        </span> */}
                        {title}
                    </h3>
                    <span href={href}><i class={`${icon}`} aria-hidden="true" ></i></span>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                    {children}
                    {/* <a href={href} className="ms-auto text-warning"><i class="fa-solid fa-arrow-right"></i></a> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Contact