"use client";

import { useDebounce } from "@/lib/hooks/useDebounce";
import Sort from "../icons/Sort";
import { Input } from "../ui/input";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchSectionProps {
  search?: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ search }) => {
  const [searchValue, setSearchValue] = useState(search);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    params.set("search", debouncedSearch as string);
    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearch]);

  return (
    <div className="w-full mb-6 flex items-center justify-between">
      <div className="relative w-[412px] h-[57px]">
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center px-4 gap-2 text-[18px] font-semibold text-primary-main">
        <Sort /> Sort
      </div>
    </div>
  );
};
