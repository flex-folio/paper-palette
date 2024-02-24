import { EducationType } from "@/lib/types";
import { Minus as DateSeparatorIcon } from "lucide-react";

export default function EducationCard({
    education,
}: {
    education: EducationType;
}) {
    return (
        <section className="w-full space-y-2">
            <p className="font-semibold">{education.title}</p>
            <div className="flex gap-1 align-middle text-muted">
                <p className="text-xs">
                    {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                    }).format(education.date.from)}
                </p>
                <DateSeparatorIcon size=".7em" className="my-auto" />
                <p className="text-xs">
                    {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                    }).format(education.date.to)}
                </p>
            </div>
            <ul className="text-xs list-disc ms-3">
                {education.description.map((_education) => {
                    if (_education.checked) {
                        return <li> {_education.value}</li>;
                    }
                })}
            </ul>
        </section>
    );
}
