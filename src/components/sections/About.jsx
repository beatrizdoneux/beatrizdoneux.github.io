import Section from "../helpers/Section"

export default function About() {
    return (
        <Section id="about" title="About" aria-label="About me" >
            <div className="flex flex-col gap-4">
                <p>I'm a full stack developer focused on building clean, intuitive, and user-centered interfaces. I enjoy working at the intersection of design and development, creating responsive and accessible experiences with attention to detail and usability.</p>
                <p>My journey into tech began in the aviation industry, where I discovered coding and developed a strong interest in front-end development. I specialize in bringing designs to life through modern front-end technologies, smooth interactions, and scalable, component-based architectures, and I thrive in collaborative, fast-paced environments.</p>
                <p>Outside of work, I enjoy spending time in nature, reading sci-fi, and training kung fu. Martial arts has shaped how I approach my work—building patience, focus, and perseverance that carry into how I code.</p>
            </div>
        </Section>
    )
}