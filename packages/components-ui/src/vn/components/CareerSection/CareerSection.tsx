import Link from "next/link";
import { AccordionPanel } from "../AccordionPanel/AccordionPanel";

interface CareerType {
  title: string | null;
  id: number;
  slug: string | null;
  url: string;
}

interface CareerSectionProps {
  careers: CareerType[];
}

export const CareerSection = ({ careers }: CareerSectionProps) => {
  return (
    <section
      id="career"
      className="di-w-full di-bg-primary-main di-px-[20px] di-pb-[60px]"
    >
      <div className="di-w-full md:di-w-[1244px] md:di-mx-auto md:di-pt-[40px]">
        <div className="di-mt-[24px]">
          <p className="di-text-white di-font-medium di-leading-[14.46px] md:di-text-[32px] md:di-leading-[28.93px] md:di-mb-[16px]">
            Tuyển dụng
          </p>
          <p className="di-text-2xl di-font-bold di-capitalize di-leading-normal di-text-white md:di-text-[64px] md:di-leading-[57.86px] md:di-mb-[31px]">
            CAREER
          </p>
        </div>

        <div className="di-mt-[41px] di-flex di-flex-col md:di-flex-row md:di-flex-wrap di-gap-[21px] md:di-gap-[14px] lg:di-w-[1275px]">
          {careers.map((e) => (
            <Link href={e.slug || ""} key={e.id}>
              <AccordionPanel
                label={e.title || ""}
                contentPosition="top"
                className="md:di-w-[415px] di-bg-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
