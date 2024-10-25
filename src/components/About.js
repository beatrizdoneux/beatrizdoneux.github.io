import { Badge, Col, Container, Row } from "react-bootstrap"
import Section from "./templates/Section"

const frontEnd = ["JavaScript", "React", "HTML", "CSS", "SASS", "Bootstrap", "Material UI", "Gluestack", "Netlify", "Expo Go", "Zustand", "Tanstack"]
const backEnd = ["Express", "NodeJS", "AWS", "Docker"]
const others = ["JWT", "OAuth", "OpenAI"]
const databases = ["MongoDB", "Firebase"]

const About = () => {
    return (
        <Section sectionName="who am I?" id="about">
            <Row className="mt-2">
                <Col sm={12} md={6} className="mb-3">
                <h3 className="fs-5 mb-2">About life:</h3>
                    <p>Coder by love, airplane pilot by trade, martial artist by a miracle.</p>
                    <p>Learned to code working in aviation, decided to then make a living out of it.</p>
                    <p>Post-grad web and mobile developer with a love for clean code, responsive design, and the smell of freshly brewed JavaScript in the morning.</p>
                    <p>Enjoy doing puzzles, learning new things and baking/eating cake.</p>
                    <p></p>
                </Col>
                <Col sm={12} md={6}>
                    <h3 className="fs-5 mb-2">Experience points:</h3>
                    <ExperienceSection
                        title="Front-End"
                        array={frontEnd}
                    />
                    <ExperienceSection
                        title="Back-End"
                        array={backEnd}
                    />
                    <ExperienceSection
                        title="Databases"
                        array={databases}
                    />
                    <ExperienceSection
                        title="Other technologies"
                        array={others}
                    />
                    

                </Col>
            </Row>
        </Section>
    )
}

const ExperienceSection = ({title, array}) => {
    return (
        <Container>
            <Badge bg="light" className="p-2 border border-2 border-secondary me-2 mb-2 text-dark">{title}</Badge>
            {
                array.map((badge, index) => (
                    <Badge key={index} bg="light" className={`p-2 text-dark border border-1 me-2 mb-2`}>
                        {badge}
                    </Badge>
                ))
            }
        </Container>
    )
}

export default About