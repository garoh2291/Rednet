import { IAuction, IAuctionItem } from "@/mocks/Auctions";
import Image from "next/image";
import Watch from "../icons/Watch";
import { Separator } from "../ui/separator";
import Bell from "../icons/Bell";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AuctionModal = dynamic(() => import("../organism/Modals/AuctionModal"), {
  loading: () => <p>Loading...</p>,
});

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

    // const {
    //   days: finalDays,
    //   hours: finalHours,
    //   minutes: finalMinutes,
    //   seconds: finalSeconds,
    // } = CountdownComponent({
    //   days,
    //   hours,
    //   minutes,
    //   seconds,
    // });

    const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}m` : ""
    } ${!days && seconds ? `${seconds}s` : ""}`;

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
  console.log(auction);
  const [selectedAuction, setSelectedAuction] = useState<IAuctionItem | null>(
    null
  );

  const handleOpen = (auction: IAuctionItem) => {
    setSelectedAuction(auction);
  };

  return (
    <>
      <div className="w-full border rounded-[8px] bg-white p-4 border-[#D6D8E7] min-h-[200px]">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center">
            <div className="w-[56px] h-[56px] relative">
              <Image
                src={auction.profileImage}
                alt={auction.companyName}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-col justify-between text-[#14142B]">
              <p className="text-[18px] font-semibold">{auction.companyName}</p>
              <p className="font-semibold text-[12px]">
                {auction.companyType} | {auction.items.length} չափաբաժին
              </p>
            </div>
            <Link href={`auction/${auction.id}`}>
              <Button
                variant={"link"}
                className="text-primary-main text-[18px] font-semibold"
              >
                See all{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap pt-3">
          {auction.items.map((item, index) => {
            if (index <= 3) {
              return (
                <div
                  key={item.id + item.name}
                  className="text-[#14142B] hover:shadow-main-dark duration-300 border rounded-[8px] bg-white p-4 border-[#D6D8E7] w-[calc(50%-4px)] h-[274px]"
                >
                  <h3 className="text-[18px] font-semibold mb-4">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-normal">Quantity</p>
                    <p className="font-semibold text-[18px]">300 item</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between my-4">
                    <p className="font-normal">Price</p>
                    <p className="font-semibold text-[18px]">
                      $ {item.lastBid}
                    </p>
                  </div>
                  <div className="w-full bg-input h-[42px] rounded-[8px] flex  items-center p-2.5">
                    {calculateTime(item.startDate, item.endDate)}
                  </div>
                  <Button
                    onClick={() => handleOpen(item)}
                    variant={"link"}
                    className="text-[#F35D74] text-[18px] font-semibold mt-5"
                  >
                    Տեսնել ավելին
                  </Button>
                </div>
              );
            }
          })}
        </div>
      </div>
      {selectedAuction && (
        <AuctionModal
          actionItem={selectedAuction}
          handleClose={() => setSelectedAuction(null)}
        />
      )}
    </>
  );
};
