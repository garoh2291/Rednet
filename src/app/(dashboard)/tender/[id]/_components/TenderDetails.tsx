"use client";

import { SingleTenderSkeleton } from "@/components/atom/Skeletons";
import { calculateTime } from "@/components/molecules/AuctionItem";
import { Button } from "@/components/ui/button";
import useFetch from "@/lib/hooks/useFetch";
import { getTender } from "@/lib/services/tenders";
import Link from "next/link";

interface TenderDetailsProps {
  id: string;
}

export const TenderDetails: React.FC<TenderDetailsProps> = ({ id }) => {
  const { data: tender, loading } = useFetch({
    apiCallback: () => getTender(id),
    dependencies: [id],
    initialValue: null,
  });

  if (loading) {
    return <SingleTenderSkeleton />;
  }
  return (
    <div className="flex justify-between">
      <div className="mt-6 max-w-[810px] w-full">
        <h1 className="text-[32px] text-title-active font-bold">
          {tender?.name}
        </h1>
        <p className="font-semibold text-[16px] text-body">
          Published by <span className="underline">Name Surname</span>
        </p>
        <p className="mt-6 font-medium text-sm text-body leading-[24px]">
          {tender?.description}
        </p>
        <Link href="/tender">
          <Button className="mt-6 h-[62px] px-8" variant={"default"}>
            Ներկայացնել գնառաջարկ
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-between w-[267px] h-[192px] bg-white rounded-[8px] p-6 shadow-secondary">
        <div className="flex flex-col gap-3">
          <span className="text-title-active text-sm font-medium">
            Location: {tender?.location}
          </span>
          <div className="mt-2 rounded-[39px] py-[7px] px-4 flex items-center justify-center bg-[#D5F7FF] text-[#0096B7] text-[13px] font-medium">
            {tender?.category}
          </div>
        </div>
        <div className=" bg-input w-[219px] h-[54px] rounded-[8px] flex items-center justify-center gap-2">
          {calculateTime(tender?.startDate as Date, tender?.endDate as Date)}
        </div>
      </div>
    </div>
  );
};
