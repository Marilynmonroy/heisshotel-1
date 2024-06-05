import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const FormSchema = z.object({
    arrival: z.date().optional(),
    departure: z.date().optional(),
});

export function CalendarWidget() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDepartureOpen, setIsDepartureOpen] = useState(false);
    const departureTriggerRef = useRef(null);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = async (data) => {
        const { arrival, departure } = data;
        const arrivalDate = arrival ? format(arrival, "yyyy-MM-dd") : "";
        const departureDate = departure ? format(departure, "yyyy-MM-dd") : "";
        const cloudbedsUrl = `https://hotels.cloudbeds.com/es/reservation/lLxxdq?checkin=${arrivalDate}&checkout=${departureDate}`;
        // Removi a tentativa de fazer um POST para a URL do Cloudbeds, já que abrir a URL em uma nova aba com window.open é suficiente.
        // try {
        //   const response = await fetch(cloudbedsUrl, {
        //     method: "POST",
        //     body: format,
        //   });

        //   if (!response.ok) {
        //     throw new Error("Error al enviar el formulario");
        //   }
        // } catch (error) {
        //   console.error("Error:", error.message);
        // }
        window.open(cloudbedsUrl, "_blank");
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 items-center md:flex-row md:justify-center"
            >
                <FormField
                    control={form.control}
                    name="arrival"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-[180px] px-4 text-muted-foreground text-md font-light",
                                                !field.value
                                            )}
                                        >
                                            {field.value
                                                ? format(field.value, "dd/MM/yyyy")
                                                : format(new Date(), "dd/MM/yyyy")}
                                            <CalendarIcon className="ml-auto h-5 w-5 opacity-80" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto" align="start">
                                    <Calendar
                                        ranges={[selectionRange]}
                                        onChange={handleSelect}
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                            field.onChange(date);
                                            setIsDepartureOpen(true);
                                        }}
                                        disabled={(date) => date < new Date()}
                                        fromYear={2023}
                                        initialFocus
                                        className={""}
                                        style={{ width: "220px", height: "260px" }}
                                        dayStyle={(date) => ({
                                            ...(date && date.getDate() === new Date().getDate()),
                                        })}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="departure"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover open={isDepartureOpen} onOpenChange={setIsDepartureOpen}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            ref={departureTriggerRef}
                                            variant="ghost"
                                            className={cn(
                                                "w-[180px] px-4 text-muted-foreground text-md font-light",
                                                !field.value
                                            )}
                                        >
                                            {field.value
                                                ? format(field.value, "dd/MM/yyyy")
                                                : format(currentDate, "dd/MM/yyyy")}
                                            <CalendarIcon className="ml-auto h-5 w-5 opacity-80" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                            field.onChange(date);
                                            setIsDepartureOpen(false);
                                        }}
                                        disabled={(date) =>
                                            date < form.watch("arrival") || date < new Date()
                                        }
                                        initialFocus
                                        className={"rounded-md border shadow"}
                                        style={{ width: "220px", height: "260px" }} // Adjusted size
                                        dayStyle={(date) => ({
                                            ...(date &&
                                                date.getDate() === new Date().getDate() && {
                                                    backgroundColor: "lightblue",
                                                }),
                                        })}
                                        dayHoverStyle={(date) => ({
                                            backgroundColor: "lightblue",
                                        })}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant="secondary" type="submit">
                    BOOK NOW
                </Button>
            </form>
        </Form>
    );
}
