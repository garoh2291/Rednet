"use client";

import { Step1 } from "@/components/Tender/Step1";
import { Step2 } from "@/components/Tender/Step2";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
};

export const StepComponent = ({ step = "1" }: { step: string }) => {
  const Step = steps[step as keyof typeof steps];

  return <>{Step}</>;
};
