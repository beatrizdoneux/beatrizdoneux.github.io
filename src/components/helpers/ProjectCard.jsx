import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Card from "./Card";

export default function ProjectCard({ title, description, link, tags }) {
    return (
            <Card link={link}>
                <div className="flex justify-between items-center">
                    <h3 className="font-title uppercase text-2xl">{title}</h3>
                    <ArrowUpRightIcon aria-hidden="true" className="size-6 text-green" />
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