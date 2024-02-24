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
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChangeIcon } from "@/components/utils/icons";
import moment from "moment";
import { editExperienceDate } from "@/redux/features/resumeSlice";

const formSchema = z.object({
    fromDate: z.string(),
    toDate: z.string(),
});

export function EditExperienceDateForm({
    experienceIndex,
    date,
}: {
    experienceIndex: number;
    date: {
        to: Date;
        from: Date;
    };
}) {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fromDate: moment(date.from).format("YYYY-MM-DD"),
            toDate: moment(date.to).format("YYYY-MM-DD"),
        },
        mode: "onTouched",
    });
    const { reset } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        dispatch(
            editExperienceDate({
                experienceIndex,
                fromDate: new Date(values.fromDate),
                toDate: new Date(values.toDate),
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
                            name="fromDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>From Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="toDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>To Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
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
                        <ChangeIcon /> Date
                    </Button>
                </div>
            )}
        </>
    );
}
