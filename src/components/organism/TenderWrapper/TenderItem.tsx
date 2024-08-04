import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ITender, ITenderSlot } from "@/mocks/Tender";
import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import TenderModal from "../Modals/TenderModal";

interface ITenderItem {
  tender: ITender;
}

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
});

export const TenderItem: React.FC<ITenderItem> = ({ tender }) => {
  const [selected, setSelected] = useState<ITenderSlot | null>(null);
  console.log(tender);
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <div className="h-[50px] flex items-center justify-between rounded-[4px] px-4 w-full bg-input">
          {tender.name}
          <Link href={`/tender/${tender.id}`} className="text-primary-main">
            See all
          </Link>
        </div>
        {tender.items.map((item) => (
          <div className="w-full rounded-[8px] p-4 bg-white shadow-main-dark">
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-between">
                <h6 className="text-[18px] font-semibold">{item.name}</h6>
                <span className="text-[12px]">{tender.category}</span>
              </div>
              <Link href={`/tender/${tender.id}?selectedTender=${item.id}`}>
                <Button
                  variant={"outline"}
                  className="border-primary-main text-primary-main bg-white h-[52px]"
                >
                  Մասնակցել
                </Button>
              </Link>
            </div>
            <div className="mt-3 text-[14px]">
              <span>
                «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական
                աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով
                հայտարարված գնանշման հարցում
              </span>
            </div>
            <Separator className="mt-4" />
            <div className="my-4 flex flex-wrap gap-y-8">
              <div className="w-1/2 flex flex-col gap-1">
                <span className="text-[#64748B] text-[12px] font-medium">
                  Մատակարարման Վերջնաժամկետը
                </span>
                <span className="text-[#191D23] text-[14px]">40 օր</span>
              </div>{" "}
              <div className="w-1/2 flex flex-col gap-1">
                <span className="text-[#64748B] text-[12px] font-medium">
                  Աուկցիոնին գրանցվելու օրերի քանակը
                </span>
                <span className="text-[#191D23] text-[14px]">3 օր</span>
              </div>{" "}
              <div className="w-1/2 flex flex-col gap-1">
                <span className="text-[#64748B] text-[12px] font-medium">
                  Չափաբաժին
                </span>
                <span className="text-[#191D23] text-[14px]">30</span>
              </div>{" "}
              <div className="w-1/2 flex flex-col gap-1">
                <span className="text-[#64748B] text-[12px] font-medium">
                  Տարածաշրջան
                </span>
                <span className="text-[#191D23] text-[14px]">
                  {item.location}
                </span>
              </div>
            </div>
            <Separator className="mb-4" />
            <div className="w-full flex items-center justify-between">
              <Button
                variant="link"
                className="text-primary-main text-[18px]"
                onClick={() => setSelected(item)}
              >
                Տեսնել մանրամասները
              </Button>
              <Button variant="link" className=" text-[18px]">
                <Star />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <TenderModal onClose={() => setSelected(null)} tenderSlot={selected} />
      )}
    </>
  );
};
