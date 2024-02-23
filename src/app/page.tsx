import ResumeEditor from "@/components/custom/resumeEditor";
import ResumePreview from "@/components/custom/resumePreview/index";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="grid grid-cols-2 mt-20 container gap-8">
                <div className="h-screen overflow-auto">
                    <ResumeEditor />
                </div>
                <ResumePreview />
            </main>
        </>
    );
}
