import { AuctionWrapper } from "@/components/organism/AuctionWrapper/AuctionWrapper";
import { TenderWrapper } from "@/components/organism/TenderWrapper/TenderWrapper";

export default function Home({
  searchParams: { type = "auction", ...params },
}: {
  searchParams: {
    type?: string;
    priceGte?: string;
    priceLte?: string;
    category?: string;
    deadline?: string;
    publisher?: string;
    search?: string;
  };
}) {
  console.log(type);

  return type === "auction" ? (
    <AuctionWrapper search={params.search} />
  ) : (
    <TenderWrapper />
  );
}
