"use client";

import Search from "@/components/icons/Search";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/lib/hooks/useDebounce";
import useFetch from "@/lib/hooks/useFetch";
import { getAuctionCategrories } from "@/lib/services/auctions";
import { Label } from "@radix-ui/react-label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const CatgryItem = ({ category }: { category: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const isChecked = useMemo(() => {
    return (
      params.get("category") ===
      category.replace(/\s/g, "_").replace(/[^a-zA-Z0-9]/g, "")
    );
  }, [params, category]);

  const changeCategory = useCallback(() => {
    if (isChecked) {
      params.delete("category");
    } else {
      const categoryWithOutSpace = category
        .replace(/\s/g, "_")
        .replace(/[^a-zA-Z0-9]/g, "");
      params.set("category", categoryWithOutSpace);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [isChecked, category]);

  return (
    <div className="flex gap-3 items-center h-[40px]">
      <Checkbox checked={isChecked} onCheckedChange={changeCategory} />
      <Label className=" font-medium text-xs text-title-active">
        {category}
      </Label>
    </div>
  );
};

export const CategoryFilter: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchParams = useSearchParams() as URLSearchParams;
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const type = params.get("type") || "auction";

  const debouncedSearch = useDebounce(searchValue, 500);
  const { data: categories, loading } = useFetch({
    apiCallback: () => getAuctionCategrories({ search: debouncedSearch, type }),
    initialValue: [],
    dependencies: [debouncedSearch, type],
  });

  console.log(categories);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-h-[400px] overflow-y-auto">
      <div className="relative w-full h-[57px]">
        <Input
          placeholder="Search"
          className="pl-12"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Button variant={"link"} className="absolute left-0 top-0 h-full">
          <Search />
        </Button>
      </div>
      <div className="pl-3 mt-2">
        {categories.map((category) => (
          <CatgryItem key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
