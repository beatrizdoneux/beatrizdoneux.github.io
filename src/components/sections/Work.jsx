import Card from "../helpers/Card";
import Section from "../helpers/Section";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Work() {
    return (
        <Section id="work" title="Work">
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
                <div className="flex justify-between items-center md:justify-start md:gap-8">
                    <h3>{title}</h3>
                    <ArrowUpRightIcon aria-hidden="true" className="size-4 text-accent-2 dark:text-accent-1 dark:size-5" />
                </div>

                <div className="flex flex-col gap-2 lg:border-l-1 lg:border-primary-dark lg:dark:border-accent-1 lg:pl-4">

                    <p>{description}</p>

                    <div className="flex gap-3 flex-wrap mt-2">
                        {tags.map((tag) => (
                            <span key={tag} className="rounded-2xl border-1 border-accent-2 text-primary-dark py-1 px-3 text-sm dark:border-accent-1 dark:text-primary-light">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <span className="sr-only">Open project in new tab</span>
        </Card>
    )
}