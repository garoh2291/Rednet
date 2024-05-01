"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Welcome from "@/assets/welcome.png";
import { Button } from "@/components/ui/button";

interface IProps {
  type: string;
}

export const Success: React.FC<IProps> = ({ type }) => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();

  const handleOpen = useCallback(() => setOpen(false), []);

  return (
    <Dialog
      defaultOpen={open}
      onOpenChange={() => {
        handleOpen();
        router.push("/");
      }}
    >
      <DialogContent className="max-w-[644px] w-full ">
        <div className="flex w-full items-center justify-center">
          <Image src={Welcome} width={229} height={135} alt="welcome image" />
        </div>
        <div className="text-center flex items-center gap-6 flex-col">
          <h2 className="text-title-active text-[48px] font-bold">
            Հայտարարությունը <br /> ստեղծված է
          </h2>
          <p className="text-body font-normal">
            Շնորհավորում ենք ձեր
            <br /> հայտարարությունը բարեհաջող <br />
            ստեղծվել է
          </p>
          <Button
            className="mt-4 px-10 py-6"
            onClick={() => {
              handleOpen();
              router.push("/");
            }}
          >
            Տեսնել հայտարարությունը
          </Button>
          <Button
            variant={"link"}
            className="py-0"
            onClick={() => {
              handleOpen();
              router.push(`/${type}`);
            }}
          >
            Ավելացնել հայտարարություն
          </Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
