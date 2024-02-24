import { Plus, ArrowRightLeft } from "lucide-react";

export function AddIcon() {
    return (
        <Plus
            size="1.5em"
            className="me-2 bg-blue-200 rounded-full text-primary p-1"
        />
    );
}

export function ChangeIcon() {
    return (
        <ArrowRightLeft
            size="1.5em"
            className="me-2 bg-blue-200 rounded-full text-primary p-[.30rem]"
        />
    );
}
