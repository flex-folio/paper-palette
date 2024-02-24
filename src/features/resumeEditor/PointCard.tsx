import { ReactNode } from "react";

export default function PointCard({ children }: { children: ReactNode }) {
    return (
        <div className="flex align-middle mb-2 bg-white rounded-lg ps-3">
            {children}
        </div>
    );
}
