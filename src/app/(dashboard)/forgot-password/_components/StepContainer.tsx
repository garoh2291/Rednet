"use client";

import { Step1 } from "@/components/ForgetPassword/Step1";
import { Step2 } from "@/components/ForgetPassword/Step2";
import { Step3 } from "@/components/ForgetPassword/Step3";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
  "3": <Step3 />,
};

export const StepComponent = ({ step = "1" }: { step: string }) => {
  const Step = steps[step as keyof typeof steps];

  return <>{Step}</>;
};
