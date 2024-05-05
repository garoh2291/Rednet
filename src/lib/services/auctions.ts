"use server";

import { AUCTION_MOCKS, IAuction } from "@/mocks/Auctions";
import { TENDER_MOCK } from "@/mocks/Tender";
import { cache } from "react";

export const getAuctions = cache(
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
    console.log("getAuctions", search, category, priceGte, priceLte);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let auctions = AUCTION_MOCKS as unknown as IAuction[];

    if (search) {
      const regex = new RegExp(search, "i");
      auctions = auctions.filter((auction) => regex.test(auction.name));
    }

    if (category) {
      auctions = auctions.filter(
        (auction) =>
          auction.category.replace(/\s/g, "_").replace(/[^a-zA-Z0-9]/g, "") ===
          category
      );
    }

    if (priceGte) {
      auctions = auctions.filter(
        (auction) => auction.lastBid >= Number(priceGte)
      );
    }

    if (priceLte) {
      auctions = auctions.filter(
        (auction) => auction.lastBid <= Number(priceLte)
      );
    }

    const total = auctions.length;

    return {
      auctions,
      total,
    };
  }
);

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

export const getAuctionCategrories = cache(
  async ({ search, type }: { search: string; type: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const categoryType = type === "auction" ? AUCTION_MOCKS : TENDER_MOCK;

    const categories = Array.from(
      new Set(categoryType.map((auction) => auction.category))
    ).filter((category) =>
      category.toLowerCase().includes(search.toLowerCase())
    );

    return categories;
  }
);
