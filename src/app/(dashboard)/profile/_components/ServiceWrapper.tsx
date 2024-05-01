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

export const ServiceWrapper: React.FC = () => {
  const [limit, setLimit] = useState(3);
  const {
    data: { services, total },
    loading,
  }: {
    data: { services: Service[]; total: number };
    loading: boolean;
  } = useFetch({
    apiCallback: () => getServices(limit),
    initialValue: {
      services: [],
      total: 0,
    },
    dependencies: [limit],
  });

  if (!services.length && loading) {
    return (
      <div className="w-full min-h-[200px] p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
        <h3 className="text-[#002366] text-[24px] font-semibold">Services</h3>
        <Separator className="bg-[#B3CDFF] h-[0.5px]" />
        {Array.from({ length: 3 }).map((_, index) => (
          <ServiceSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[200px] p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-[#002366] text-[24px] font-semibold">Services</h3>
      {(services as unknown as Service[]).map((service) => (
        <ServiceItem key={service.id} item={service} variant="service" />
      ))}

      {services.length && loading && <ServiceSkeleton />}
      <div className="w-full flex items-center justify-between">
        {total > limit && (
          <Button
            variant="link"
            className="no-underline p-0 text-primary-main font-normal text-[18px] flex items-center gap-1"
            onClick={() => {
              setLimit((prev) => prev + 2);
            }}
          >
            Show 2 more services
            <Down />
          </Button>
        )}
        <Button
          variant="link"
          className="no-underline p-0 text-primary-main font-semibold text-[18px] flex items-center gap-1"
        >
          <Plus fill="#F35D74" fillOpacity="1" />
          Add services
        </Button>
      </div>
    </div>
  );
};
