import Image from "next/image";
import Button from "../../ui/Button";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export function ServiceComponent({
  title = "",
  description = "",
  image = "",
  reverse = false,
}: ServiceProps) {
  return (
    <div
      className={`${reverse ? "di-flex-row-reverse" : ""} di-flex di-flex-wrap di-items-start di-justify-between md:di-gap-24 di-gap-4`}
    >
      <div className="di-flex-1 di-min-w-96 scale-img di-rounded-xl md:di-rounded-3xl">
        <Image
          src={image}
          width={880}
          height={480}
          alt="Image service"
          className="di-w-[880px] scale-item-img"
        />
      </div>
      <div className="di-flex-1">
        <p className="md:di-font-medium di-font-bold md:di-text-5xl di-py-2 di-text-3xl">
          {title}
        </p>
        <p className="di-text-lg md:di-py-10 di-py-6">{description}</p>
        <Button variant="navigation" Icon={ArrowRight} className="md:di-mt-10">
          <p className="font-mplus di-text-xl di-font-bold">詳しく見る</p>
        </Button>
      </div>
    </div>
  );
}
