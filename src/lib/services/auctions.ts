"use server";

import { AUCTION_MOCKS, IAuction } from "@/mocks/Auctions";
import { cache } from "react";

export const getAuctions = cache(async (limit?: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const auctions = AUCTION_MOCKS as unknown as IAuction[];
  const total = auctions.length;

  return {
    auctions,
    total,
  };
});
