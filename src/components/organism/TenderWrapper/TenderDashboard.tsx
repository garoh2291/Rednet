"use client";

import useFetch from "@/lib/hooks/useFetch";
import { getTenders } from "@/lib/services/tenders";
import { ITender } from "@/mocks/Tender";
import { TenderItem } from "./TenderItem";
import { TenderSkeleton } from "@/components/atom/Skeletons";

interface TenderDashboardProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const TenderDashboard: React.FC<TenderDashboardProps> = ({
  search,
  category,
  priceGte,
  priceLte,
}) => {
  const {
    data: { tenders, total },
    loading,
  }: {
    data: { tenders: ITender[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getTenders({ search, category, priceGte, priceLte }),
    initialValue: {
      tenders: [],
      total: 0,
    },
    dependencies: [search, category, priceGte, priceLte],
  });

  if (loading) {
    return (
      <div className="flex-1 flex flex-col gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <TenderSkeleton key={i} />
        ))}
      </div>
    );
  }

  console.log(tenders);

  return (
    <div className="flex-1 flex flex-col gap-8">
      {tenders.map((tender) => (
        <TenderItem key={tender.id} tender={tender} />
      ))}
    </div>
  );
};
