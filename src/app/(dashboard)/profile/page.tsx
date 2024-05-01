import Image from "next/image";
import coverImage from "@/assets/cover-page.png";
import { Button } from "@/components/ui/button";
import Change from "@/components/icons/Change";
import { ProfileInfo } from "./_components/ProfileInfo";
import { Analytics } from "./_components/Analytics";
import { ServiceWrapper } from "./_components/ServiceWrapper";
import { ProductWrapper } from "./_components/ProductWrapper";
import { ProfileEdit } from "@/components/organism/Modals/ProfileModal";
import { ProductModal } from "@/components/organism/Modals/ProductModal";

export default function Profile({
  searchParams,
}: {
  searchParams: {
    edit: string;
    product: string;
  };
}) {
  return (
    <div className="container">
      <div className="my-[34px] w-full">
        <div className="w-full h-[358px] relative flex items-center justify-center">
          <div className="w-full h-full relative rounded-[8px]">
            <Image
              src={coverImage}
              alt="The image selected by the user."
              fill
              objectFit="cover"
              className="rounded-[8px]"
            />
            <div className="absolute right-6 top-6">
              <Button className="bg-white border-2 rounded-full h-[40px] w-[40px] p-0 ">
                <Change />
              </Button>
            </div>
          </div>
          <ProfileInfo />
        </div>
        <Analytics />
        <ServiceWrapper />
        <ProductWrapper />
        <ProfileEdit editProfile={searchParams.edit} />
        <ProductModal product={searchParams.product} />
      </div>
    </div>
  );
}
