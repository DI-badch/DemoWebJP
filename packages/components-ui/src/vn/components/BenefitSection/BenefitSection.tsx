import Link from "next/link";
import { ArrowIcon } from "../../icons/Arrow";
import Image from "next/image";

export interface BenefitType {
  id: number;
  image: string;
  content: string;
}

interface BenefitSectionProps {
  benefits: BenefitType[];
  title: string;
  subtitle: string;
}

export const BenefitSection = ({
  benefits,
  subtitle,
  title,
}: BenefitSectionProps) => {
  return (
    <section id="benefit" className="di-w-full di-bg-primary-main di-px-[20px]">
      <div className="di-w-full md:di-w-[1244px] md:di-mx-auto di-pt-[24px] md:di-pt-[48px] di-pb-[25px] md:di-pb-[39px]">
        <div className="di-text-white di-mb-[34px]">
          <p className="di-text-base di-font-medium di-leading-[14.46px] md:di-text-[32px] md:di-leading-[28.93px] md:di-mb-[16px]">
            {title}
          </p>
          <p className="di-text-2xl di-font-bold di-capitalize di-leading-normal md:di-text-[64px] md:di-leading-[57.86px] md:di-mb-[31px]">
            {subtitle}
          </p>
        </div>
        <div className="di-mb-[21px] di-w-full md:di-flex md:di-flex-wrap">
          {benefits.map((e) => (
            <div
              key={e.id}
              className="di-flex di-items-center di-gap-[20px] di-mb-[17px] di-text-white di-text-xs di-font-normal di-leading-none md:di-text-xl md:di-leading-relaxed md:di-w-1/2 md:di-mb-[45px]"
              style={{
                order: e.id,
              }}
            >
              <Image
                src={e.image || ""}
                alt={e.content || ""}
                width={70}
                height={60}
                className="md:di-w-[123px] md:di-h-[147px]"
              />
              <p>{e.content}</p>
            </div>
          ))}
        </div>
        <div className="di-flex di-justify-end md:di-mt-[-30px]">
          <div className="di-flex di-justify-between di-items-center di-w-1/2 md:di-justify-end md:di-gap-[19px]">
            <Link
              href="#"
              className="di-text-white di-text-xs di-font-semibold di-leading-[10.85px] di-italic md:di-text-2xl md:di-leading-snug"
            >
              ...Và nhiều phúc lợi khác
            </Link>
            <ArrowIcon fill="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
};
