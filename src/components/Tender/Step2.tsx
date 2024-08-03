"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z, ZodType, ZodTypeDef } from "zod";
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
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Upload from "../icons/Upload";
import File from "../icons/File";
import Eye from "../icons/Eye";

type TenderData = {
  name: string;
  startPrice: number;
  days: number;
  deliveryTime: number;
  isReaded: boolean;
};

type FormData = {
  tenders: TenderData[];
};

const TenderSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  tenders: z.array(
    z.object({
      name: z.string().min(2, {
        message: "Name is too short",
      }),
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
    })
  ),
});

export const Step2: React.FC = () => {
  const router = useRouter();
  const tenderRef = useRef<HTMLInputElement>(null);
  const [tenderImages, setTenderImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const formMethods = useForm<FormData>({
    resolver: zodResolver(TenderSchema),
    defaultValues: {
      tenders: [
        { name: "", startPrice: 0, days: 0, deliveryTime: 0, isReaded: false },
      ],
    },
  });

  const { control, handleSubmit } = formMethods;
  const { fields, append } = useFieldArray({
    control,
    name: "tenders",
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

    console.log(file);
    setTenderImages((prev: string[]) => [...prev, file.name]);
  };

  return (
    <>
      {fields.length > 1 && (
        <div className="flex flex-col gap-4 pb-8">
          {fields.map((item, index) => {
            if (index === activeIndex) return null;

            return (
              <div
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer w-full bg-[#EFF0F6] px-4 py-2 flex items-center justify-between"
              >
                <p className="font-bold text-[18px]">Չափաբաժնի անվանումը</p>
                <div className="flex gap-3 items-center text-[18px] text-[#F35D74] font-semibold">
                  <Eye />
                  Տեսնել
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Form {...formMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-2 flex-col gap-y-8"
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
            <div className="flex flex-col gap-1">
              {tenderImages.length
                ? tenderImages.map((image: any, index: number) => (
                    <p
                      className="text-[#1890FF] font-normal text-sm flex gap-1 items-center"
                      key={index}
                    >
                      <File />
                      {image}
                    </p>
                  ))
                : null}
              <div
                className="cursor-pointer relative w-[148px] h-[32px] border  border-[#D9D9D9] flex gap-2 items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  tenderRef?.current?.click();
                }}
              >
                <Upload />
                <p className="text-body font-normal">Upload photo</p>
              </div>
            </div>
          </div>

          {fields.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-wrap gap-x-4 gap-y-8 ${
                index === activeIndex ? "block" : "hidden"
              }`}
            >
              <FormField
                control={control}
                name={`tenders.${index}.name`}
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[280px]">
                    <FormLabel>Չափաբաժնի անվանումը *</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`tenders.${index}.startPrice`}
                render={({ field: { onChange, ...restFields } }) => (
                  <FormItem className="flex-1 min-w-[280px]">
                    <FormLabel>Չափաբաժնի ստարտային գինը *</FormLabel>
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
                control={control}
                name={`tenders.${index}.days`}
                render={({ field: { onChange, ...restFields } }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Գրանցվելու օրերի քանակը *</FormLabel>
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
                control={control}
                name={`tenders.${index}.deliveryTime`}
                render={({ field: { onChange, ...restFields } }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Մատակարարման վերջնաժամկետը *</FormLabel>
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
                control={control}
                name={`tenders.${index}.isReaded`}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-3 items-center">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label
                        htmlFor="terms"
                        className="!mt-0 text-xs text-label"
                      >
                        Սույնով հաստատում եմ, որ տրամադրված ամբողջ
                        տեղեկատվությունը համապատասխանում է իրականությանը,
                        գիտակցում եմ, որ խարդախության կամ խաբեության դեպքում
                        պատասխանատվություն եմ կրելու{" "}
                      </Label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          <Button
            variant={"outline"}
            className="bg-white h-[62px] px-10 font-semibold text-[18px] text-primary-main border-primary-main"
            onClick={() => {
              append({
                name: "",
                startPrice: 0,
                days: 0,
                deliveryTime: 0,
                isReaded: false,
              });
              setActiveIndex(fields.length); // Set new fields as active
            }}
            type="button"
          >
            Ավելացնել չափաբաժին
          </Button>

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
