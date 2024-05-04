"use client";

import { AuctionItemSkeleton } from "@/components/atom/Skeletons";
import { AuctionItem } from "@/components/molecules/AuctionItem";
import useFetch from "@/lib/hooks/useFetch";
import { getFourAuctions } from "@/lib/services/auctions";

interface OtherAuctionsProps {
  id: string;
}

export const OtherAuctions: React.FC<OtherAuctionsProps> = ({ id }) => {
  const { data, loading } = useFetch({
    apiCallback: () => getFourAuctions(id),
    dependencies: [id],
    initialValue: null,
  });

  if (loading) {
    return (
      <div className="flex-1 my-[88px] flex flex-wrap gap-5">
        {[...Array(4)].map((_, index) => (
          <AuctionItemSkeleton key={index} />
        ))}
      </div>
    );
  }
  console.log(data);

  return (
    <div className="my-[88px]">
      <h6 className="text-[24px] font-semibold">
        Other published items from company name
      </h6>
      <div className="flex gap-5 mt-8">
        {data?.map((auction) => (
          <AuctionItem key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};
