"use server";

import { TENDER_MOCK, ITender } from "@/mocks/Tender";
import { cache } from "react";

export const getTenders = cache(
  async ({
    search,
    category,
    priceGte,
    priceLte,
  }: {
    search?: string;
    category?: string;
    priceGte?: string;
    priceLte?: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let tenders = TENDER_MOCK as unknown as ITender[];

    if (search) {
      const regex = new RegExp(search, "i");
      tenders = tenders.filter((tender) => regex.test(tender.name));
    }

    if (category) {
      tenders = tenders.filter(
        (tender) =>
          tender.category.replace(/\s/g, "_").replace(/[^a-zA-Z0-9]/g, "") ===
          category
      );
    }

    if (priceGte) {
      tenders = tenders.filter((tender) => tender.lastBid >= Number(priceGte));
    }

    if (priceLte) {
      tenders = tenders.filter((tender) => tender.lastBid <= Number(priceLte));
    }

    const total = tenders.length;

    return {
      tenders,
      total,
    };
  }
);

export const getTender = cache(async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const tenders = TENDER_MOCK as unknown as ITender[];
  const tender = tenders.find((tender) => tender.id === Number(id));

  return tender;
});
