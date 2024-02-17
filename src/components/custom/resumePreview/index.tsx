"use client";

import Heading from "@/components/custom/resumePreview/Heading";
import SideBarCard from "@/components/custom/resumePreview/SideBarCard";
import { Separator } from "@/components/ui/separator";
import {
    Minus as DateSeparatorIcon,
    Mail as MailIcon,
    Phone as PhoneIcon,
    Linkedin as LinkedinIcon,
    Github as GithubIcon,
} from "lucide-react";
import { useAppSelector } from "@/redux/store";

export default function ResumePreview() {
    const resume = useAppSelector((state) => state.resumeReducer);

    return (
        <section className="bg-white w-[7in] min-h-[9.25in] flex shadow-2xl">
            <aside className="bg-secondary ps-6 px-4 py-10 w-52 min-w-52 space-y-4">
                <p className="font-semibold">{resume.info.name}</p>
                {resume.info.bio.map((_bio) => (
                    <>
                        {_bio.checked && (
                            <p className="text-xs text-muted">{_bio.value}</p>
                        )}
                    </>
                ))}
                <Separator />
                <SideBarCard
                    icon={<MailIcon size="0.8em" />}
                    title="Email"
                    caption={resume.info.email}
                />
                <SideBarCard
                    icon={<PhoneIcon size="0.8em" />}
                    title="Phone"
                    caption={resume.info.phoneNumber}
                />
                <Separator />
                <SideBarCard
                    icon={<GithubIcon size="0.8em" />}
                    title="Github"
                    caption={resume.socials.github.url}
                />
                <SideBarCard
                    icon={<LinkedinIcon size="0.8em" />}
                    title="Linkedin"
                    caption={resume.socials.linkedin.url}
                />
                <Separator />
                <Heading>Expertise</Heading>
                <ul className="space-y-2 list-disc ms-3">
                    {resume.expertise.map((topic) => (
                        <li className="text-xs">{topic}</li>
                    ))}
                </ul>
                <Separator />
                <Heading>Integrations</Heading>
                <ul className="space-y-2 list-disc ms-3">
                    {resume.integrations.map((integration) => (
                        <li className="text-xs">{integration}</li>
                    ))}
                </ul>
            </aside>
            <section className="px-4 pe-6 py-10 space-y-6 w-full">
                <div>
                    <p className="font-semibold text-2xl mb-4">
                        {resume.info.position[0]}
                    </p>
                    <div>
                        <Heading>Projects</Heading>
                        <section className="space-y-4 w-ful">
                            {resume.projects.map((project) => (
                                <section className="p-4 rounded bg-secondary w-full space-y-2">
                                    <p className="font-semibold">
                                        {project.title}
                                    </p>
                                    <ul className="text-xs list-disc ms-3 space-y-1">
                                        {project.description.map((des) => (
                                            <li>{des.point}</li>
                                        ))}
                                    </ul>
                                    <div>
                                        <p className="text-xs font-semibold mb-1">
                                            Technologies Used
                                        </p>
                                        <div className="flex text-xs">
                                            {project.technologiesUsed.map(
                                                (tech, i) => (
                                                    <p>
                                                        {i !== 0 && (
                                                            <span className="me-1">
                                                                ,
                                                            </span>
                                                        )}
                                                        {tech}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </section>
                    </div>
                </div>
                <div>
                    <Heading>Work Experience</Heading>
                    <section className="space-y-4 w-ful">
                        {resume.experiences.map((experience) => (
                            <section className="w-full space-y-1">
                                <p className="font-semibold">
                                    {`${experience.position}, ${experience.company}`}
                                </p>
                                <div className="flex gap-1 align-middle text-muted">
                                    <p className="text-xs">
                                        {new Intl.DateTimeFormat("en-US", {
                                            dateStyle: "medium",
                                        }).format(experience.date.from)}
                                    </p>
                                    <DateSeparatorIcon
                                        size=".7em"
                                        className="my-auto"
                                    />
                                    <p className="text-xs">
                                        {new Intl.DateTimeFormat("en-US", {
                                            dateStyle: "medium",
                                        }).format(experience.date.to)}
                                    </p>
                                </div>
                                <p className="text-xs">{experience.points}</p>
                            </section>
                        ))}
                    </section>
                </div>
                <div>
                    <Heading>Education</Heading>
                    <section className="space-y-4 w-ful">
                        {resume.educations.map((education) => (
                            <section className="w-full space-y-2">
                                <p className="font-semibold">
                                    {education.title}
                                </p>
                                <p className="text-xs text-muted">
                                    {new Intl.DateTimeFormat("en-US", {
                                        dateStyle: "medium",
                                    }).format(education.date)}
                                </p>
                                <p className="text-xs">
                                    {education.description}
                                </p>
                            </section>
                        ))}
                    </section>
                </div>
            </section>
        </section>
    );
}
