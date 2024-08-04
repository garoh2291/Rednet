"use client";

import { SingleTenderSkeleton } from "@/components/atom/Skeletons";
import Watch from "@/components/icons/Watch";
import { Button } from "@/components/ui/button";
import useFetch from "@/lib/hooks/useFetch";
import { getTender } from "@/lib/services/tenders";
import Link from "next/link";
import { memo, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Eye from "@/components/icons/Eye";
import EyeFilled from "@/components/icons/EyeFilled";
import { ITenderSlot } from "@/mocks/Tender";
import TenderModal from "@/components/organism/Modals/TenderModal";
import File from "@/components/icons/File";
import Upload from "@/components/icons/Upload";
import { Input } from "@/components/ui/input";
import { z, ZodType, ZodTypeDef } from "zod";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Info from "@/components/icons/Info";
import { Check } from "lucide-react";

interface TenderDetailsProps {
  id: string;
  selectedTender: string | undefined;
}

type FormData = {
  price: number;
};

const TenderSchema: ZodType<
  FormData & { price: number },
  ZodTypeDef,
  FormData & { price: number }
> = z.object({
  price: z.number().min(1, {
    message: "Price is too low",
  }),
});

export const calculateTime = (startDate: Date = new Date(), endDate?: Date) => {
  if (new Date(startDate) > new Date()) {
    const differenceInMilliseconds =
      new Date(startDate).getTime() - new Date().getTime();

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24; // Hours remaining after extracting days
    const days = Math.floor(differenceInHours / 24);

    const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}m` : ""
    } ${!days && seconds ? `${seconds}s` : ""}`;

    return (
      <div className="flex items-end gap-2">
        <div className="text-title-active font-normal flex gap-1 items-center">
          <Watch /> Starting in:
        </div>
        <div className="text-title-active flex items-end  text-[15px] font-semibold">
          {final}
        </div>
      </div>
    );
  }

  if (new Date(endDate as Date) > new Date()) {
    const differenceInMilliseconds =
      new Date(endDate as Date).getTime() - new Date().getTime();

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24; // Hours remaining after extracting days
    const days = Math.floor(differenceInHours / 24);

    const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}m` : ""
    } ${!days && seconds ? `${seconds}s` : ""}`;

    return (
      <div className="flex items-end gap-2">
        <div className="text-title-active font-normal flex gap-1 items-end">
          Time left:
        </div>
        <div className="text-title-active flex items-end  text-[15px] font-semibold">
          {final}
        </div>
      </div>
    );
  }

  const final = new Date(endDate as Date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-end gap-2">
      <div className="text-title-active font-normal flex gap-1 items-end">
        Completed:
      </div>
      <div className="text-title-active flex items-end text-[16px] font-semibold">
        {final}
      </div>
    </div>
  );
};

