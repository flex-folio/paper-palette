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
import { addProjectTechnologies } from "@/redux/features/resumeSlice";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    tech: z.string().min(1),
});

export function AddProjectTechnologiesForm({
    projectName,
}: {
    projectName: string;
}) {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tech: "",
        },
        mode: "onTouched",
    });
    const { reset } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        dispatch(
            addProjectTechnologies({
                project: projectName,
                tech: values.tech,
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
                            name="tech"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add an tech</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Add a tech..."
                                            {...field}
                                        />
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
                        className="w-full border-2 border-blue-200 border-dashed"
                        variant="ghost">
                        Add tech
                    </Button>
                </div>
            )}
        </>
    );
}
