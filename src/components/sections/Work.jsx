import Card from "../helpers/Card";
import Section from "../helpers/Section";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

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

function ProjectCard({ title, description, link, tags }) {
    return (
            <Card link={link}>
                <div className="flex justify-between items-center">
                    <h3 className="heading-3">{title}</h3>
                    <ArrowUpRightIcon aria-hidden="true" className="size-6 text-green md:size-8" />
                </div>

                <p className="paragraph">{description}</p>

                <div className="flex gap-3 flex-wrap mt-6">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-2xl bg-green/30 py-1 px-4 text-blue text-base dark:text-white">{tag}</span>
                    ))}
                </div>

                <span className="sr-only">Open project in new tab</span>
            </Card>
    )
}