export const TenderDetails: React.FC<TenderDetailsProps> = memo(
  ({ id, selectedTender }) => {
    const [files, setFiles] = useState<string[]>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const [selected, setSelected] = useState<ITenderSlot | null>(null);
    const [isExpandedRow, setIsExpandedRow] = useState<boolean | null>(
      () => !!selectedTender
    );
    const [expandedRow, setExpandedRow] = useState<string | null>(
      () => selectedTender || null
    );
    const { data: tender, loading } = useFetch({
      apiCallback: () => getTender(id),
      dependencies: [id],
      initialValue: null,
    });

    const form = useForm<z.infer<typeof TenderSchema>>({
      resolver: zodResolver(TenderSchema),
    });

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0] as File;
      if (!file) {
        return;
      }

      console.log(file);
      setFiles((prev: string[]) => [...prev, file.name]);
    };

    const onSubmit = async (data: FormData) => {
      console.log("SUCCESS", data);
      const formData = {
        ...data,
        id: expandedRow,
      };

      setIsExpandedRow(false);
      setExpandedRow(null);
    };

    if (loading) {
      return <SingleTenderSkeleton />;
    }

    if (!tender) {
      return <div>No tender data available.</div>; // Add a fallback UI if tender data is not available
    }

    return (
      <>
        <div>
          <div className="flex justify-between">
            <div className="mt-6 max-w-[810px] w-full">
              <h1 className="text-[32px] text-title-active font-bold">
                {tender?.name}
              </h1>
              <p className="font-semibold text-[16px] text-body">
                Published by <span className="underline">Name Surname</span>
              </p>
              <p className="mt-6 font-medium text-sm text-body leading-[24px]">
                {tender?.description}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between w-[267px] h-[192px] bg-white rounded-[8px] p-6 shadow-secondary">
              <div className="flex flex-col gap-3">
                <span className="text-title-active text-sm font-medium">
                  Location: {tender?.location}
                </span>
                <div className="mt-2 rounded-[39px] py-[7px] px-4 flex items-center justify-center bg-[#D5F7FF] text-[#0096B7] text-[13px] font-medium">
                  {tender?.category}
                </div>
              </div>
              <div className=" bg-input w-[219px] h-[54px] rounded-[8px] flex items-center justify-center gap-2">
                {calculateTime(
                  tender?.startDate as Date,
                  tender?.endDate as Date
                )}
              </div>
            </div>
          </div>
          <div className="mt-[80px]">
            <Table className="border border-[#D6D8E7]">
              <TableHeader>
                <TableRow className="bg-[#EFF0F6]">
                  <TableHead className="max-w-[258px] text-center text-[18px] font-semibold border border-[#D6D8E7]">
                    Չափաբաժնի անուն
                  </TableHead>
                  <TableHead className="max-w-[258px] text-center text-[18px] font-semibold border border-[#D6D8E7]">
                    Տեսակ
                  </TableHead>{" "}
                  <TableHead className="max-w-[258px] text-center text-[18px] font-semibold border border-[#D6D8E7]">
                    Տարածաշրջան{" "}
                  </TableHead>{" "}
                  <TableHead className="max-w-[258px] text-center text-[18px] font-semibold border border-[#D6D8E7]">
                    Քանակ{" "}
                  </TableHead>{" "}
                  <TableHead className="max-w-[258px] text-center text-[18px] font-semibold border border-[#D6D8E7]">
                    Մասնակցել{" "}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tender?.items.map((item) => (
                  <>
                    <TableRow className="h-[64px] bg-white" key={item.id}>
                      <TableCell className="max-w-[258px] pl-5 text-left text-[16px] font-normal border border-[#D6D8E7] ">
                        <div className="flex items-center gap-4 w-full h-full">
                          {item.name}{" "}
                          <Button
                            variant={"link"}
                            onClick={() => setSelected(item)}
                          >
                            {" "}
                            <EyeFilled />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className=" max-w-[258px] text-center text-[16px] font-normal border border-[#D6D8E7]">
                        {item.type}
                      </TableCell>
                      <TableCell className="max-w-[258px] text-center text-[16px] font-normal border border-[#D6D8E7]">
                        {item.location}
                      </TableCell>
                      <TableCell className="max-w-[258px] text-center text-[16px] font-normal border border-[#D6D8E7]">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="max-w-[258px] text-center text-[16px] font-normal border border-[#D6D8E7]">
                        <Button
                          className="cursor-pointer w-[120px] h-[40px] bg-[#EFF0F6] text-[#F35D74] font-semibold"
                          onClick={() => {
                            setIsExpandedRow(true);
                            setExpandedRow(item.id.toString());
                          }}
                        >
                          Մասնակցել
                        </Button>
                      </TableCell>
                    </TableRow>
                    {isExpandedRow && expandedRow === item.id.toString() && (
                      <TableRow className=" h-[105px] " key={item.id}>
                        <TableCell colSpan={5}>
                          <div className="flex justify-end px-5 gap-[26px] items-center w-full h-full">
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
                                    <p className="text-body font-normal">
                                      Upload photo
                                    </p>
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
                                    <FormField
                                      control={form.control}
                                      name="price"
                                      render={({
                                        field: { onChange, ...restFields },
                                      }) => (
                                        <FormItem className="flex-1">
                                          <FormControl>
                                            <Input
                                              placeholder="Ստարտային գինը "
                                              type="number"
                                              className="h-[56px] w-[325px] rounded-[16px] bg-white border border-solid border-black"
                                              onChange={(e) => {
                                                onChange(
                                                  parseInt(e.target.value, 10)
                                                );
                                              }}
                                              {...restFields}
                                            />
                                          </FormControl>
                                        </FormItem>
                                      )}
                                    />
                                    <Button
                                      className=" w-[54px] h-[54px] rounded-full font-semibold text-[18px]"
                                      type="submit"
                                    >
                                      <Check color="white" />
                                    </Button>
                                  </div>
                                </form>
                              </Form>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {selected && (
          <TenderModal
            onClose={() => setSelected(null)}
            tenderSlot={selected}
          />
        )}
      </>
    );
  }
);
