import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({ title, description, link, tags }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl mb-9 p-3 border-1 border-transparent hover:border-green/20"
        >
            <div className="flex justify-between items-center">
                <h3 className="font-title uppercase text-2xl">{title}</h3>
                <ArrowUpRightIcon aria-hidden="true" className="size-6" />
            </div>

            <p className="paragraph">{description}</p>

            <div className="flex gap-3 flex-wrap mt-6">
                {tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>

            <span className="sr-only">Open project in new tab</span>
        </a>

    )
}