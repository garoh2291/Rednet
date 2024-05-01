"use server";

import { Service, SERVICE_MOCKS } from "@/mocks/Services";
import { cache } from "react";

export const getServices = cache(async (limit?: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const services = SERVICE_MOCKS as unknown as Service[];
  const total = services.length;

  if (limit) {
    return {
      services: services.slice(0, limit),
      total,
    };
  }

  return {
    services,
    total,
  };
});
