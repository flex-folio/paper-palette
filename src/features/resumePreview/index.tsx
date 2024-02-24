"use client";

import Heading from "@/features/resumePreview/Heading";
import SideBarCard from "@/features/resumePreview/SideBarCard";
import { Separator } from "@/components/ui/separator";
import {
    Mail as MailIcon,
    Phone as PhoneIcon,
    Linkedin as LinkedinIcon,
} from "lucide-react";
import { useAppSelector } from "@/redux/store";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";

export default function ResumePreview() {
    const resume = useAppSelector((state) => state.resumeReducer);

    return (
        <section className="my-auto bg-white w-[7in] min-h-[9.25in] flex shadow-2xl h-fit">
            <aside className="bg-secondary ps-6 px-4 py-10 w-52 min-w-52 space-y-4">
                <p className="font-semibold">{resume.info.name}</p>
                {resume.info.bio.map((_bio) => {
                    if (_bio.checked) {
                        return (
                            <p className="text-xs text-muted">{_bio.value}</p>
                        );
                    }
                })}
                <Separator />
                {resume.info.email.checked && (
                    <SideBarCard
                        icon={<MailIcon size="0.8em" />}
                        title="Email"
                        caption={resume.info.email.value}
                    />
                )}
                {resume.info.phone.checked && (
                    <SideBarCard
                        icon={<PhoneIcon size="0.8em" />}
                        title="Phone"
                        caption={resume.info.phone.value}
                    />
                )}
                {resume.info.phone.checked || resume.info.email.checked ? (
                    <Separator />
                ) : null}
                {resume.socials.map((_socials) => (
                    <SideBarCard
                        icon={<LinkedinIcon size="0.8em" />}
                        title={_socials.name}
                        caption={_socials.url}
                    />
                ))}
                <Separator />
                {resume.skills.map((point) => (
                    <SkillCard skill={point} />
                ))}
            </aside>
            <section className="px-4 pe-6 py-10 space-y-6 w-full">
                <div>
                    <p className="font-semibold text-2xl mb-4">
                        {resume.info.position.map((position) => {
                            if (position.checked) return position.value;
                        })}
                    </p>
                    <div>
                        <Heading>Projects</Heading>
                        <section className="space-y-4 w-ful">
                            {resume.projects.map((project) => (
                                <ProjectCard project={project} />
                            ))}
                        </section>
                    </div>
                </div>
                <div>
                    <Heading>Work Experience</Heading>
                    <section className="space-y-4 w-ful">
                        {resume.experiences.map((experience) => (
                            <ExperienceCard experience={experience} />
                        ))}
                    </section>
                </div>
                <div>
                    <Heading>Education</Heading>
                    <section className="space-y-4 w-ful">
                        {resume.educations.map((education) => (
                            <EducationCard education={education} />
                        ))}
                    </section>
                </div>
            </section>
        </section>
    );
}
