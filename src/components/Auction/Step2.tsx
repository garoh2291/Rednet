"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeDef } from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Plus from "../icons/Plus";
import { useRef, useState } from "react";
import Image from "next/image";
import { Label } from "../ui/label";

type FormData = {
  startPrice: number;
  days: number;
  deliveryTime: number;
  isReaded: boolean;
};

const TenderSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  startPrice: z.number().min(1, {
    message: "Start price is too low",
  }),
  days: z
    .number()
    .min(3, {
      message: "Days is too low",
    })
    .max(40, {
      message: "Days is too high",
    }),

  deliveryTime: z.number().min(1, {
    message: "Delivery time is too low",
  }),
  isReaded: z.boolean().refine((value) => value === true, {
    message: "You must accept terms and conditions",
  }),
});

export const Step2: React.FC = () => {
  const router = useRouter();
  const tenderRef = useRef<HTMLInputElement>(null);

  const [tenderImages, setTenderImages] = useState<any | null>([]);

  const form = useForm<z.infer<typeof TenderSchema>>({
    resolver: zodResolver(TenderSchema),
    defaultValues: {
      startPrice: 0,
      days: 0,
      deliveryTime: 0,
      isReaded: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
    router.push("/tender?step=3");
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setTenderImages((prev: any) => [...prev, fileReader.result]);
    };
    fileReader.readAsDataURL(file);
  };

  console.log(tenderImages);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-col gap-y-8 "
      >
        <Input
          type="file"
          className="hidden"
          onChange={handleImageChange}
          ref={tenderRef}
        />
        <div>
          <p className="mb-2">
            Կցել լուսանկարներ, այլ տեսակի փաստաթղթեր կամ
            <br /> ֆայլեր
          </p>
          <div className="flex gap-1 h-[104px]">
            {tenderImages.length
              ? tenderImages.map((image: any, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    width={104}
                    height={104}
                    objectFit="contain"
                    alt="tender image"
                  />
                ))
              : null}
            <div
              className="relative w-[104px] h-[104px] bg-[#FAFAFA] border border-dotted border-[#D9D9D9] flex flex-col items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked");
                tenderRef?.current?.click();
              }}
            >
              <Plus />
              <p className="text-body font-normal">Upload photo</p>
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="startPrice"
          render={({ field: { onChange, ...restFields } }) => (
            <FormItem>
              <FormLabel>Չափաբաժնի կամ լոտի ստարտային գինը *</FormLabel>
              <FormControl>
                <Input
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
          name="days"
          render={({ field: { onChange, ...restFields } }) => (
            <FormItem>
              <FormLabel>Աուկցիոնին գրանցվելու օրերի քանակը *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  onChange={(e) => {
                    onChange(parseInt(e.target.value, 10));
                  }}
                  {...restFields}
                />
              </FormControl>
              <FormDescription className="text-sm font-semibold text-label">
                Նվազագույնը 3 օրվանից մինչև 40
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryTime"
          render={({ field: { onChange, ...restFields } }) => (
            <FormItem>
              <FormLabel>Մատակարարման ժամկետը *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  onChange={(e) => {
                    onChange(parseInt(e.target.value, 10));
                  }}
                  {...restFields}
                />
              </FormControl>
              <FormDescription className="text-sm font-semibold text-label">
                Նվազագույնը 3 օրվանից մինչև 40
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isReaded"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-3 items-center">
                {" "}
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label htmlFor="terms" className="!mt-0 text-xs text-label">
                  Սույնով հաստատում եմ, որ տրամադրված ամբողջ տեղեկատվությունը
                  համապատասխանում է իրականությանը, գիտակցում եմ, որ խարդախության
                  կամ խաբեության դեպքում պատասխանատվություն եմ կրելու{" "}
                </Label>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
          // disabled={!form.formState.isValid}
        >
          Շարունակել
        </Button>
      </form>
    </Form>
  );
};
