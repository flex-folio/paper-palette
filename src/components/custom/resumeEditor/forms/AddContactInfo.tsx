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
import { addContactInfo, addSocialMedia } from "@/redux/features/resumeSlice";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    type: z.string().min(1),
    value: z.string(),
});

export function AddContactInfo() {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
            value: "",
        },
        mode: "onTouched",
    });
    const { reset } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        dispatch(addContactInfo(values));
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
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="phone">
                                                Phone
                                            </SelectItem>
                                            <SelectItem value="email">
                                                Email
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="value"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Value</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Add value"
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
                        Edit contact info
                    </Button>
                </div>
            )}
        </>
    );
}
