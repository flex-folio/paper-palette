import { SkillType } from "@/lib/types";
import Heading from "./Heading";

export default function SkillCard({ skill }: { skill: SkillType }) {
    return (
        <>
            <Heading className="capitalize">{skill.heading}</Heading>
            <ul className="space-y-2 list-disc ms-3">
                {skill.points.map((topic) => {
                    if (topic.checked)
                        return <li className="text-xs">{topic.value}</li>;
                })}
            </ul>
        </>
    );
}
