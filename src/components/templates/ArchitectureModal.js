import { Button, Container, Modal } from "react-bootstrap";

function ArchitectureModal({ projectName, frontEndStack, backEndStack, otherTechs, onHide, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>System Architecture - {projectName}</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><span>Front-End: </span>{frontEndStack}</p>
                <p><span>Back-End: </span>{backEndStack}</p>
                <p><span>Other technologies: </span>{otherTechs}</p>
                <Container fluid className="p-0 d-flex justify-content-end">
                    <Button onClick={onHide}>Close</Button>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default ArchitectureModal;
