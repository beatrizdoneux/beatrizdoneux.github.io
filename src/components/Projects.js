import { Col, Row } from "react-bootstrap"
import Getchup from "./projects/Getchup"
import Section from "./templates/Section"
import Lumiere from "./projects/Lumiere"
import Anihelp from "./projects/Anihelp"
import Generocity from "./projects/Generocity"

const Projects = () => {
    return (
        <Section sectionName="I built this!" id="projects">
            <Row>
                <Getchup />
                <Lumiere />
                <Anihelp />
                <Generocity />
            </Row>
        </Section>
    )
}

export default Projects