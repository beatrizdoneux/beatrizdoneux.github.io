import { Container } from "react-bootstrap"

const Section = ({sectionName, children}) => {
    return (
        <Container className="mt-5 pt-5 d-flex flex-column" id="projects">
            <h2 className="text-center flex-grow-0 flex-shrink-1 py-1 border-bottom border-warning border-5 align-self-center mb-3">{sectionName}</h2>
            {children}
        </Container>
    )
}

export default Section