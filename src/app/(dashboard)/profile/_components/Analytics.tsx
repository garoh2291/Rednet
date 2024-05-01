import Graph from "@/components/icons/Graph";
import Views from "@/components/icons/Views";
import { Separator } from "@/components/ui/separator";

export const Analytics: React.FC = () => {
  return (
    <div className="mt-[154px] bg-white p-6 flex flex-col gap-3 rounded-[8px]">
      <h3 className="text-[#002366] text-[24px] font-semibold">Analytics</h3>
      <Separator className="bg-[#B3CDFF] h-[0.5px]" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="h-[52px] w-[52px] rounded-full bg-[#EFF0F6] flex items-center justify-center">
            <Views />
          </div>
          <div className="flex flex-col justify-between">
            <h6 className="text-[#000D26] font-semibold text-[24px]">
              33 profile views
            </h6>
            <span className="font-medium text-[#002366] text-sm">
              Profile viewers in the past 90 days
            </span>
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
};
