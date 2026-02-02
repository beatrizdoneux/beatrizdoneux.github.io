import DarkModeToggle from "../helpers/DarkModeToggle";
import Section from "../helpers/Section";

export default function Footer() {
    return (
        <Section className="">
            <div className="text-center">
            <p className="paragraph">&copy; Beatriz Doneux</p>
            <p className="paragraph">Built with React and Tailwind CSS on VSCode, deployed with Vite.</p>
            <DarkModeToggle className="mt-9" />
            </div>
        </Section>
    )
}