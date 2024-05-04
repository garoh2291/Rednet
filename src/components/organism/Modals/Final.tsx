"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";
import Welcome from "@/assets/welcome.png";
import { Button } from "@/components/ui/button";

const Final: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOpen = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        handleOpen();
        router.push("/");
      }}
    >
      <DialogContent className="max-w-[644px] w-full ">
        <div>
          <div className="flex w-full items-center justify-center">
            <Image src={Welcome} width={229} height={135} alt="welcome image" />
          </div>
          <div className="text-center flex items-center gap-6 flex-col">
            <h2 className="text-title-active text-[48px] font-bold">
              Բարի գալուստ
              <br /> Rednet
            </h2>
            <p className="text-body font-normal">
              See all the new features we’ve added
              <br /> through our tutorial.
            </p>
            <Button
              className="mt-4 px-10 py-6"
              onClick={() => {
                handleOpen();
                router.push("/profile/create");
              }}
            >
              Պրոֆայլի ստեղծում
            </Button>
            <Button
              variant={"link"}
              className="py-0"
              onClick={() => {
                handleOpen();
                router.push("/");
              }}
            >
              Բաց թողնել
            </Button>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(Final);
