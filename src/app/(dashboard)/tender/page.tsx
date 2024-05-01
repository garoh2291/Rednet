import Back from "@/components/icons/Back";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { StepComponent } from "./_components/StepContainer";
import { Success } from "@/components/organism/Modals/Success";

export default function Tender({
  searchParams: { step = "1" },
}: {
  searchParams: {
    step?: string;
  };
}) {
  const progress = Number(step) * 40;

  if (step === "3") {
    return <Success type="auction" />;
  }

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full  min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <Progress value={progress} />
            <div className="mt-3 mb-[25px] flex items-center gap-3">
              <p className="text-[18px] text-[#4E4B66]">{step}/2</p>
              <p className="text-[14px] font-normal text-[#6E7191]">Done</p>
            </div>
            <Separator />
          </div>
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] font-semibold">
              Տենդերի հայտարարություն
            </h1>
          </div>
          <StepComponent step={step} />
        </div>
      </div>
    </div>
  );
}
