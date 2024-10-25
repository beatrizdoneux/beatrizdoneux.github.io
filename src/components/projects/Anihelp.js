import { useState } from 'react';
import ProjectTemplate from "../templates/ProjectTemplate"
import { Button } from "react-bootstrap"

const Anihelp = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ProjectTemplate
            className=""
            projectName="AniHelp"
            isTeamProject={true}
            projectDescription="A web app that streamlines the process of reporting a sick, injured or dead animal, by determining the best suited care facility based on the user's location; therefore increasing the efficiency of the process and enhancing animal rescue results."
            features="Report incident, view reports nearby, track report status"
            techStack="HTML, Sass, Javascript, Bootstrap, Firebase, TomTom"
            frontEndStack="HTML, CSS, Javascript, Bootstrap, SASS"
            backEndStack="Firebase, NodeJs"
            otherTechs="TomTom Map API"
            modalShow={modalShow}
            setModalShow={setModalShow}
        >
            <Button variant="light" className="me-1 border border-1" onClick={() => setModalShow(true)}>System Architecture</Button>
            {/* <Button variant="light">Mockups</Button> */}
        </ProjectTemplate>
    )
}

export default Anihelp