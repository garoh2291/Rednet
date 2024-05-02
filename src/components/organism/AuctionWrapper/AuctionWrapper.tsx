import { Dashboard } from "./Dashboard";
import { AuctionFilter } from "./Filter";

export const AuctionWrapper: React.FC = () => {
  return (
    <div className="container">
      <div className="flex gap-[33px] mt-8 items-start">
        <AuctionFilter />
        <Dashboard />
      </div>
    </div>
  );
};
