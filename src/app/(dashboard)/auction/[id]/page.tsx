import Back from "@/components/icons/Back";
import BackArrow from "@/components/icons/BackArrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CompanyDetails } from "./_components/CompanyDetails";
import { AuctionDetails } from "./_components/AuctionDetails";
import { OtherAuctions } from "./_components/OtherAuctions";

export default function AuctionItem({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="container">
      <div className="w-full bg-background py-8">
        <div>
          <Link href="/">
            <Button
              className="pl-0 text-primary-main font-semibold text-[18px] flex gap-3"
              variant="link"
            >
              <BackArrow />
              Back to auctions
            </Button>
          </Link>
        </div>
        <CompanyDetails id={"1"} />
        <AuctionDetails id={params.id} />
        <OtherAuctions id={params.id} />
      </div>
    </div>
  );
}
