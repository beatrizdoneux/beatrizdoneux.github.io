import { Card, Col, Container, Image, Row } from "react-bootstrap"
import ArchitectureModal from "./ArchitectureModal"

const ProjectTemplate2 = ({ projectName, isTeamProject, projectDescription, techStack, features, children, modalShow, setModalShow, ...props }) => {
    return (
        <Col sm={12} md={6} className="mt-3">
            <Card id={projectName} className="rounded-4 border border-1 shadow-sm h-100">
                <Card.Header className="border-bottom border-1 d-flex justify-content-between align-items-center">
                    <h3 className="m-0 fs-4">
                        <span className="fs-5 text-warning me-2">
                            {/* <i class="fa-solid fa-check"></i> */}
                            {/* <i class="fa-solid fa-code"></i> */}
                        </span>
                        {projectName}
                    </h3>
                    <p className="m-0">{isTeamProject ? "#TeamWork!" : "#SoloProject"}</p>
                </Card.Header>
                <Card.Body className="px-4">
                    <p>{projectDescription}</p>
                    {!techStack ? "" : (
                        <p><span className="me-1">Tech Stack:</span>{techStack}</p>
                    )}
                    {!features ? "" : (
                        <p><span className="me-1">Features:</span>{features}</p>
                    )}
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