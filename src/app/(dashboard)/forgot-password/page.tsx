import Back from "@/components/icons/Back";
import Link from "next/link";
import { StepComponent } from "./_components/StepContainer";

export default function ForgotPassword({
  searchParams: { step = "1" },
}: {
  searchParams: {
    step?: string;
  };
}) {
  const heading =
    step === "3" ? "Ստեղծել նոր գաղտնաբառ" : "Վերականգնել գաղտնաբառը";

  const subText =
    step === "1"
      ? "Խնդրում ենք մուտքագրել ձեր էլ. փոստը,<br/> որով գրանցվել եք համակարգ"
      : step === "2"
      ? "Մենք ուղարկել ենք կոդը ձեր էլ.փոստի հասցեին"
      : "";

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] font-semibold">
              {heading}
            </h1>
            <p
              className="mt-1 text-body"
              dangerouslySetInnerHTML={{ __html: subText }}
            ></p>
          </div>
          <StepComponent step={step} />
          <div>
            <Link
              className="flex mt-8 gap-2 font-semibold"
              href={`/register?page=${Number(step) - 1}`}
            >
              <Back /> Վերադառնալ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
