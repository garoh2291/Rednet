import { ITender } from "@/mocks/Tender";
import Link from "next/link";

interface ITenderItem {
  tender: ITender;
}

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
});

export const TenderItem: React.FC<ITenderItem> = ({ tender }) => {
  return (
    <Link
      href={`/tender/${tender.id}`}
      className="bg-[#FCFCFC] w-full min-h-[203px] rounded-[8px] border border-placeholder p-4"
    >
      <h6 className="text-[18px] font-semibold text-title-active">
        {tender.name}
      </h6>
      <div className="mt-2 my-3 text-title-active text-[16px] font-normal leading-[28px]">
        {tender.description}
      </div>
      <div className="flex items-center justify-between">
        <div className="rounded-[39px] py-[7px] px-4 flex items-center justify-center bg-[#D5F7FF] text-[#0096B7] text-[13px] font-medium">
          {tender.category}
        </div>
        <span className="text-xs font-medium text-title-active">
          Deadline: {formatter.format(tender.endDate)}
        </span>
      </div>
    </Link>
  );
};
