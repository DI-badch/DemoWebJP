import Image from "next/image";

interface PartnerType {
  name?: string | null;
  id: number;
  content?: string | null;
  image_url: string | null;
}

interface PartnerSectionProps {
  partners: PartnerType[];
}

export const PartnerSection = ({ partners }: PartnerSectionProps) => {
  return (
    <section id="partner" className="di-w-full di-px-[20px]">
      <div className="di-w-full md:di-w-[1244px] md:di-mx-auto di-pt-[24px] md:di-pt-[48px] di-pb-[25px] md:di-pb-[39px]">
        <div className="di-text-white di-mb-[34px]">
          <p className="di-text-neutral-900 di-text-base di-font-medium di-leading-[14.46px] md:di-text-[32px] md:di-leading-[28.93px] md:di-mb-[16px]">
            Khách hàng của chúng tôi
          </p>
          <p className="di-text-primary-main di-text-2xl di-font-bold di-capitalize di-leading-normal md:di-text-[64px] md:di-leading-[57.86px] md:di-mb-[31px]">
            Our customers
          </p>
        </div>

        <div className="di-w-full di-flex di-flex-wrap di-justify-center di-gap-6">
          {partners.map((e) => (
            <div
              key={e.id}
              className="di-flex di-justify-center di-items-center di-border di-shadow-md di-px-4 di-w-1/5 di-max-w-[calc(20%_-_1.5rem)]"
              style={{
                order: e.id,
              }}
            >
              <Image
                src={e.image_url || ""}
                alt={e.name || ""}
                width={70}
                height={60}
                className="md:di-h-[64px] md:di-w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
