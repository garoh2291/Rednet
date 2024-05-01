"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

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

import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Info from "../icons/Info";

const types = [
  { label: "Type1", value: "type1" },
  { label: "Type2", value: "type2" },
  { label: "Type3", value: "type3" },
  { label: "Type4", value: "type4" },
] as const;

type FormData = {
  type: string;
  name: string;
  region: string;
  description: string;
  quantity: number;
  unit: string;
};

const AuctionSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  type: z.string().min(2, {
    message: "Type is too short",
  }),

  name: z.string().min(2, {
    message: "Name is too short",
  }),
  region: z.string().min(2, {
    message: "Region is too short",
  }),
  description: z.string().min(2, {
    message: "Description is too short",
  }),
  quantity: z.number().min(1, {
    message: "Quantity is too low",
  }),
  unit: z.string().min(1, {
    message: "Unit is required",
  }),
});

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});

export const Step1: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof AuctionSchema>>({
    resolver: zodResolver(AuctionSchema),
    defaultValues: {
      type: "",
      name: "",
      region: "",
      description: "",
      quantity: 0,
      unit: "kg",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    router.push("/auction?step=2");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-col gap-y-8"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between items-center">
                Ընտրեք տեսակը *
                <Info />
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Անվանումը *</FormLabel>
              <FormControl>
                <Input placeholder="Ապրանքի անուն" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Տարածաշրջան *</FormLabel>
              <FormControl>
                <Input placeholder="Տարածաշրջան" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between items-center">
                Նկարագրությունը *<Info />
              </FormLabel>
              <FormControl>
                <Textarea className="h-[128px] rounded-[16px] p-2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex gap-3 items-end">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field: { onChange, ...restFields } }) => (
              <FormItem className="flex-1">
                <FormLabel>Քանակը *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Քանակ"
                    type="number"
                    onChange={(e) => {
                      onChange(parseInt(e.target.value, 10));
                    }}
                    {...restFields}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem className="min-w-[95px] ">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="justify-center gap-3">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="kg">Կգ</SelectItem>
                    <SelectItem value="liter">լիտր</SelectItem>
                    <SelectItem value="unit">հատ</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Շարունակել
        </Button>
      </form>
    </Form>
  );
};
