import { Container } from "react-bootstrap"

const Section = ({sectionName, id, children}) => {
    return (
        <Container className="mb-4 pt-5 d-flex flex-column min-vh-100" id={id}>
            <h2 className="text-center flex-grow-0 flex-shrink-1 py-1 border-bottom border-warning border-5 align-self-center mb-4 mt-4">{sectionName}</h2>
            {children}
        </Container>
    )
}

export default Section