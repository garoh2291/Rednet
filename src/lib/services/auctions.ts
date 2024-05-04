"use server";

import { AUCTION_MOCKS, IAuction } from "@/mocks/Auctions";
import { cache } from "react";

export const getAuctions = cache(async (search?: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let auctions = AUCTION_MOCKS as unknown as IAuction[];

  if (search) {
    const regex = new RegExp(search, "i");
    auctions = auctions.filter((auction) => regex.test(auction.name));
  }
  const total = auctions.length;

  return {
    auctions,
    total,
  };
});

export const getSingleAuction = cache(async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const auction = AUCTION_MOCKS.find(
    (auction) => auction.id === Number(id)
  ) as unknown as IAuction;

  return auction || {};
});

export const getFourAuctions = cache(async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const auctions = AUCTION_MOCKS.filter(
    (auction) => auction.id !== Number(id)
  ).slice(0, 4) as unknown as IAuction[];

  return auctions;
});
