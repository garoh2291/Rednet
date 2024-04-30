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
  password: string;
  confirmPassword: string;
};

const PasswordSchema: ZodType<FormData, ZodTypeDef, FormData> = z
  .object({
    password: z
      .string()
      .min(6, { message: " Գաղտնաբառը կարճ է" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Գաղտնաբառերը չեն համընկերում",
    path: ["confirmPassword"],
  });

export const Step3: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    router.push("/");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-col gap-y-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className=" flex-1 w-full">
              <FormLabel>Նոր գաղտնաբառը</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className=" flex-1 w-full">
              <FormLabel>Կրկնեք նոր գաղտնաբառը</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Հաստատել
        </Button>
      </form>
    </Form>
  );
};
