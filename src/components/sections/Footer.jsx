import DarkModeToggle from "../helpers/DarkModeToggle";
import Section from "../helpers/Section";

export default function Footer() {
    return (
        <footer className="max-w-md pb-16 text-sm sm:pb-0">
            <div className="text-left items-center flex flex-col gap-2 items-start">
                <p>&copy; Beatriz Doneux</p>
                <p>Built with React and Tailwind CSS on VSCode, deployed with Vite.</p>
                <DarkModeToggle />
            </div>
        </footer>
    )
}