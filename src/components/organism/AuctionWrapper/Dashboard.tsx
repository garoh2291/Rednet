"use client";

import { AuctionItemSkeleton } from "@/components/atom/Skeletons";
import { AuctionItem } from "@/components/molecules/AuctionItem";
import useFetch from "@/lib/hooks/useFetch";
import { getAuctions } from "@/lib/services/auctions";
import { IAuction } from "@/mocks/Auctions";

interface DashboardProps {
  search?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ search }) => {
  const {
    data: { auctions, total },
    loading,
  }: {
    data: { auctions: IAuction[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getAuctions(search),
    initialValue: {
      auctions: [],
      total: 0,
    },
    dependencies: [search],
  });

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
    <div className=" flex flex-wrap gap-5">
      {(auctions as IAuction[]).map((auction) => (
        <AuctionItem key={auction.id} auction={auction} />
      ))}
    </div>
  );
};
