"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategoryFilter } from "../atom/Filters/CategoryFilter";
import { PriceFilter } from "../atom/Filters/Price";

export const Filter: React.FC = () => {
  return (
    <div className="w-[300px] min-h-[260px] bg-white shadow-main rounded-[7px] p-4">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">Category</AccordionTrigger>
          <AccordionContent>
            <CategoryFilter />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4">Deadline</AccordionTrigger>
          <AccordionContent>Deadline Filter</AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4">Price</AccordionTrigger>
          <AccordionContent>
            <PriceFilter />
          </AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-4">
          <AccordionTrigger className="px-4">
            Publisher category
          </AccordionTrigger>
          <AccordionContent>Publisher category Filter</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
