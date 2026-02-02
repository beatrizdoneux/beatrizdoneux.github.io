export default function Card({ link, children, className="" }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-2xl mb-5 p-3 border-1 border-green/20 hover:border-green/50 ${className}`}
        >
            {children}
        </a>
    )
}