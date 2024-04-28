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
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const UserSchema: ZodType<FormData, ZodTypeDef, FormData> = z
  .object({
    name: z.string().min(2, {
      message: "Անունը շատ կարճ է",
    }),
    surname: z.string().min(2, {
      message: "Ազգանունը շատ կարճ է",
    }),
    email: z.string().email({
      message: "Էլ. փոստը սխալ է",
    }),
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

export const Step1: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    router.push("/register?step=2");
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold">
          Գրանցվել
        </h1>
        <p className="mt-1 flex items-center gap-2">
          Արդեն ունեք հաշիվ?{" "}
          <Link href={"/login"} className="text-primary-main">
            Մուտք գործեք
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 flex-wrap gap-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="md:w-fit flex-1 w-full ">
                <FormLabel>Ձեր անունը</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="md:w-fit flex-1 w-full">
                <FormLabel>Ձեր ազգանունը</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="md:w-fit flex-1 w-full">
                <FormLabel>Ձեր գաղտնաբառը</FormLabel>
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
              <FormItem className="md:w-fit flex-1 w-full">
                <FormLabel>Կրկնեք գաղտնաբառը</FormLabel>
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
            Շարունակել
          </Button>
        </form>
      </Form>
    </>
  );
};
