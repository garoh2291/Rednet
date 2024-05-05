import { IAuction } from "@/mocks/Auctions";
import Image from "next/image";
import Watch from "../icons/Watch";
import { Separator } from "../ui/separator";
import Bell from "../icons/Bell";
import Link from "next/link";

interface IAuctionItemProps {
  auction: IAuction;
}

export const calculateTime = (startDate: Date = new Date(), endDate?: Date) => {
  // if startDate is greater than date now , calculate time left  as day , hour , minute, if day or hour or minute is 0, don't show it

  if (new Date(startDate) > new Date()) {
    console.log("sdsd", new Date(startDate).getTime(), new Date().getTime());
    const differenceInMilliseconds =
      new Date(startDate).getTime() - new Date().getTime();

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24; // Hours remaining after extracting days
    const days = Math.floor(differenceInHours / 24);

    const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}m` : ""
    }`;

    return (
      <div className="flex items-end gap-2">
        <div className="text-title-active font-normal flex gap-1 items-center">
          <Watch /> Starting in:
        </div>
        <div className="text-title-active flex items-end  text-[15px] font-semibold">
          {final}
        </div>
      </div>
    );
  }

  if (new Date(endDate as Date) > new Date()) {
    const differenceInMilliseconds =
      new Date(endDate as Date).getTime() - new Date().getTime();

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24; // Hours remaining after extracting days
    const days = Math.floor(differenceInHours / 24);

    const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}m` : ""
    }`;

    return (
      <div className="flex items-end gap-2">
        <div className="text-title-active font-normal flex gap-1 items-end">
          Time left:
        </div>
        <div className="text-title-active flex items-end  text-[15px] font-semibold">
          {final}
        </div>
      </div>
    );
  }

  const final = new Date(endDate as Date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-end gap-2">
      <div className="text-title-active font-normal flex gap-1 items-end">
        Completed:
      </div>
      <div className="text-title-active flex items-end text-[16px] font-semibold">
        {final}
      </div>
    </div>
  );
};

const checkStatusButton = (startDate: Date, endDate: Date, bid?: number) => {
  if (new Date(startDate) > new Date()) {
    return (
      <>
        <div className="w-full flex items-center gap-3 pt-2 pl-3 text-[18px] font-semibold text-primary-main">
          <Bell />
          <span>Notify me</span>
        </div>
      </>
    );
  }

  if (new Date(endDate) > new Date()) {
    return (
      <div className="w-full flex items-end justify-between text-[18px] pt-2 border-t border-[#D6D8E7]">
        <span className="font-normal">Current Bid</span>
        <span className="font-semibold">${bid}</span>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex items-center gap-3 pt-2 pl-3 text-[18px] font-semibold text-primary-main">
        <span>View details</span>
      </div>
    </>
  );
};

export const AuctionItem: React.FC<IAuctionItemProps> = ({ auction }) => {
  return (
    <Link
      href={`/auction/${auction.id}`}
      className="w-[275px] min-h-[372px] border border-[#D6D8E7] rounded-[8px]"
    >
      <div className="w-full h-[140px] rounded-tr-[8px] rounded-tl-[8px] relative">
        <Image
          src={auction.images[0]}
          alt={auction.name}
          layout="fill"
          objectFit="cover"
          className="rounded-tr-[8px] rounded-tl-[8px]"
        />
      </div>
      <div className="w-full py-4 pl-4 pr-[9px] flex flex-col gap-2">
        <h6 className="font-semibold text-[18px] text-title-active">
          {auction.name}
        </h6>
        <p className="font-normal text-[16px] text-title-active pr-3">
          {auction.subDescription}
        </p>
        <div className="w-full bg-input h-[54px] rounded-[8px] flex  items-center p-2.5">
          {calculateTime(auction.startDate, auction.endDate)}
        </div>
        {checkStatusButton(auction.startDate, auction.endDate, auction.lastBid)}
      </div>
    </Link>
  );
};
