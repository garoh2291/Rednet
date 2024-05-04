import BackArrow from "@/components/icons/BackArrow";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { TenderDetails } from "./_components/TenderDetails";

export default function SingleTender({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-background">
      <div className="container">
        <div className="py-8">
          <div>
            <Link href="/?type=tender">
              <Button
                className="pl-0 text-primary-main font-semibold text-[18px] flex gap-3"
                variant="link"
              >
                <BackArrow />
                Back to tenders
              </Button>
            </Link>
          </div>
          <TenderDetails id={params.id} />
        </div>
      </div>
    </div>
  );
}
