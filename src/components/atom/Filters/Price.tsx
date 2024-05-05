"use client";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";

export const PriceFilter: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const [priceFrom, setPriceFrom] = useState(
    () => params.get("priceGte") || ""
  );
  const [priceTo, setPriceTo] = useState(() => params.get("priceLte") || "");

  const debouncedPriceFrom = useDebounce(priceFrom, 500);
  const debouncedPriceTo = useDebounce(priceTo, 500);

  useEffect(() => {
    if (debouncedPriceFrom || debouncedPriceFrom === "") {
      params.set("priceGte", debouncedPriceFrom as string);
      router.replace(`${pathname}?${params.toString()}`);
    }
    if (debouncedPriceTo || debouncedPriceTo === "") {
      params.set("priceLte", debouncedPriceTo as string);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [debouncedPriceFrom, debouncedPriceTo]);

  return (
    <div className="w-full h-[57px] flex gap-1 items-center">
      <Input
        placeholder="From"
        value={priceFrom}
        type="number"
        onChange={(e) => {
          setPriceFrom(e.target.value);
        }}
      />
      <Input
        placeholder="To"
        value={priceTo}
        type="number"
        onChange={(e) => {
          setPriceTo(e.target.value);
        }}
      />
    </div>
  );
};
