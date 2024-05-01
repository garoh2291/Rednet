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

interface IProfileFormProps {
  handleOpen: () => void;
}

type WebsiteLinks = {
  name: string;
  link: string;
};

type FormData = {
  companyName: string;
  headline: string;
  description: string;
  industry: string;
  state: string;
  phone: string;
  email: string;
  linkedin: string;
  websites?: WebsiteLinks[];
};

const ProfileSchema: ZodType<FormData, ZodTypeDef, FormData> = z.object({
  companyName: z.string().min(2, {
    message: "Անունը շատ կարճ է",
  }),
  headline: z.string().min(2, {
    message: "Շատ կարճ է",
  }),
  description: z.string().min(2, {
    message: "Շատ կարճ է",
  }),
  industry: z.string().min(2, {
    message: "Շատ կարճ է",
  }),
  state: z.string().min(2, {
    message: "Շատ կարճ է",
  }),
  phone: z.string().min(2, {
    message: "Շատ կարճ է",
  }),
  email: z.string().email({
    message: "Էլ. փոստը սխալ է",
  }),
  linkedin: z.string({
    message: "Էլ. փոստը սխալ է",
  }),
  websites: z
    .array(
      z.object({
        name: z.string().min(2, {
          message: "Անունը շատ կարճ է",
        }),
        link: z.string().url({
          message: "Հղումը սխալ է",
        }),
      })
    )
    .optional(),
});

export const ProfileForm: React.FC<IProfileFormProps> = ({ handleOpen }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      companyName: "Airbnb",
      headline: "Software Development San Francisco, CA",
      description: "Airbnb is a community based on connection and belonging.",
      industry: "Software Development",
      state: "Marz",
      phone: "+1 (855) 635-7754",
      email: "support@airbnb.com",
      linkedin: "https://linkedinprofile.com",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
    handleOpen();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-col gap-y-8 "
      >
        <div className="flex gap-2 flex-col gap-y-8">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="headline"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Headline</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Industry</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem className=" flex-1 w-full ">
                <FormLabel>Linkedin</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {(form.getValues().websites || []).map((website, index) => (
            <FormField
              key={index}
              control={form.control}
              name={`websites.${index}.name`}
              render={({ field: { value, ...restFields } }) => (
                <FormItem className=" flex-1 w-full ">
                  <FormLabel>{website.name}</FormLabel>
                  <FormControl>
                    <Input
                      value={website.link}
                      placeholder="Link"
                      {...restFields}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div>
            <Button
              variant="link"
              className="no-underline p-0 text-primary-main font-semibold text-[18px] flex items-center gap-1"
              onClick={() => {
                form.setValue("websites", [
                  ...(form.getValues().websites || []),
                  {
                    name: "Website",
                    link: "",
                  },
                ]);
              }}
            >
              <Plus fill="#F35D74" fillOpacity="1" />
              Add another link
            </Button>
          </div>
        </div>

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
