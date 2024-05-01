"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { DialogTitle } from "@radix-ui/react-dialog";
import { IProduct } from "@/lib/services/products";
import { ProductForm } from "@/components/molecules/ProductForm";

interface ProfileEditProps {
  product?: string;
}

export const ProductModal: React.FC<ProfileEditProps> = ({ product }) => {
  const [open, setOpen] = useState<boolean>(Boolean(product));
  const [item, setItem] = useState<IProduct | object>({});
  const router = useRouter();

  useEffect(() => {
    if (product) {
      setOpen(true);

      if (product === "add") {
      } else {
        setItem({
          id: 1,
          name: "Product 1",
          description: "This is a product description",
          image: "https://via.placeholder.com/150",
        });
      }
    }
  }, [product]);

  const handleOpen = useCallback(() => {
    router.back();
    setOpen(false);
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-w-[654px] w-full p-12  ">
        <DialogHeader>
          <DialogTitle className="text-[32px] font-bold leading-0">
            Add new product
          </DialogTitle>
        </DialogHeader>
        <ProductForm handleOpen={handleOpen} />
      </DialogContent>
    </Dialog>
  );
};
