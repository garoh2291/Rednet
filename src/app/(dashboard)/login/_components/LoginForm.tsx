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
import { useSession } from "@/lib/providers/AuthProvider";
import { useLoginMutation } from "@/lib/api/auth";

type FormData = {
  email: string;
  password: string;
};

const LoginSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  email: z.string().email({
    message: "Էլ. փոստը սխալ է",
  }),
  password: z
    .string()
    .min(6, { message: " Գաղտնաբառը կարճ է" })
    .max(20, { message: "Password is too long" }),
});

export const LoginForm: React.FC = () => {
  const { mutate } = useLoginMutation({
    onSuccess: (data) => {
      console.log("data", data);
    },
  });
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const email = data.email;
    const password = data.password;

    console.log("data", data);
    mutate({ email, password });

    // router.push("/register?step=2");
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
        <div className="w-full flex flex-col gap-2 items-end">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Ձեր գաղտնաբառը</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href={"/forgot-password"}
            className="text-primary-main text-[14px]"
          >
            Վերականգնել գաղտնաբառը
          </Link>
        </div>

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Մուտք
        </Button>
      </form>
    </Form>
  );
};
