import Back from "@/components/icons/Back";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { StepComponent } from "./_components/StepComponent";
import { Final } from "@/components/organism/Modals/Final";

export default function Register({
  searchParams: { step = "1" },
}: {
  searchParams: {
    step?: string;
  };
}) {
  const progress = Number(step) * 25;

  if (step === "4") {
    return <Final />;
  }

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <Progress value={progress} />
            <div className="mt-3 mb-[25px] flex items-center gap-3">
              <p className="text-[18px] text-[#4E4B66]">{step}/3</p>
              <p className="text-[14px] font-normal text-[#6E7191]">Done</p>
            </div>
            <Separator />
          </div>
          <StepComponent step={step} />
          {step !== "1" ? (
            <Link
              className="flex mt-8 gap-2 font-semibold"
              href={`/register?page=${Number(step) - 1}`}
            >
              <Back /> Back
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
