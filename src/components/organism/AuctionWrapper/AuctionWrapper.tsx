import { Dashboard } from "./Dashboard";
import { Filter } from "../../molecules/Filter";
import { SearchSection } from "@/components/molecules/SearchSection";

interface AuctionWrapperProps {
  search?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = ({ search }) => {
  return (
    <div className="container">
      <div className="flex gap-[33px] mt-8 items-start">
        <Filter />
        <div className="flex-1">
          <SearchSection search={search} />
          <Dashboard search={search} />
        </div>
      </div>
    </div>
  );
};
