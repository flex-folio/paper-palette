"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useDispatch } from "react-redux";
import { editProjectTitle } from "@/redux/features/resumeSlice";
import { useState } from "react";
import { ChangeIcon } from "@/components/utils/icons";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    title: z.string().min(1),
});

export function EditProjectTitleForm({
    currentTitle,
    projectIndex,
}: {
    projectIndex: number;
    currentTitle: string;
}) {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: currentTitle,
        },
        mode: "onTouched",
    });
    const { reset } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        dispatch(
            editProjectTitle({
                projectIndex,
                title: values.title,
            })
        );
        setShowForm(false);
        reset();
    }
    return (
        <>
            {showForm ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="ms-auto me-0 mt-2 flex w-fit">
                            <Button
                                onClick={() => setShowForm(false)}
                                size="sm"
                                type="submit"
                                variant="ghost">
                                Cancel
                            </Button>
                            <Button size="sm" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            ) : (
                <div>
                    <Button
                        onClick={() => setShowForm(true)}
                        className="w-full border-2 border-accent border-dashed"
                        variant="ghost">
                        <ChangeIcon />
                        Title
                    </Button>
                </div>
            )}
        </>
    );
}
