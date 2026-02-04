const navigation = [
    { name: 'Home', to: '#', current: true },
    { name: 'About', to: '#', current: false },
    { name: 'Work', to: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-3 active" href="#about">
                        <span className="text-lg font-title uppercase text-gray group-hover:text-primary-dark">
                            About
                        </span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#work">
                        <span className="text-lg font-title uppercase text-gray group-hover:text-primary-dark">
                            Work
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
