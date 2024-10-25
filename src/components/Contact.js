import { Button, Card, Col, Form, Row } from "react-bootstrap"
import Section from "./templates/Section"

const Contact = () => {
    return (
        <Section sectionName="Let's make something great!" id="contact">
            <Row>
                <Col sm={12} lg={4}>
                    <h3 className="fs-4">Practical:</h3>
                </Col>
                <Col sm={12} lg={4}>
                    <h3 className="fs-4">Social:</h3>
                </Col>
                <Col sm={12} lg={4}>
                    <h3 className="fs-4">Serious version:</h3>
                </Col>
            </Row>
        </Section>
        // <div className="container" id="contact">
        //     <h2>Let's get in touch!</h2>
        //     <p>Connect with me on <span><a href="https://www.linkedin.com/in/beatrizdoneux/" className="link-underline link-underline-opacity-0 link-info">LinkedIn</a></span></p>
        //     <p>Send me an <span><a href="mailto:beatrizdoneux@outlook.com" className="link-underline link-underline-opacity-0 link-info">email</a></span></p>
        // </div>
    )
}

export default Contact