import Image from "next/image";
import profileImage from "@/assets/profile-page.png";

export const ProfileInfo: React.FC = () => {
  return (
    <div className="absolute w-[90%] h-[240px] bg-[#ffffff] rounded-[8px] top-[256px] z-20 py-6 px-4">
      <div className="w-full h-full flex gap-[40px]">
        <div className="relative w-[192px] h-full border-[12px] border-[#FFE2E7] rounded-[8px]">
          <Image
            src={profileImage}
            alt="The image selected by the user."
            fill
            objectFit="cover"
            className="rounded-[4px]"
          />
        </div>
      </div>
    </div>
  );
};
