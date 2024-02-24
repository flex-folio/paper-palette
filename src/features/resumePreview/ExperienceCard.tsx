import { ExperienceType } from "@/lib/types";
import { Minus as DateSeparatorIcon } from "lucide-react";

export default function ExperienceCard({
    experience,
}: {
    experience: ExperienceType;
}) {
    return (
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
                <DateSeparatorIcon size=".7em" className="my-auto" />
                <p className="text-xs">
                    {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                    }).format(experience.date.to)}
                </p>
            </div>
            <ul className="text-xs list-disc ms-3">
                {experience.points.map((_experience) => {
                    if (_experience.checked) {
                        return <li> {_experience.value}</li>;
                    }
                })}
            </ul>
        </section>
    );
}
