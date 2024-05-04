import { Filter } from "../../molecules/Filter";
import { TenderDashboard } from "./TenderDashboard";

export const TenderWrapper: React.FC = () => {
  return (
    <div className="container">
      <div className="flex gap-[33px] mt-8 items-start">
        <Filter />
        <TenderDashboard />
      </div>
    </div>
  );
};
