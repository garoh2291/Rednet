"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeDef } from "zod";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
};

const MailSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  email: z.string().email({
    message: "Էլ. փոստը սխալ է",
  }),
});

export const Step1: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof MailSchema>>({
    resolver: zodResolver(MailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    router.push("/forgot-password?step=2");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ձեր էլ. փոստը</FormLabel>
              <FormControl>
                <Input placeholder="name@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Ստանալ կոդը
        </Button>
      </form>
    </Form>
  );
};
