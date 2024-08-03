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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const FormSchema = z
  .object({
    type: z.enum(["legal", "physical"], {
      required_error: "You need to select a notification type.",
    }),
    avc: z
      .string()
      .min(6, {
        message: "Սխալ է տեղի ունեցել:",
      })
      .optional(),

    companyName: z
      .string()
      .min(2, {
        message: "Անունը շատ կարճ է",
      })
      .optional(),

    companyAddress: z
      .string()
      .min(2, {
        message: "Անունը շատ կարճ է",
      })
      .optional(),

    ceo: z
      .string()
      .min(2, {
        message: "Անունը շատ կարճ է",
      })
      .optional(),
  })
  .refine((data: any) => {
    if (data.type === "legal") {
      if (!data.avc) {
        return false;
      }

      if (!data.companyName) {
        return false;
      }

      if (!data.companyAddress) {
        return false;
      }

      if (!data.ceo) {
        return false;
      }
    }
    return true;
  });

export const Step3: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("SUCCESS", data);
    router.push("/register?step=4");
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold">
          Վերնագիր
        </h1>
        <p className="font-medium text-body mt-1">
          Հանդիսանում եք որպես իրավաբանական անձ, թե ֆիզիկական անձ:{" "}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-8 space-y-8"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex w-full gap-8"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="legal" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Իրավաբանական անձ
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="physical" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Ֆիզիկական անձ
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("type") === "legal" ? (
            <>
              <FormField
                control={form.control}
                name="avc"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>ՀՎՀՀ</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>Ընկերության լրիվ և ճշգրիտ անվանումը</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyAddress"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>Ընկերության հասցեն</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="ceo"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormLabel>Ղեկավարի Անուն Ազգանուն</FormLabel>
                    <FormControl>
                      <Input placeholder="Name Surname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ) : null}
          <Button
            className="w-full h-[72px] font-semibold text-[18px] "
            type="submit"
            disabled={!form.formState.isValid}
          >
            Շարունակել
          </Button>
        </form>
      </Form>
    </>
  );
};
