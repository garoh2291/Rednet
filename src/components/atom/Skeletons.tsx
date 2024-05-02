import { Skeleton } from "../ui/skeleton";

export const ServiceSkeleton: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-[8px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export const AuctionItemSkeleton: React.FC = () => {
  return (
    <div className="w-[275px]  border border-[#D6D8E7] rounded-[8px]">
      <Skeleton className="h-[180px] w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
};
