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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Ձեր մուտքագրած կոդը սխալ է",
  }),
});

export const Step2: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("SUCCESS", data);
    router.push("/forgot-password?step=3");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex gap-2 flex-wrap gap-y-8"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Թվային կոդ</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} className="w-full" {...field}>
                  <InputOTPGroup className="gap-3">
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={0}
                    />
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={1}
                    />
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={2}
                    />
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={3}
                    />
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={4}
                    />
                    <InputOTPSlot
                      className=" w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
                      index={5}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
          disabled={!form.formState.isValid}
        >
          Հաստատել
        </Button>
      </form>
    </Form>
  );
};
