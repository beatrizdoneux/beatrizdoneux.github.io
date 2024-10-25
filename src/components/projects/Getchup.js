import { useState } from 'react';
import ProjectTemplate from "../templates/ProjectTemplate"
import { Button } from "react-bootstrap"

const Getchup = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ProjectTemplate
            className=""
            projectName="Getchup"
            projectDescription="A mobile application that helps users with ADHD enhance their focus and productivity through attainable daily goals and smart reminders."
            features="Smart task divider, focus mode with timer, movement tracking"
            techStack="React, Gluestack, EC2, NGINX, Docker, OpenAI"
            frontEndStack="React Native, Expo Go, Gluestack, Zustand, Tanstack"
            backEndStack="Amazon EC2, Nginx, PM2, Docker, NodeJs, Express"
            otherTechs="JWT, OpenAI, Amazon S3, MongoDB, Github actions"
            modalShow={modalShow}
            setModalShow={setModalShow}
        >
            <Button variant="light" className="me-1" onClick={() => setModalShow(true)}>System Architecture</Button>
            <Button variant="light" href="https://getchup.ca" target="_blank" className="me-1">Project website</Button>
            {/* <Button variant="light">Mockups</Button> */}
        </ProjectTemplate>
    )
}

export default Getchup