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
import { addExperience, addProject } from "@/redux/features/resumeSlice";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AddIcon } from "@/components/utils/icons";

const formSchema = z.object({
    company: z.string().min(1),
    position: z.string().min(1),
});

export function AddExperienceForm() {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            company: "",
            position: "",
        },
        mode: "onTouched",
    });
    const { reset } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        dispatch(addExperience(values));
        setShowForm(false);
        reset();
    }
    return (
        <>
            {showForm ? (
                <Card>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Company"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="position"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Position</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Position"
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
                    </CardContent>
                </Card>
            ) : (
                <div>
                    <Button
                        onClick={() => setShowForm(true)}
                        className="w-full border-2 border-accent border-dashed"
                        variant="ghost">
                        <AddIcon /> Experience
                    </Button>
                </div>
            )}
        </>
    );
}
