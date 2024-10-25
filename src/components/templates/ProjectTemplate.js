import { Card, Col, Container, Image, Row } from "react-bootstrap"
import ArchitectureModal from "./ArchitectureModal"

const ProjectTemplate2 = ({ projectName, projectDescription, techStack, features, children, modalShow, setModalShow, ...props }) => {
    return (
        <Col sm={12} md={6} className="mt-3">
            <Card id={projectName} className="rounded-4 border border-1">
                <Card.Header className="border-bottom border-1">
                    <h3 className="m-0"><span className="fs-2 text-warning me-2">#</span>{projectName}</h3>
                </Card.Header>
                <Card.Body>
                    <p>{projectDescription}</p>
                    <p><span className="me-1">Tech Stack:</span>{techStack}</p>
                    <p><span className="me-1">Features:</span>{features}</p>
                    {children}
                </Card.Body>
            </Card>
            <ArchitectureModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                projectName={projectName}
                frontEndStack={props.frontEndStack}
                backEndStack={props.backEndStack}
                otherTechs={props.otherTechs}
            />
        </Col>
    )
}

export default ProjectTemplate2