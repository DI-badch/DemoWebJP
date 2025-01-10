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
      className={`${reverse ? "sm:di-flex-row-reverse" : "sm:di-flex-row"} di-flex di-w-full di-flex-col di-items-start di-justify-between di-gap-4 lg:di-gap-8`}
    >
      <div className="sm:di-w-1/2 di-w-full scale-img di-rounded-xl md:di-rounded-3xl">
        <Image
          src={image}
          alt="Image service"
          className="di-w-full scale-item-img"
          width={100}
          height={480}
        />
      </div>
      <div className="sm:di-w-1/2 di-w-full di-justify-between di-flex di-flex-wrap">
        <p className="di-font-medium di-font-bold sm:di-text-[32px] di-py-2 sm:di-p-0 di-text-3xl">
          {title}
        </p>
        <p className="di-text-[12px] lg:di-text-xl sm:di-line-clamp-[4] lg:di-line-clamp-[4] xl:di-line-clamp-[6] di-mt-3 lg:di-mt-8">
          {description}
        </p>
        <Button
          variant="navigation"
          Icon={ArrowRight}
          className="di-mt-2 sm:di-mt-4 xl:di-mt-8"
        >
          <p className="font-mplus di-text-[16px] di-font-bold">詳しく見る</p>
        </Button>
      </div>
    </div>
  );
}
