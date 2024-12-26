import Image from "next/image";
import { TabsPanel } from "../TabsPanel/TabsPanel";

export interface AboutUsType {
  id: number;
  title: string | null;
  content: string | null;
}

export interface AboutUsTypeProps {
  aboutUses: AboutUsType[];
}

export const AboutUsSection = ({ aboutUses }: AboutUsTypeProps) => {
  return (
    <section
      id="about"
      className="di-w-full di-h-[580px] lg:di-h-[839px] di-relative 
           lg:di-flex lg:di-flex-col lg:di-justify-end lg:di-items-center 
           di-bg-gradient-to-b di-from-primary-main di-via-teal-800 di-to-primary-main di-backdrop-blur-[221px]"
    >
      <div
        className="di-w-[350px] di-h-[407px] lg:di-h-[725px] lg:di-max-w-[1244px] 
           di-absolute di-right-1/2 di-translate-x-1/2 di-top-[38px] di-z-30 
           lg:di-relative lg:di-w-full lg:di-right-0 lg:di-translate-x-0 lg:di-top-0 
           di-bg-white di-rounded-tr-[50px] di-rounded-tl-[50px]"
      >
        <div className="di-ml-[25px] di-mt-[18px] lg:di-mt-[120px] lg:di-ml-[29px]">
          <p className="di-text-neutral-900 di-text-base lg:di-text-[32px] lg:di-pb-[13px] di-font-medium di-leading-[14.46px]">
            Về chúng tôi
          </p>
          <p className="di-text-primary-main di-text-2xl di-font-bold di-capitalize di-leading-normal lg:di-text-[64px] lg:di-leading-[57.86px]">
            DATA IMPACT
          </p>
        </div>

        <Image
          src="/team-discuss.jpg"
          alt="About Us Image"
          width={328}
          height={198}
          className="di-absolute di-rounded-[7px] di-left-[6px] lg:di-left-[-52px] di-z-10 di-top-[74px] lg:di-top-[256px] lg:di-w-[649px] lg:di-h-[392px]"
        />
        <div className="di-w-[351px] di-h-[410px] di-bg-primary-main di-rounded-br-2xl lg:di-w-[683px] lg:di-h-[530px] lg:di-top-[109px] lg:di-translate-x-0 lg:di-rounded-tl-2xl lg:di-rounded-br-none lg:di-absolute lg:di-right-0 di-absolute di-right-1/2 di-translate-x-1/2 di-top-[177px]">
          <div className="di-mt-[108px] lg:di-mt-0">
            <TabsPanel items={aboutUses} />
          </div>
        </div>
      </div>
    </section>
  );
};
