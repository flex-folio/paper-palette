import { ProjectType } from "@/types/resumeTypes";

export default function ProjectCard({ project }: { project: ProjectType }) {
    return (
        <section className="p-4 rounded bg-secondary w-full space-y-2">
            <p className="font-semibold">{project.title}</p>
            <ul className="text-xs list-disc ms-3 space-y-1">
                {project.description.map((des) => {
                    if (des.checked) {
                        return <li>{des.value}</li>;
                    }
                })}
            </ul>
            <div>
                <p className="text-xs font-semibold mb-1">Technologies Used</p>
                <div className="flex text-xs">
                    {project.technologiesUsed.map((tech, i) => {
                        if (tech.checked) {
                            return (
                                <p>
                                    {i !== 0 && <span className="me-1">,</span>}
                                    {tech.value}
                                </p>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
