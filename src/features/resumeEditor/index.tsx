"use client";

import moment from "moment";
import Heading from "../resumePreview/Heading";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/store";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import PointCard from "./PointCard";
import { useDispatch } from "react-redux";
import {
    changeInfoBio,
    removeExperienceDescription,
    removeInfoBio,
    removeProjectDescription,
    removeProjectTechnologies,
    removeSkill,
    removeSocialMedia,
    toggleContactInfo,
    toggleExperienceDescription,
    toggleProjectDescription,
    toggleProjectTechnologies,
    toggleSkill,
    toggleSocialMedia,
} from "@/redux/features/resumeSlice";
import MiniCard from "./MiniCard";
import { AddBioForm } from "./forms/AddBioForm";
import { AddSkillForm } from "./forms/AddSkillForm";
import { AddSocialMedia } from "./forms/AddSocialMedia";
import { AddContactInfo } from "./forms/AddContactInfo";
import { EditNameForm } from "./forms/EditNameForm";
import { Separator } from "@/components/ui/separator";
import { AddProjectDescriptionForm } from "./forms/AddProjectDescriptionForm";
import { AddProjectTechnologiesForm } from "./forms/AddProjectTechnologiesForm";
import { AddProjectForm } from "./forms/AddProjectForm";
import { AddExperienceDescriptionForm } from "./forms/AddExperienceDescriptionForm";
import { EditExperienceDateForm } from "./forms/EditExperienceDateForm";
import { EditExperienceTitleForm } from "./forms/EditExperienceTitleForm";
import { AddExperienceForm } from "./forms/AddExperienceForm";

