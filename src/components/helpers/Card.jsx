export default function Card({ link, children, className="" }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${className}`}
        >
            {children}
        </a>
    )
}