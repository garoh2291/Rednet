"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  state: z.string(),
  companySize: z.string(),
});

export const Step2: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      state: "",
      companySize: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    // TODO: Add aws links to data and send to the server

    router.push("/profile");
  };

  return (
    <>
      <div className="my-8">
        <h1 className="text-title-active text-[32px] font-semibold leading-[43.58px]">
          Պրոֆայլի ստեղծում{" "}
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as any)}
          className="flex gap-2 flex-col gap-y-8"
        >
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormLabel>Մարզ</FormLabel>
                <FormControl>
                  <Input placeholder="Մարզ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company size</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-5">1-5</SelectItem>
                    <SelectItem value="5-10">5-10</SelectItem>
                    <SelectItem value="10-20">10-20</SelectItem>
                    <SelectItem value="20-50">20-50</SelectItem>
                    <SelectItem value="50-100">50-100</SelectItem>
                    <SelectItem value="100+">100+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full h-[72px] font-semibold text-[18px]"
            type="submit"
            disabled={!form.formState.isValid}
          >
            Շարունակել
          </Button>
          <Button
            variant="link"
            type="button"
            className="w-full text-primary-main"
            onClick={() => router.push("/")}
          >
            Բաց թողնել
          </Button>
        </form>
      </Form>
    </>
  );
};
