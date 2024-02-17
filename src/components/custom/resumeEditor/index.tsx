"use client";

import Heading from "../resumePreview/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/store";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import PointCard from "./PointCard";
import { useDispatch } from "react-redux";
import { changeInfoBio, removeInfoBio } from "@/redux/features/resumeSlice";
import MiniCard from "./MiniCard";
import { AddBioForm } from "./AddBioFrom";

export default function ResumeEditor() {
    const resume = useAppSelector((state) => state.resumeReducer);
    const dispatch = useDispatch();

    return (
        <section className="bg-white">
            <section className="space-y-2">
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
                        <Label>Socials</Label>
                        <PointCard>
                            <Checkbox
                                checked={!!resume.socials.linkedin.url}
                                className="my-auto"
                            />
                            <MiniCard value={resume.socials.linkedin.url} />
                        </PointCard>
                        <PointCard>
                            <Checkbox
                                checked={!!resume.socials.github.url}
                                className="my-auto"
                            />
                            <MiniCard value={resume.socials.github.url} />
                        </PointCard>
                    </CardContent>
                </Card>
            </section>
        </section>
    );
}
