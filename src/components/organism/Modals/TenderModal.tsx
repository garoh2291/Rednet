"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useRef, useState } from "react";

import { ITenderSlot } from "@/mocks/Tender";

interface ITenderModal {
  tenderSlot: ITenderSlot;
  onClose: () => void;
}

const TenderModal: React.FC<ITenderModal> = ({ tenderSlot, onClose }) => {
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
        onClose();
      }}
    >
      <DialogContent className="mt-[300px] mb-[300px] max-w-[933px] min-h-[300px] w-full p-[48px]">
        <DialogHeader
          title="Auction Details"
          className="text-[#14142B] flex flex-col gap-4"
        >
          <h6 className="font-semibold text-[32px]"> {tenderSlot.name}</h6>
        </DialogHeader>
        <div className="my-8 flex flex-wrap gap-y-8">
          {tenderSlot.decription}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TenderModal;
