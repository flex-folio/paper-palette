import ResumeEditor from "@/features/resumeEditor";
import ResumePreview from "@/features/resumePreview/index";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <div className="h-screen">
            <Navbar />
            <main className="grid grid-cols-2 container gap-8">
                <div className="h-screen overflow-auto py-24">
                    <ResumeEditor />
                </div>
                <div className="flex align-middle pt-14">
                    <ResumePreview />
                </div>
            </main>
        </div>
    );
}
