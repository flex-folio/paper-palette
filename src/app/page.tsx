import ResumeEditor from "@/components/custom/resumeEditor";
import ResumePreview from "@/components/custom/resumePreview/index";

export default function Home() {
    return (
        <main className="grid grid-cols-2 mt-20 container gap-8">
            <ResumeEditor />
            <ResumePreview />
        </main>
    );
}
