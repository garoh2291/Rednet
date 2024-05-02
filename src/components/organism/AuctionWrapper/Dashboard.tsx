"use client";

import { AuctionItemSkeleton } from "@/components/atom/Skeletons";
import { AuctionItem } from "@/components/molecules/AuctionItem";
import useFetch from "@/lib/hooks/useFetch";
import { getAuctions } from "@/lib/services/auctions";
import { IAuction } from "@/mocks/Auctions";

export const Dashboard: React.FC = () => {
  const {
    data: { auctions, total },
    loading,
  }: {
    data: { auctions: IAuction[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getAuctions(),
    initialValue: {
      auctions: [],
      total: 0,
    },
    dependencies: [],
  });

  console.log(auctions, total, loading);

  if (loading) {
    return (
      <div className="flex-1 flex flex-wrap gap-5">
        {[...Array(9)].map((_, index) => (
          <AuctionItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-wrap gap-5">
      {(auctions as IAuction[]).map((auction) => (
        <AuctionItem key={auction.id} auction={auction} />
      ))}
    </div>
  );
};
