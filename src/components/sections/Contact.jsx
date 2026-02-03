import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Card from "../helpers/Card"
import Section from "../helpers/Section"

library.add(fas, far, fab)

export default function Contact() {
    return (
        <Section title="Contact">
            <p className="paragraph">I'd love to hear from you! Let's...</p>
            <div className="mt-5 md:mt-7 flex flex-col gap-6">
                <ContactCard
                    title="Chat"
                    description="Send me an email."
                    link="mailto:beatrizdoneux@outlook.com"
                    icon="fa-regular fa-envelope"
                />
                <ContactCard
                    title="Connect"
                    description="Say hi on Linkedin."
                    link="https://www.linkedin.com/in/beatrizdoneux/"
                    icon="fa-brands fa-linkedin-in"
                />
                <ContactCard
                    title="Code!"
                    description="Check out my Github."
                    link="https://github.com/beatrizdoneux"
                    icon="fa-brands fa-github"
                />
            </div>
        </Section>
    )
}

function ContactCard({ title, description, link, icon }) {
    return (
        <Card link={link} className="!mb-3 !lg:mb-0">
            <div className="flex gap-5 items-center ">
                <FontAwesomeIcon icon={icon} className="text-2xl " />
                <div>
                    <h3 className="heading-3">{title}</h3>
                    <p className="paragraph mt-2">{description}</p>
                </div>
            </div>
        </Card>
    )
}