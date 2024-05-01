import Back from "@/components/icons/Back";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { StepComponent } from "./_components/StepContainer";

export default function Auction({
  searchParams: { step = "1" },
}: {
  searchParams: {
    step?: string;
  };
}) {
  const progress = Number(step) * 40;

  //   if (step === "4") {
  //     return <Final />;
  //   }

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="min-w-[560px] max-w-[950px]  min-h-[600px] bg-white rounded-[24px] p-[60px]">
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
              Հայտարարությունների
              <br /> հրապարակում
            </h1>
          </div>
          <StepComponent step={step} />
        </div>
      </div>
    </div>
  );
}
