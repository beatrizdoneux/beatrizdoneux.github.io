import Card from "../helpers/Card";
import Section from "../helpers/Section";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Work() {
    return (
        <Section title="Work">
            <div className="flex flex-col gap-15">
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
            </div>
        </Section>
    )
}

function ProjectCard({ title, description, link, tags }) {
    return (
        <Card link={link}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center md:justify-start md: gap-8">
                    <h3 className="heading-3">{title}</h3>
                    <ArrowUpRightIcon aria-hidden="true" className="size-4 text-green" />
                </div>

                <p className="paragraph">{description}</p>

                <div className="flex gap-3 flex-wrap mt-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-2xl bg-green/30 py-1 px-3 text-blue text-sm dark:text-white">{tag}</span>
                    ))}
                </div>
            </div>

            <span className="sr-only">Open project in new tab</span>
        </Card>
    )
}