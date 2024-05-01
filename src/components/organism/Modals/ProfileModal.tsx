"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { DialogTitle } from "@radix-ui/react-dialog";
import { ProfileForm } from "@/components/molecules/ProfileForm";

interface ProfileEditProps {
  editProfile?: string;
}

export const ProfileEdit: React.FC<ProfileEditProps> = ({ editProfile }) => {
  const [open, setOpen] = useState<boolean>(Boolean(editProfile));
  const router = useRouter();

  useEffect(() => {
    if (editProfile) {
      setOpen(true);
    }
  }, [editProfile]);

  const handleOpen = useCallback(() => {
    router.back();
    setOpen(false);
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-w-[654px] w-full p-12  ">
        <DialogHeader>
          <DialogTitle className="text-[32px] font-bold leading-0">
            Profile information
          </DialogTitle>
        </DialogHeader>
        <ProfileForm handleOpen={handleOpen} />
      </DialogContent>
    </Dialog>
  );
};
