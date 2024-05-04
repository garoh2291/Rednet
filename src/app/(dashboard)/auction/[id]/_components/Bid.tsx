"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface BidProps {
  lastBid: number;
}

export const Bid: React.FC<BidProps> = ({ lastBid }) => {
  const [currentBid, setCurrentBid] = useState(lastBid);

  const increaseBid = () => {
    setCurrentBid((prev) => prev + 1);
  };

  const decreaseBid = () => {
    setCurrentBid((prev) => prev - 1);
  };

  return (
    <div className="flex gap-1 items-center">
      <div className="w-[404px] h-[64px] relative">
        <Input
          type="number"
          className="w-full h-full"
          value={currentBid}
          onChange={(e) => setCurrentBid(parseInt(e.target.value))}
        />
        <div className="absolute flex gap-2 items-center right-[13px] top-0 bottom-0 margin-0">
          <Button
            onClick={decreaseBid}
            className="w-[40px] h-[40px] text-[24px] font-bold text-title-active bg-[#F7F7FC]"
          >
            -
          </Button>
          <Button
            onClick={increaseBid}
            className="w-[40px] h-[40px] text-[24px] font-bold text-title-active bg-[#F7F7FC]"
          >
            +
          </Button>
        </div>
      </div>
      <Button className="flex-1 h-[64px] bg-title-active">Place Bid</Button>
    </div>
  );
};
