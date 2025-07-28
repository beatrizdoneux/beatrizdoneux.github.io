export default function ProjectCard({ href, className, children }) {
    return (
        <div className={className}>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer">
                {children}
            </a>
        </div>
    )
}