import { AuctionWrapper } from "@/components/organism/AuctionWrapper/AuctionWrapper";

export default function Home({
  searchParams: { type = "auction" },
}: {
  searchParams: {
    type?: string;
    priceGte?: string;
    priceLte?: string;
    category?: string;
    deadline?: string;
    publisher?: string;
  };
}) {
  console.log(type);

  return type === "auction" ? (
    <AuctionWrapper />
  ) : (
    <div className="container">Dashboard</div>
  );
}
