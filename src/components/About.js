import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap"
import Section from "./templates/Section"
import selfie from "../assets/about/self.JPEG"

const frontEnd = ["JavaScript", "React", "HTML", "CSS", "SASS", "Bootstrap", "Material UI", "Gluestack", "Netlify", "Expo Go", "Zustand", "Tanstack"]
const backEnd = ["Express", "NodeJS", "AWS", "Docker"]
const others = ["JWT", "OAuth", "OpenAI"]
const databases = ["MongoDB", "Firebase"]

const About = () => {
    return (
        <Section sectionName="who am I?" id="about">
            <Row className="mt-2 d-flex justify-content-center">
                <Col sm={12} md={6} className="mb-3">
                    <h3 className="fs-5 mb-2">In a word: curious</h3>
                    <Stack direction="horizontal">

                    <Container>
                        <p>Coder by love, aviation specialist by trade, martial artist by a miracle.</p>
                        <p>Learned to code working in aviation, decided to then make a living out of it.</p>
                        <p>Post-grad web and mobile developer with a love for clean code, responsive design, and the smell of freshly brewed JavaScript in the morning.</p>
                        <p>Enjoy doing puzzles, learning new things and baking/eating cake.</p>
                        <p>Detail-oriented, perseverant, curious, adaptable, self-driven, resourceful, cat person.</p>
                    </Container>
                    </Stack>
                </Col>

                <Col sm={12} md={6} className="mb-3">
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

                <Col sm={12} md={6} className="mt-3 mb-3 d-flex justify-content-center flex-wrap">
                    {/* <Container className=""> */}
                        <Image src={selfie} rounded className="mt-3 mb-3 w-75 mx-auto" aria-label="black and white looking annoyed while being hugged by her owner"/>
                        <p className="w-100 text-center">(I pretend that she likes hugs)</p>
                    {/* </Container> */}
                </Col>
            </Row>
        </Section>
    )
}

const ExperienceSection = ({ title, array }) => {
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