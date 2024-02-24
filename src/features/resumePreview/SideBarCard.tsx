import React from "react";

type Props = { icon: React.ReactNode; title: string; caption: string };

export default function SideBarCard({ icon, title, caption }: Props) {
    return (
        <div className="flex gap-2 align-middle">
            <div className="bg-slate-200 text-muted rounded-full aspect-square w-6 h-6 grid place-content-center my-auto">
                {icon}
            </div>
            <div>
                <p className="text-xs text-muted text-[.65em]">{title}</p>
                <p className="text-xs">{caption}</p>
            </div>
        </div>
    );
}
