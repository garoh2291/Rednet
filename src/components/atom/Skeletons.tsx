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

export const SingleAuctionSkeleton: React.FC = () => {
  return (
    <div className="w-full mt-6 flex gap-8">
      <Skeleton className="h-[601px] w-[607px]" />
      <div className="flex-1  space-y-3">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    </div>
  );
};

export const TenderSkeleton: React.FC = () => {
  return (
    <div className="w-full h-[203px] bg-[#FCFCFC] rounded-[8px] border border-placeholder p-4">
      <div className="space-y-4">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-24 w-full" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export const SingleTenderSkeleton: React.FC = () => {
  return (
    <div className="w-full  flex justify-between">
      <div className="w-[810px] mt-6 space-y-5">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />

        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-[62px] w-[200px] rounded-[50px]" />
      </div>
      <div className="w-[267px] h-[192px] p-6 bg-white space-y-6">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-8 w-[160px]" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};
