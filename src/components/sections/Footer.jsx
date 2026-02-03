import DarkModeToggle from "../helpers/DarkModeToggle";
import Section from "../helpers/Section";

export default function Footer() {
    return (
        <div className="mx-auto max-w-7xl mt-10 px-6 py-2 sm:px-6 ">
            <div className="text-center items-center">
                <p className="paragraph">&copy; Beatriz Doneux</p>
                <p className="paragraph">Built with React and Tailwind CSS on VSCode, deployed with Vite.</p>
                <DarkModeToggle className="mt-9" />
            </div>
        </div>
    )
}