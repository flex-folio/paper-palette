"use client";

import Heading from "../resumePreview/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/store";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import PointCard from "./PointCard";
import { useDispatch } from "react-redux";
import {
    changeInfoBio,
    removeInfoBio,
    removeSkill,
    removeSocialMedia,
    toggleSkill,
    toggleSocialMedia,
} from "@/redux/features/resumeSlice";
import MiniCard from "./MiniCard";
import { AddBioForm } from "./forms/AddBioForm";
import { AddSkillForm } from "./forms/AddSkillForm";
import { AddSocialMedia } from "./forms/AddSocialMedia";

export default function ResumeEditor() {
    const resume = useAppSelector((state) => state.resumeReducer);
    const dispatch = useDispatch();

    return (
        <section className="bg-white">
            <section className="space-y-4">
                <Heading>Profile</Heading>
                <Card>
                    <CardContent>
                        <Label>Name</Label>
                        <PointCard>
                            <Checkbox
                                checked={!!resume.info.name}
                                className="my-auto"
                            />
                            <Input value={resume.info.name} disabled={true} />
                        </PointCard>
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
                                checked={!!resume.info.email}
                                className="my-auto"
                            />
                            <MiniCard value={resume.info.email} />
                        </PointCard>
                        <PointCard>
                            <Checkbox
                                checked={!!resume.info.phoneNumber}
                                className="my-auto"
                            />
                            <MiniCard value={resume.info.phoneNumber} />
                        </PointCard>
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
                <div className="h-44"></div>
            </section>
        </section>
    );
}
