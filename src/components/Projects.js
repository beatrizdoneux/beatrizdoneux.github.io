import { Card, Carousel, Col, Container } from "react-bootstrap"
import Getchup from "./projects/Getchup"

const Projects = () => {
    return (
        <Container className="min-vh-100 mt-5 pt-5" id="projects">
            <h2>Projects</h2>

            <Getchup/>

            <p>You can check my latest project <span><a href="https://getchup.ca" target="_blank" className="link-underline link-underline-opacity-0 link-info">here</a></span></p>
        </Container>
    )
}

export default Projects