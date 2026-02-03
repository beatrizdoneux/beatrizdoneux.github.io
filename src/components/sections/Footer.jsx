import DarkModeToggle from "../helpers/DarkModeToggle";
import Section from "../helpers/Section";

export default function Footer() {
    return (
        <div className="mx-auto w-full mt-10 px-6 py-2 sm:px-6 ">
            <div className="text-left items-center flex flex-col gap-2 items-start">
                <p className="paragraph">&copy; Beatriz Doneux</p>
                <p className="paragraph">Built with React and Tailwind CSS on VSCode, deployed with Vite.</p>
                <DarkModeToggle className="" />
            </div>
        </div>
    )
}