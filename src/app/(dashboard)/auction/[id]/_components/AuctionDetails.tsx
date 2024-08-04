"use client";

import { calculateTime } from "@/components/molecules/AuctionItem";
import { ImageWrapper } from "@/components/organism/ImageWrapper";
import { Separator } from "@/components/ui/separator";
import useFetch from "@/lib/hooks/useFetch";
import { getSingleAuction } from "@/lib/services/auctions";
import { Bid } from "./Bid";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SingleAuctionSkeleton } from "@/components/atom/Skeletons";
import { IAuction, IAuctionItem } from "@/mocks/Auctions";
import AuctionModal from "@/components/organism/Modals/AuctionModal";

interface AuctionDetailsProps {
  id: string;
}

export const AuctionDetails: React.FC<AuctionDetailsProps> = ({ id }) => {
  const [selectedAuction, setSelectedAuction] = useState<IAuctionItem | null>(
    null
  );
  const {
    data: auction,
    loading,
  }: {
    data: IAuction | null;
    loading: boolean;
  } = useFetch({
    apiCallback: () => getSingleAuction(id),
    dependencies: [id],
    initialValue: null,
  });

  if (loading) {
    return <div> Loading</div>;
  }

  const handleOpen = (auction: IAuctionItem) => {
    setSelectedAuction(auction);
  };
  return (
    <>
      <div className="flex gap-2 flex-wrap pt-3">
        {/** @ts-ignore */}
        {(auction || []).items.map((item) => {
          return (
            <div
              key={item.id + item.name}
              className="text-[#14142B] hover:shadow-main-dark duration-300 border rounded-[8px] bg-white p-4 border-[#D6D8E7] w-[32%] h-[274px]"
            >
              <h3 className="text-[18px] font-semibold mb-4">{item.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <p className="font-normal">Quantity</p>
                <p className="font-semibold text-[18px]">300 item</p>
              </div>
              <Separator />
              <div className="flex items-center justify-between my-4">
                <p className="font-normal">Price</p>
                <p className="font-semibold text-[18px]">$ {item.lastBid}</p>
              </div>
              <div className="w-full bg-input h-[42px] rounded-[8px] flex  items-center p-2.5">
                {calculateTime(item.startDate, item.endDate)}
              </div>
              <Button
                onClick={() => handleOpen(item)}
                variant={"link"}
                className="text-[#F35D74] text-[18px] font-semibold mt-5"
              >
                Տեսնել ավելին
              </Button>
            </div>
          );
        })}
      </div>
      {selectedAuction && (
        <AuctionModal
          actionItem={selectedAuction}
          handleClose={() => setSelectedAuction(null)}
        />
      )}
    </>
  );
};
