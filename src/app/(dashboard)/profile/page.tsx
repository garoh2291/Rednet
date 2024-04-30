import Image from "next/image";
import coverImage from "@/assets/cover-page.png";
import { Button } from "@/components/ui/button";
import Change from "@/components/icons/Change";
import { ProfileInfo } from "./_components/ProfileInfo";

export default function Profile() {
  return (
    <div className="container">
      <div className="mt-[34px] w-full h-[358px] relative flex items-center justify-center">
        <div className="w-full h-full relative rounded-[8px]">
          <Image
            src={coverImage}
            alt="The image selected by the user."
            fill
            objectFit="cover"
            className="rounded-[7px]"
          />
          <div className="absolute right-6 top-6">
            <Button className="bg-white border-2 rounded-full h-[40px] w-[40px] p-0 ">
              <Change />
            </Button>
          </div>
        </div>
        <ProfileInfo />
      </div>
    </div>
  );
}
