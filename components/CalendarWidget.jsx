import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  arrival: z.date({
    required_error: "Arrival date is required.",
  }),
  departure: z.date({
    required_error: "Departure date is required.",
  }),
});

export function CalendarWidget() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
    const arrivalDate = format(arrival, "yyyy-MM-dd");
    const departureDate = format(departure, "yyyy-MM-dd");
    const cloudbedsUrl = `https://hotels.cloudbeds.com/es/reservation/lLxxdq?checkin=${arrivalDate}&checkout=${departureDate}`;
    try {
      const response = await fetch(cloudbedsUrl, {
        method: "POST",
        body: format,
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

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
                        "w-[240px] px-8 text-muted-foreground text-lg font-light",
                        !field.value
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy")
                        : format(new Date(), "dd/MM/yyyy")}
                      <CalendarIcon className="ml-auto h-6 w-6 opacity-80" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                    }}
                    disabled={(date) => date < new Date()}
                    fromYear={2023}
                    initialFocus
                    className={"rounded-md border shadow"}
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
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-[240px] px-8 text-muted-foreground text-lg font-light",
                        !field.value
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy")
                        : format(currentDate, "dd/MM/yyyy")}
                      <CalendarIcon className="ml-auto h-6 w-6 opacity-80" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < form.watch("arrival") || date < new Date()
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          className="w-[60%] md:w-[10%]"
        >
          BOOK NOW
        </Button>
      </form>
    </Form>
  );
}
