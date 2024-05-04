"use client";

import useFetch from "@/lib/hooks/useFetch";
import { getTenders } from "@/lib/services/tenders";
import { ITender } from "@/mocks/Tender";
import { TenderItem } from "./TenderItem";
import { TenderSkeleton } from "@/components/atom/Skeletons";

export const TenderDashboard: React.FC = () => {
  const {
    data: { tenders, total },
    loading,
  }: {
    data: { tenders: ITender[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getTenders(),
    initialValue: {
      tenders: [],
      total: 0,
    },
    dependencies: [],
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
