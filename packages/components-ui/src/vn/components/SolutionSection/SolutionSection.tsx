"use client";
import { useState } from "react";
import { AccordionPanel } from "../AccordionPanel/AccordionPanel";

interface ServiceType {
  id: number;
  title?: string | null;
  slug?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  published_at?: Date | null;
  created_by_id?: number | null;
  updated_by_id?: number | null;
  url?: string | null;
  image?: string | null;
}

interface ServiceTypeProps {
  services: ServiceType[];
  title?: string;
  subtitle?: string;
  description?: string[];
}

export const SolutionSection = ({
  services,
  title,
  subtitle,
  description,
}: ServiceTypeProps) => {
  const [currentActive, setCurrentActive] = useState(services[0]?.id);

  return (
    <section
      id="solution"
      className="di-w-full di-px-[20px] di-pt-[74px] di-pb-[37px] lg:di-h-[965px] lg:di-flex lg:di-pt-[100px] lg:di-pb-0"
    >
      <div className="di-w-full md:di-w-[1244px] md:di-mx-auto lg:di-flex lg:di-gap-[93px]">
        <div>
          <div className="di-mb-[12px] lg:di-mb-[61px] lg:di-mt-[32px]">
            <p className="di-text-neutral-900 di-text-base di-font-medium di-leading-[14.46px] lg:di-text-[32px] lg:di-leading-[28.93px] lg:di-mb-[16px]">
              {title}
            </p>
            <p className="di-text-primary-main di-text-2xl di-font-bold di-capitalize di-leading-normal lg:di-text-[64px] lg:di-leading-[57.86px]">
              {subtitle}
            </p>
          </div>

          <div className="di-text-black di-text-xs di-font-normal lg:di-text-xl">
            {description?.map((text) => (
              <p
                key={text}
                className="di-mb-[20px] di-leading-[15.6px] lg:di-mb-[10px] lg:di-leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:di-flex lg:di-flex-col lg:di-gap-[11px]">
          {services.map((value: ServiceType) => (
            <AccordionPanel
              key={value.id}
              label={value.title || ""}
              open={value.id === currentActive}
              toggleAble
              onToggle={() => {
                setCurrentActive(value.id);
              }}
            >
              <img
                src={value.image || ""}
                width={350}
                height={160}
                alt={value.title || ""}
                className="di-w-full lg:di-w-[590px]"
              />
            </AccordionPanel>
          ))}
        </div>
      </div>
    </section>
  );
};
