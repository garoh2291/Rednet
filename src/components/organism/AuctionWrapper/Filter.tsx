"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AuctionFilter: React.FC = () => {
  return (
    <div className="w-[300px] min-h-[300px] bg-white shadow-main rounded-[7px] p-4">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>Category Filter</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Deadline</AccordionTrigger>
          <AccordionContent>Deadline Filter</AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-3">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>Price Filter</AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-4">
          <AccordionTrigger>Publisher category</AccordionTrigger>
          <AccordionContent>Publisher category Filter</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
