"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Heading from "@/features/resumePreview/Heading";
import SideBarCard from "@/features/resumePreview/SideBarCard";
import { Separator } from "@/components/ui/separator";
import {
    Mail as MailIcon,
    Phone as PhoneIcon,
    Linkedin as LinkedinIcon,
    Github as GithubIcon,
    ArrowDownToLine as DownloadIcon,
} from "lucide-react";
import { useAppSelector } from "@/redux/store";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function ResumePreview() {
    const resume = useAppSelector((state) => state.resumeReducer);
    const pdfRef = useRef(null);

    const handleDownload = async () => {
        console.log("hadle downlaod hit");

        const salesReportContentElement = pdfRef.current;
        if (!salesReportContentElement) {
            console.log("invlid ref");

            return;
        }
        const canvas = await html2canvas(salesReportContentElement, {
            scrollY: -window.scrollY,
        });
        const imageData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "px", [canvas.width, canvas.height]);
        pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("resume.pdf");
    };
    return (
        <section
            ref={pdfRef}
            className="my-auto bg-white w-[7in] min-h-[9.25in] flex shadow-2xl h-fit relative">
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
                        icon={
                            _socials.name === "Linkden" ? (
                                <LinkedinIcon size="0.8em" />
                            ) : (
                                <GithubIcon size="0.8em" />
                            )
                        }
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
            <div className="w-[6.8in] flex -bottom-32 absolute">
                <Button onClick={handleDownload} className="mx-auto mb-20">
                    <DownloadIcon size="1.2em" className="me-2" /> Download
                </Button>
            </div>
        </section>
    );
}
