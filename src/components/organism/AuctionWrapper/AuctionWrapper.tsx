import { Dashboard } from "./Dashboard";
import { Filter } from "../../molecules/Filter";
import { SearchSection } from "@/components/molecules/SearchSection";

interface AuctionWrapperProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = ({
  search,
  category,
  priceGte,
  priceLte,
}) => {
  return (
    <div className="container">
      <div className="flex gap-[33px] mt-8 items-start">
        <Filter />
        <div className="flex-1">
          <SearchSection search={search} />
          <Dashboard
            search={search}
            category={category}
            priceLte={priceLte}
            priceGte={priceGte}
          />
        </div>
      </div>
    </div>
  );
};
