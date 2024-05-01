"use client";
import { Separator } from "@/components/ui/separator";
import { Service, SERVICE_MOCKS } from "@/mocks/Services";
import { ServiceItem } from "./ServiceItem";
import { getServices } from "@/lib/services/service";
import useFetch from "@/lib/hooks/useFetch";
import { ServiceSkeleton } from "@/components/atom/Skeletons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Down from "@/components/icons/Down";
import Plus from "@/components/icons/Plus";
import { getProducts, IProduct } from "@/lib/services/products";
import { useRouter, useSearchParams } from "next/navigation";

export const ProductWrapper: React.FC = () => {
  const [limit, setLimit] = useState(3);
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;
  const {
    data: { products, total },
    loading,
  }: {
    data: { products: IProduct[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getProducts(limit),
    initialValue: {
      products: [],
      total: 0,
    },
    dependencies: [],
  });

  const handleProduct = (id?: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("product", id?.toString() || "add");

    router.push(`?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="w-full min-h-[200px] p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
        <h3 className="text-[#002366] text-[24px] font-semibold">Products</h3>
        <Separator className="bg-[#B3CDFF] h-[0.5px]" />
        {Array.from({ length: 3 }).map((_, index) => (
          <ServiceSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[200px] p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-[#002366] text-[24px] font-semibold">Products</h3>
      {products.length ? (
        (products as unknown as Service[]).map((product) => (
          <ServiceItem key={product.id} item={product} variant="product" />
        ))
      ) : (
        <Separator className="bg-[#B3CDFF] h-[0.5px] mb-[30px]" />
      )}

      <div className="w-full flex items-center justify-between">
        {total > limit && (
          <Button
            variant="link"
            className="no-underline p-0 text-primary-main font-normal text-[18px] flex items-center gap-1"
          >
            Show 2 more products
            <Down />
          </Button>
        )}
        <Button
          onClick={() => handleProduct()}
          variant="link"
          className="no-underline p-0 text-primary-main font-semibold text-[18px] flex items-center gap-1"
        >
          <Plus fill="#F35D74" fillOpacity="1" />
          Add products
        </Button>
      </div>
    </div>
  );
};
