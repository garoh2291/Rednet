import { IAuction } from "@/mocks/Auctions";
import Image from "next/image";
import Watch from "../icons/Watch";
import { Separator } from "../ui/separator";
import Bell from "../icons/Bell";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IAuctionItemProps {
  auction: IAuction;
}

const CountdownComponent = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const [timeLeft, setTimeLeft] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const totalSeconds =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    const intervalId = setInterval(() => {
      setTimeLeft((currentTime) => {
        const total =
          currentTime.days * 24 * 60 * 60 +
          currentTime.hours * 60 * 60 +
          currentTime.minutes * 60 +
          currentTime.seconds -
          1;

        if (total < 0) {
          clearInterval(intervalId);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(total / (24 * 60 * 60)),
          hours: Math.floor((total % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((total % (60 * 60)) / 60),
          seconds: Math.floor(total % 60),
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [days, hours, minutes, seconds]);

  return {
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
  };
};

export const calculateTime = (startDate: Date = new Date(), endDate?: Date) => {
  if (new Date(startDate) > new Date()) {
    const differenceInMilliseconds =
      new Date(startDate).getTime() - new Date().getTime();

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24; // Hours remaining after extracting days
    const days = Math.floor(differenceInHours / 24);

    const {
      days: finalDays,
      hours: finalHours,
      minutes: finalMinutes,
      seconds: finalSeconds,
    } = CountdownComponent({
      days,
      hours,
      minutes,
      seconds,
    });

    const final = `${finalDays ? `${finalDays}d` : ""} ${
      finalHours ? `${finalHours}h` : ""
    } ${finalMinutes ? `${finalMinutes}m` : ""} ${
      !finalDays && finalSeconds ? `${finalSeconds}s` : ""
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
    } ${!days && seconds ? `${seconds}s` : ""}`;

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
