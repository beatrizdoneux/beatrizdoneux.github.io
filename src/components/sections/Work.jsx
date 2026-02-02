import ProjectCard from "../helpers/ProjectCard";
import Section from "../helpers/Section";

export default function Work() {
    return (
        <Section title="Work" >
            <ProjectCard
            title="Three JS"
            description="A compilation of projects created using ThreeJS, React Three Fiber and Blender."
            link=""
            tags={["ThreeJS", "Blender", "React Three Fiber"]}
            />

            <ProjectCard
            title="Getchup"
            description="Mobile application that helps users with ADHD enhance their focus and productivity through attainable daily goals and smart reminders."
            link=""
            tags={["React Native", "Open AI", "Zustand", "Tanstack"]}
            />

            <ProjectCard
            title="Lumière"
            description="A web application that helps beauty salon businesses to streamline their inventory management process and reduce product wastage."
            link=""
            tags={["MongoDB", "Express", "React", "NodeJS", "Firebase", "AWS"]}
            />
        </Section>
    )
}