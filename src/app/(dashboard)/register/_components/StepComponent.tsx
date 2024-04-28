"use client";

import { Step1 } from "@/components/Register/Step1";
import { Step2 } from "@/components/Register/Step2";
import { Step3 } from "@/components/Register/Step3";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
  "3": <Step3 />,
};

export const StepComponent = ({ step = "1" }: { step: string }) => {
  const Step = steps[step as keyof typeof steps];

  return <>{Step}</>;
};
