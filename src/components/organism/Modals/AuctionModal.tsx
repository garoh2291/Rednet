"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { IAuctionItem } from "@/mocks/Auctions";
import { calculateTime } from "@/components/molecules/AuctionItem";
import { Separator } from "@/components/ui/separator";
import File from "@/components/icons/File";
import Upload from "@/components/icons/Upload";
import { Input } from "@/components/ui/input";
import { z, ZodType, ZodTypeDef } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Info from "@/components/icons/Info";

export const checkStartTime = (
  startDate: Date = new Date(),
  endDate?: Date
) => {
  let finalTime = "completed";
  // if startDate is greater than date now , calculate time left  as day , hour , minute, if day or hour or minute is 0, don't show it

  if (new Date(startDate) > new Date()) {
    finalTime = "not started";
  }

  if (new Date(endDate as Date) > new Date()) {
    finalTime = "started";
  }

  const final = new Date(endDate as Date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return finalTime;
};

interface AuctionModalProps {
  actionItem: IAuctionItem;
  handleClose: () => void;
}

type FormData = {
  price: number;
};

const AuctionSchema: ZodType<
  FormData & { price: number },
  ZodTypeDef,
  FormData & { price: number }
> = z.object({
  price: z.number().min(1, {
    message: "Price is too low",
  }),
});

const AuctionModal: React.FC<AuctionModalProps> = ({
  actionItem,
  handleClose,
}) => {
  console.log(actionItem);
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [visibleText, setVisibleText] = useState<boolean>(false);
  const router = useRouter();
  const text = visibleText
    ? actionItem?.description
    : actionItem?.description.slice(0, 800);

  const handleOpen = useCallback(() => setOpen(false), []);
  const toggleText = () => {
    setVisibleText((prev) => !prev);
  };

  const isStarted = checkStartTime(actionItem.startDate, actionItem.endDate);

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0] as File;
    if (!file) {
      return;
    }

    console.log(file);
    setFiles((prev: string[]) => [...prev, file.name]);
  };

  const form = useForm<z.infer<typeof AuctionSchema>>({
    resolver: zodResolver(AuctionSchema),
    // defaultValues: {
    //   price: ,
    // },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);

    router.push("/auction?step=2");
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        handleOpen();
        handleClose();
        router.push("/");
      }}
    >
      <DialogContent className="mt-[300px] mb-[300px] max-w-[933px] min-h-[300px] w-full p-[48px]">
        <DialogHeader
          title="Auction Details"
          className="text-[#14142B] flex flex-col gap-4"
        >
          <h6 className="font-semibold text-[32px]"> {actionItem.name}</h6>
          <span className="font-semibold text-[12px]">Category name</span>
        </DialogHeader>
        <div className="my-8 flex flex-wrap gap-y-8">
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-[#64748B] text-[12px] font-medium">
              Մատակարարման Վերջնաժամկետը
            </span>
            <span className="text-[#191D23] text-[14px]">40 օր</span>
          </div>{" "}
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-[#64748B] text-[12px] font-medium">
              Աուկցիոնին գրանցվելու օրերի քանակը
            </span>
            <span className="text-[#191D23] text-[14px]">3 օր</span>
          </div>{" "}
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-[#64748B] text-[12px] font-medium">
              Չափաբաժին
            </span>
            <span className="text-[#191D23] text-[14px]">30</span>
          </div>{" "}
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-[#64748B] text-[12px] font-medium">
              Տարածաշրջան
            </span>
            <span className="text-[#191D23] text-[14px]">
              {actionItem.location}
            </span>
          </div>
        </div>
        <div className="w-[400px] bg-input h-[42px] rounded-[8px] flex  items-center p-2.5">
          {calculateTime(actionItem.startDate, actionItem.endDate)}
        </div>
        <Separator className="mt-8 mb-3" />
        <div className="">
          <span className="text-sm font-medium leading-[24px]">
            {text}{" "}
            {!visibleText && (
              <Button
                variant="link"
                className="pl-1 text-primary-main"
                onClick={toggleText}
              >
                More
              </Button>
            )}
          </span>
        </div>

        {isStarted === "started" && (
          <div className="border boder-[#A0A3BD] rounded-[8px] p-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="flex flex-col gap-1">
                {files.length
                  ? files.map((files: any, index: number) => (
                      <p
                        className="text-[#1890FF] font-normal text-sm flex gap-1 items-center"
                        key={index}
                      >
                        <File />
                        {files}
                      </p>
                    ))
                  : null}
                <div className="flex items-center gap-1">
                  <div
                    className="cursor-pointer relative w-[148px] h-[32px] border  border-[#D9D9D9] flex gap-2 items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileRef?.current?.click();
                    }}
                  >
                    <Upload />
                    <Input
                      type="file"
                      className="hidden"
                      onChange={handleDocumentChange}
                      ref={fileRef}
                    />
                    <p className="text-body font-normal">Upload photo</p>
                  </div>
                  <Info stroke="#6E7191" />
                </div>
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center gap-1"
                >
                  <div className="w-full flex gap-1 items-center">
                    {/* <Input
                      type="number"
                      placeholder="Ստարտային գինը "
                      className="h-[56px] w-[325px] rounded-[16px]"
                      {...form.register("price")}
                    /> */}
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field: { onChange, ...restFields } }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Ստարտային գինը "
                              type="number"
                              className="h-[56px] w-[325px] rounded-[16px]"
                              onChange={(e) => {
                                onChange(parseInt(e.target.value, 10));
                              }}
                              {...restFields}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      className=" w-[164px] h-[62px] rounded-[50px] font-semibold text-[18px]"
                      type="submit"
                    >
                      Մասնակցել
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuctionModal;
