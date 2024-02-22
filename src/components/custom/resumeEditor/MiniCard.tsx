import { Button } from "@/components/ui/button";
import React from "react";
import { Trash2 as DeleteIcon } from "lucide-react";

export default function MiniCard({
    value,
    deleteFunction,
}: {
    value: string;
    deleteFunction?: Function;
}) {
    return (
        <div className="p-2 min-h-10 w-full text-sm py-auto flex align-middle">
            <p className="pe-4 my-auto h-fit w-full">{value}</p>

            <Button
                onClick={() => {
                    if (deleteFunction) deleteFunction();
                }}
                size="icon"
                className="w-6 h-6 my-auto bg-red-100 text-destructive hover:text-destructive-foreground"
                variant="destructive">
                <DeleteIcon size=".9em" />
            </Button>
        </div>
    );
}
