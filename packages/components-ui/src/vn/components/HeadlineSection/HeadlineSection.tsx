import Image from "next/image";

interface HeadlineSectionProps {
  intros: {
    content: string;
  };
}

export const HeadlineSection = ({ intros }: HeadlineSectionProps) => {
  return (
    <section className="di-pb-5 di-px-5 md:di-pb-0 md:di-w-[1244px] md:di-mx-auto di-relative">
      <Image
        src="/pattern-1.svg"
        width={786}
        height={746}
        alt="Robot"
        className="di-hidden md:di-block md:di-absolute md:di-right-[-162px] md:di-top-[-275px] di-z-[-1]"
      />
      <Image
        src="/robot.png"
        alt="Robot"
        height={645}
        width={500}
        className="di-hidden md:di-block md:di-absolute md:di-right-[-122px] md:di-bottom-0 di-z-[-1]"
      />
      <div className="md:di-w-[660px] md:di-mb-[195px] md:di-ml-5">
        <h1 className="di-font-bold di-font-primary di-text-[34px] md:di-text-[64px] di-leading-[41px] di-mb-[12px] md:di-leading-[77.45px]">
          <span className="di-uppercase di-text-primary-main">Data Impact</span>{" "}
          NƠI
          <br />
          <span className="di-whitespace-nowrap">TÀI NĂNG TOẢ SÁNG</span>
        </h1>
        <p className="di-text-zinc-600 di-text-xs di-font-normal di-leading-none di-mb-[15px] md:di-text-xl md:di-leading-relaxed">
          {intros.content ||
            "Chúng tôi muốn tạo ra 1 môi trường nơi các kỹ sư Việt Nam làm chủ các công nghệ tiên tiến nhất. Qua đó biến những công nghệ khó thành những giải pháp hữu dụng giải quyết được những bài toán thực tế trong cuộc sống."}
        </p>
        <div className="di-w-full di-flex di-justify-end">
          <div className="di-border-l-2 di-border-primary-base di-pl-[11px]">
            <p className="di-text-stone-500 di-text-[8px] di-font-medium di-italic md:di-text-base">
              DATA IMPACT CEO
            </p>
            <p className="di-text-primary-main di-text-sm di-font-bold md:di-text-2xl">
              Đặng Quang Duy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
