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
import { Separator } from "../ui/separator";
import Plus from "../icons/Plus";
import { useRef, useState } from "react";
import Image from "next/image";

interface IProductFormProps {
  handleOpen: () => void;
}

type FormData = {
  name: string;
  description: string;
  image?: string;
};

const ProductSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  name: z.string().min(2, {
    message: "Name is too short",
  }),
  description: z.string().min(2, {
    message: "Description is too short",
  }),
  image: z.string().optional(),
});

export const ProductForm: React.FC<IProductFormProps> = ({ handleOpen }) => {
  const router = useRouter();
  const productRef = useRef<HTMLInputElement>(null);

  const [productImage, setProductImage] = useState<any | null>(null);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
    handleOpen();
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      setProductImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setProductImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setProductImage(file);
  };

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
          ref={productRef}
        />
        <div
          className="relative w-[157px] h-[104px] bg-[#FAFAFA] border border-dotted border-[#D9D9D9] flex flex-col items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            console.log("clicked");
            productRef?.current?.click();
          }}
        >
          <Plus />
          <p className="text-body font-normal">Upload photo</p>
          {productImage && (
            <Image
              src={productImage}
              alt="The image selected by the user."
              fill
              objectFit="cover"
            />
          )}
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1 w-full">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-1 w-full">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Product Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="w-full" />
        <div className="w-full flex justify-end gap-4">
          <Button
            className=" h-[66px] px-8 font-semibold text-[18px]"
            type="submit"
          >
            Save
          </Button>
          <Button
            className=" h-[66px] px-10 font-semibold text-[18px] text-primary-main border-primary-main"
            variant={"outline"}
            type="button"
            onClick={handleOpen}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
