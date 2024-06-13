"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(40, "El nombre debe tener menos de 40 caracteres"),
  movil: z
    .string()
    .min(10, "El celular debe tener al menos 10 caracteres")
    .max(15, "El celular debe tener menos de 15 caracteres"),
  correo: z.string().email("Debe ser un correo válido"),
});

function ContactForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      movil: "",
      correo: "",
    },
  });

  function onSubmit(data) {
    console.log("Form submitted", data);
    toast({
      title: "Hemos recibido tus datos",
      description: "Pronto nuestros asesores se contactarán contigo",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white/30 p-5 md:p-10 rounded-2xl flex flex-col gap-2 md:gap-5 w-full"
      >
        <span className="md:text-[19px] lg:text-[18px] xl:text-[24px] font-bold text-left">
          Recibe más información
        </span>
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs lg:text-sm">
                Nombre completo
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.nombre?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="movil"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs lg:text-sm">Móvil</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.movil?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs lg:text-sm">
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.correo?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" className="self-center">
          ENVIAR
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
