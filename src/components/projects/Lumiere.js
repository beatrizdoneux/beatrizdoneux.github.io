import { useState } from 'react';
import ProjectTemplate from "../templates/ProjectTemplate"
import { Button } from "react-bootstrap"

const Lumiere = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ProjectTemplate
            className=""
            projectName="Lumière"
            projectDescription="Web application designed specifically for salon businesses to efficiently manage their inventory using cloud technology, keeping track of stock level and minimizing product wastage."
            features="Barcode scanning, product analytics and reporting, expiration tracking and reminder, low stock alert"
            techStack="React, Material UI, AWS, MongoDB"
            frontEndStack="React Native, Netlify, QuaggaJS, Material UI"
            backEndStack="AWS, NodeJS, Express"
            otherTechs="MongoDB, Firebase"
            modalShow={modalShow}
            setModalShow={setModalShow}
        >
            <Button variant="light" className="me-1" onClick={() => setModalShow(true)}>System Architecture</Button>
            {/* <Button variant="light">Mockups</Button> */}
        </ProjectTemplate>
    )
}

export default Lumiere