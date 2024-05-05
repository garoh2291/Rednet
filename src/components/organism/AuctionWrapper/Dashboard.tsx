"use client";

import { AuctionItemSkeleton } from "@/components/atom/Skeletons";
import { AuctionItem } from "@/components/molecules/AuctionItem";
import useFetch from "@/lib/hooks/useFetch";
import { getAuctions } from "@/lib/services/auctions";
import { IAuction } from "@/mocks/Auctions";

interface DashboardProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  search,
  category,
  priceGte,
  priceLte,
}) => {
  const {
    data: { auctions, total },
    loading,
  }: {
    data: { auctions: IAuction[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getAuctions({ search, category, priceGte, priceLte }),
    initialValue: {
      auctions: [],
      total: 0,
    },
    dependencies: [search, category, priceGte, priceLte],
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
