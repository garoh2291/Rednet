"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Plus from "../icons/Plus";
import Image from "next/image";

const FormSchema = z.object({
  description: z.string(),
  industry: z.string(),
});

export const Step1: React.FC = () => {
  const router = useRouter();

  const [coverImage, setCoverImage] = useState<any | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const coverRef = React.useRef<HTMLInputElement>(null);
  const profileRef = React.useRef<HTMLInputElement>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      setCoverImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setCoverImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setCoverImage(file);

    //TODO: Upload the image to the server
  };

  const handleProfileImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      setProfileImage("");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setProfileImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
    setProfileImage(file);
    //TODO: Upload the image to the server
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      industry: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    // TODO: Add aws links to data and send to the server

    router.push("/profile/create?step=2");
  };

  return (
    <>
      <div className="my-8">
        <h1 className="text-title-active text-[32px] font-semibold leading-[43.58px]">
          Պրոֆայլի ստեղծում{" "}
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as any)}
          className="flex gap-2 flex-col gap-y-8"
        >
          <Input
            type="file"
            className="hidden"
            onChange={handleImageChange}
            ref={coverRef}
          />
          <Input
            type="file"
            className="hidden"
            onChange={handleProfileImageChange}
            ref={profileRef}
          />
          <div className="mb-[75px] relative cursor-pointer w-full h-[104px] border-dotted border-[#D9D9D9] border bg-[#FAFAFA] flex items-center justify-center ">
            <div
              onClick={(e) => {
                console.log("clicked1");
                e.stopPropagation();
                coverRef?.current?.click();
              }}
              className="w-full h-full flex flex-col gap-2 items-center justify-center"
            >
              <Plus />
              <p className="text-body font-normal">Upload cover picture</p>
            </div>

            {coverImage && (
              <Image
                src={coverImage}
                alt="The image selected by the user."
                fill
                objectFit="cover"
              />
            )}
            <div className="absolute w-[104px] h-[104px] border-dotted border-[#D9D9D9] border bg-[#FAFAFA] rounded-full top-[75px] flex flex-col items-center justify-center">
              <div
                className="flex flex-col items-center justify-center gap-2 p-2 text-center relative w-[90px] h-[90px]"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("clicked");
                  profileRef?.current?.click();
                }}
              >
                <Plus />
                <p className="text-body font-normal">Profile picture</p>
                {profileImage && (
                  <Image
                    src={profileImage}
                    alt="The image selected by the user."
                    fill
                    objectFit="cover"
                    className="rounded-full "
                  />
                )}
              </div>
            </div>
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormLabel>Կարճ նկարագրություն</FormLabel>
                <FormControl>
                  <Input placeholder="Կարճ նկարագրություն" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full h-[72px] font-semibold text-[18px]"
            type="submit"
            disabled={!form.formState.isValid || !(coverImage && profileImage)}
          >
            Շարունակել
          </Button>
          <Button
            variant="link"
            type="button"
            className="w-full text-primary-main"
            onClick={() => router.push("/")}
          >
            Բաց թողնել
          </Button>
        </form>
      </Form>
    </>
  );
};
