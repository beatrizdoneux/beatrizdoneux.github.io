import { useState } from 'react';
import ProjectTemplate from "../templates/ProjectTemplate"
import { Button } from "react-bootstrap"

const Generocity = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ProjectTemplate
            projectName="GeneroCity"
            isTeamProject={true}
            projectDescription="Conceptual project of a mobile app of an exchange marketplace."
        >
            <p><span className="me-1">Possible features:</span>Post/check products based on location, filter by distance radius and product category, instant messaging, rating system</p>
            {/* <Button variant="light">Mockups</Button> */}
        </ProjectTemplate>
    )
}

export default Generocity