import companyPic from "@/assets/companyPic.png";
import Image from "next/image";

interface CompanyDetailsProps {
  id: string;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ id }) => {
  return (
    <div className="flex gap-2 mt-[20px]">
      <div className="relative w-[56px] h-[56px] flex items-center justify-center">
        <Image
          src={companyPic}
          alt="company"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col  justify-center gap-0.5">
        <span className="font-semibold text-[16px] text-title-active">
          Company name
        </span>
        <span className="font-medium text-[14px] text-primary-main underline">
          34 published items
        </span>
      </div>
    </div>
  );
};
