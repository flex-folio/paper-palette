import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    variant?: "default";
};

export default function Heading({
    children,
    className,
    variant = "default",
}: Props) {
    switch (variant) {
        case "default":
            return (
                <h3
                    className={cn(
                        "text-primary font-semibold text-base mb-2",
                        className
                    )}>
                    {children}
                </h3>
            );
    }
}
