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

interface AuctionDetailsProps {
  id: string;
}

export const AuctionDetails: React.FC<AuctionDetailsProps> = ({ id }) => {
  const [visibleText, setVisibleText] = useState(false);
  const { data: auction, loading } = useFetch({
    apiCallback: () => getSingleAuction(id),
    dependencies: [id],
    initialValue: null,
  });

  if (loading) {
    return <SingleAuctionSkeleton />;
  }

  console.log(auction);

  const toggleText = () => {
    setVisibleText((prev) => !prev);
  };

  const text = visibleText
    ? auction?.description
    : auction?.description.slice(0, 800);

  return (
    <div className="flex gap-8 mt-3 text-title-active">
      <ImageWrapper images={auction?.images || []} />
      <div className="flex-1">
        <h1 className="font-bold text-[32px] text-title-active">
          {auction?.name}
        </h1>
        <p className="font-normal text-[16px] flex items-center gap-2">
          Current Bid{" "}
          <span className="text-primary-main text-[24px] font-semibold">
            ${auction?.lastBid}
          </span>
        </p>
        <Separator className="mt-1 mb-2" />
        <div className="flex gap-2">
          <p className="font-medium text-sm border-r border-gray-400 pr-2">
            Location: {auction?.location}
          </p>
          <p className="font-semibold text-sm">{auction?.category}</p>
        </div>
        <div className="my-6 bg-input w-[219px] h-[54px] rounded-[8px] flex items-center justify-center gap-2">
          {calculateTime(auction?.startDate as Date, auction?.endDate as Date)}
        </div>
        <Bid lastBid={auction?.lastBid as number} />
        <div className="mt-6">
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
      </div>
    </div>
  );
};
