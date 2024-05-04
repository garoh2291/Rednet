"use server";

import { TENDER_MOCK, ITender } from "@/mocks/Tender";
import { cache } from "react";

export const getTenders = cache(async (limit?: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const tenders = TENDER_MOCK as unknown as ITender[];
  const total = tenders.length;

  return {
    tenders,
    total,
  };
});

export const getTender = cache(async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const tenders = TENDER_MOCK as unknown as ITender[];
  const tender = tenders.find((tender) => tender.id === Number(id));

  return tender;
});