export default function ResumeEditor() {
    const resume = useAppSelector((state) => state.resumeReducer);
    const dispatch = useDispatch();

    return (
        <section className="bg-white px-4">
            <section className="space-y-4">
                <Heading>Profile</Heading>
                <Card>
                    <CardContent>
                        <Label>Name</Label>
                        <PointCard>
                            <MiniCard
                                editFunction={() => console.log("ho")}
                                value={resume.info.name}
                            />
                        </PointCard>
                        <EditNameForm name={resume.info.name} />
                        <Label className="mt-auto">Bio</Label>
                        {resume.info.bio.map((_bio, i) => (
                            <PointCard>
                                <Checkbox
                                    onClick={() => dispatch(changeInfoBio(i))}
                                    checked={_bio.checked}
                                    className="my-auto"
                                />
                                <MiniCard
                                    value={_bio.value}
                                    deleteFunction={() =>
                                        dispatch(removeInfoBio(i))
                                    }
                                />
                            </PointCard>
                        ))}
                        <AddBioForm />
                        <Label>Contact info</Label>
                        <PointCard>
                            <Checkbox
                                onClick={() =>
                                    dispatch(
                                        toggleContactInfo({ type: "email" })
                                    )
                                }
                                checked={resume.info.email.checked}
                                className="my-auto"
                            />
                            <MiniCard value={resume.info.email.value} />
                        </PointCard>
                        <PointCard>
                            <Checkbox
                                onClick={() =>
                                    dispatch(
                                        toggleContactInfo({ type: "phone" })
                                    )
                                }
                                checked={resume.info.phone.checked}
                                className="my-auto"
                            />
                            <MiniCard value={resume.info.phone.value} />
                        </PointCard>
                        <AddContactInfo />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        {resume.socials.map((social, i) => (
                            <>
                                <Label>{social.name}</Label>
                                <PointCard>
                                    <Checkbox
                                        onClick={() =>
                                            dispatch(
                                                toggleSocialMedia({ index: i })
                                            )
                                        }
                                        checked={social.checked}
                                        className="my-auto"
                                    />
                                    <MiniCard
                                        deleteFunction={() =>
                                            dispatch(
                                                removeSocialMedia({ index: i })
                                            )
                                        }
                                        value={social.url}
                                    />
                                </PointCard>
                            </>
                        ))}
                        <AddSocialMedia />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        {resume.skills.map((skills) => (
                            <>
                                <Label className="capitalize">
                                    {skills.heading}
                                </Label>
                                <div className="flex flex-wrap gap-x-2">
                                    {skills.points.map((skill, index) => (
                                        <PointCard>
                                            <Checkbox
                                                onClick={() =>
                                                    dispatch(
                                                        toggleSkill({
                                                            heading:
                                                                skills.heading,
                                                            index,
                                                        })
                                                    )
                                                }
                                                checked={skill.checked}
                                                className="my-auto"
                                            />
                                            <MiniCard
                                                deleteFunction={() =>
                                                    dispatch(
                                                        removeSkill({
                                                            heading:
                                                                skills.heading,
                                                            index,
                                                        })
                                                    )
                                                }
                                                value={skill.value}
                                            />
                                        </PointCard>
                                    ))}
                                </div>
                            </>
                        ))}
                        <AddSkillForm />
                    </CardContent>
                </Card>
                <Heading>Projects</Heading>
                {resume.projects.map((project, projectIndex) => (
                    <Card>
                        <CardContent>
                            <Label>Title</Label>
                            <PointCard>
                                <MiniCard value={project.title} />
                            </PointCard>
                            <Separator className="my-3" />
                            <Label>Description</Label>
                            {project.description.map((des, index) => (
                                <PointCard>
                                    <Checkbox
                                        onClick={() =>
                                            dispatch(
                                                toggleProjectDescription({
                                                    project: project.title,
                                                    index,
                                                })
                                            )
                                        }
                                        checked={des.checked}
                                        className="my-auto"
                                    />
                                    <MiniCard
                                        deleteFunction={() =>
                                            dispatch(
                                                removeProjectDescription({
                                                    projectIndex,
                                                    descriptionIndex: index,
                                                })
                                            )
                                        }
                                        value={des.value}
                                    />
                                </PointCard>
                            ))}
                            <AddProjectDescriptionForm
                                projectName={project.title}
                            />
                            <Label>Technologies Used</Label>
                            <div className="flex flex-wrap gap-x-2">
                                {project.technologiesUsed.map((tech, index) => (
                                    <PointCard>
                                        <Checkbox
                                            onClick={() =>
                                                dispatch(
                                                    toggleProjectTechnologies({
                                                        project: project.title,
                                                        index,
                                                    })
                                                )
                                            }
                                            checked={tech.checked}
                                            className="my-auto"
                                        />
                                        <MiniCard
                                            deleteFunction={() =>
                                                dispatch(
                                                    removeProjectTechnologies({
                                                        projectIndex,
                                                        techIndex: index,
                                                    })
                                                )
                                            }
                                            value={tech.value}
                                        />
                                    </PointCard>
                                ))}
                            </div>
                            <AddProjectTechnologiesForm
                                projectName={project.title}
                            />
                        </CardContent>
                    </Card>
                ))}
                <AddProjectForm />
                <Heading>Work Experience</Heading>
                {resume.experiences.map((experience, experienceIndex) => (
                    <Card>
                        <CardContent>
                            <Label>Title</Label>
                            <PointCard>
                                <MiniCard
                                    value={`${experience.position}, ${experience.company}`}
                                />
                            </PointCard>
                            <EditExperienceTitleForm
                                currentCompany={experience.company}
                                currentPosition={experience.position}
                                experienceIndex={experienceIndex}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>From</Label>
                                    <PointCard>
                                        <MiniCard
                                            value={moment(
                                                experience.date.from
                                            ).format("LL")}
                                        />
                                    </PointCard>
                                </div>
                                <div>
                                    <Label>To</Label>
                                    <PointCard>
                                        <MiniCard
                                            value={moment(
                                                experience.date.to
                                            ).format("LL")}
                                        />
                                    </PointCard>
                                </div>
                            </div>
                            <EditExperienceDateForm
                                date={experience.date}
                                experienceIndex={experienceIndex}
                            />
                            <Label>Desorption</Label>
                            {experience.points.map((point, index) => (
                                <PointCard>
                                    <Checkbox
                                        onClick={() =>
                                            dispatch(
                                                toggleExperienceDescription({
                                                    experienceIndex,
                                                    descriptionIndex: index,
                                                })
                                            )
                                        }
                                        checked={point.checked}
                                        className="my-auto"
                                    />
                                    <MiniCard
                                        deleteFunction={() =>
                                            dispatch(
                                                removeExperienceDescription({
                                                    experienceIndex,
                                                    descriptionIndex: index,
                                                })
                                            )
                                        }
                                        value={point.value}
                                    />
                                </PointCard>
                            ))}
                            <AddExperienceDescriptionForm
                                experienceIndex={experienceIndex}
                            />
                        </CardContent>
                    </Card>
                ))}
                <AddExperienceForm />
                <div className="h-44"></div>
            </section>
        </section>
    );
}
