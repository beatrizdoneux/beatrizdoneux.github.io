import { Col, Row } from "react-bootstrap"
import Getchup from "./projects/Getchup"
import Section from "./templates/Section"
import Lumiere from "./projects/Lumiere"

const Projects = () => {
    return (
        <Section sectionName="Projects" id="projects" className="">
            <Row>
                <Getchup />
                <Lumiere />
            </Row>
        </Section>
    )
}

export default Projects