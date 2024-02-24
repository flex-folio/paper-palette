import { EducationType } from "@/lib/types";

export default function EducationCard({
    education,
}: {
    education: EducationType;
}) {
    return (
        <section className="w-full space-y-2">
            <p className="font-semibold">{education.title}</p>
            <p className="text-xs text-muted">
                {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                }).format(education.date)}
            </p>
            <p className="text-xs">
                {education.description.map((_eduction) => {
                    if (_eduction.checked) {
                        return _eduction.value;
                    }
                })}
            </p>
        </section>
    );
}
