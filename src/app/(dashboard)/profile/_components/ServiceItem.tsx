import Dots from "@/components/icons/Dots";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Service } from "@/mocks/Services";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";
import { IProduct } from "@/lib/services/products";

interface ServiceItemProps {
  item: Service | IProduct;
  variant: "service" | "product";
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item, variant }) => {
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;

  const handleEdit = () => {
    const params = new URLSearchParams(searchParams);

    params.set(variant, item.id.toString());

    router.replace(`?${params.toString()}`);
  };
  return (
    <>
      <Separator className="bg-[#B3CDFF] h-[0.5px]" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-[109px] h-[109px] rounded-[8px] relative">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-[8px]"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <h6 className="text-[#002366] text-[24px] font-semibold">
              {item.name}
            </h6>
            <p className="font-medium text-[#002366] text-sm">
              {item.description}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="link" className="no-underline ">
              <Dots />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
