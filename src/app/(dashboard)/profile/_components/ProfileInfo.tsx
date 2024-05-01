"use client";
import Image from "next/image";
import profileImage from "@/assets/profile-page.png";
import Verify from "@/components/icons/Verify";
import { Badge } from "@/components/ui/badge";
import Phone from "@/components/icons/phone";
import Message from "@/components/icons/Message";
import { Button } from "@/components/ui/button";
import Change from "@/components/icons/Change";
import Link from "@/components/icons/Link";
import Dots from "@/components/icons/Dots";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";

export const ProfileInfo: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;

  const handleEdit = () => {
    const params = new URLSearchParams(searchParams);

    params.set("edit", "profile");

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="absolute w-[90%] h-[240px] bg-[#ffffff] rounded-[8px] top-[256px] z-20 py-6 px-4">
      <div className="w-full h-full flex gap-[40px] relative">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative w-[192px] h-[192px] border-[12px] border-[#FFE2E7] rounded-[8px]">
              <Image
                src={profileImage}
                alt="The image selected by the user."
                fill
                objectFit="cover"
                className="rounded-[4px]"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit profile picture</DropdownMenuItem>
            <DropdownMenuItem>Delete profile picture</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 h-full flex flex-col gap-[10px]">
          <div className="flex gap-[11px] items-center">
            <h2 className="text-[#000D26] font-bold text-[32px]">Airbnb</h2>
            <Verify />
            <Badge
              variant="outline"
              className="py-[6px] px-[12px] rounded-[8px] bg-[#D4D3FF] border-none text-[15px] font-normal"
            >
              Software Development
            </Badge>
          </div>
          <div className="flex items-center gap-1 font-semibold text-[14px] text-body">
            <span className="border-r-2 border-body pr-1.5 ">Marz</span>
            <span> 1500 Employee</span>
          </div>
          <div className="text-title-active font-normal flex items-center gap-4">
            <p className="flex items-center gap-[6px] font-normal">
              <Phone /> +1 (855) 635-7754
            </p>
            <p className="flex items-center gap-[6px] font-normal">
              <Message /> support@airbnb.com
            </p>
            <Button className="bg-white border-2 rounded-full h-[40px] w-[40px] p-0 ">
              <Link />
            </Button>
            <Button variant="link" className="no-underline px-0">
              <Dots />
            </Button>
          </div>
          <Separator />
          <p className="text-body font-semibold">
            Software Development San Francisco, CA
          </p>
          <p className="font-medium text-body text-[12px]">
            Airbnb is a community based on connection and belonging.
          </p>
        </div>
      </div>
      <div className="absolute right-4 top-4">
        <Button
          onClick={handleEdit}
          className="bg-white border-2 rounded-full h-[40px] w-[40px] p-0 "
        >
          <Change />
        </Button>
      </div>
    </div>
  );
};
