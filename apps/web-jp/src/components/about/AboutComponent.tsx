import Image from "next/image";
import { ImageHoverComponent, TitleComponent } from "@di/components-ui";

export default function AboutComponent() {
  return (
    <div>
      <div className="di-flex di-flex-wrap di-justify-between md:di-gap-24 di-gap-4 md:di-mt-32 di-mt-16">
        <div className="di-flex-1 di-flex-col">
          <div className="md:di-flex-row di-flex di-flex-col md:di-items-center">
            <TitleComponent title="私たちについて" />
            <hr className="md:di-h-[8px] di-h-[3px] di-bg-main-blue md:di-bg-black di-w-full md:di-ml-7 di-mt-2 di-max-w-20" />
          </div>
          <div className="di-flex di-gap-5 di-flex-col di-mt-11 di-mb-8">
            <p className="di-text-main-black di-text-lg">
              当社は、ベトナムに拠点を置き、データとAIを中心にした先端技術の研究開発に特化した企業です。親会社である株式会社ヘッドウォータースと連携し、Microsoft、Databrick、Snowflakeなどの世界的な企業と公式パートナーシップを結ぶことで、最新技術を活用したソリューションを提供しています。
            </p>
            <p className="di-text-main-black di-text-lg">
              私たちは、親会社の豊かなノウハウを受け継ぎ、ベトナムの優れた人材リソースと技術的ケーパビリティーを一層強化することで、お客様に先進的で高品質、そして競争力のあるコストでテクノロジーソリューションを提供することを目指しています。
            </p>
            <p className="di-text-main-black di-text-lg">
              私たちのチームは、各自の革新的なアプローチと専門知識を活かし、ビジネスの成長を支える信頼できるパートナーとして、常に最前線での挑戦を続けます。お客様と共に、持続可能な未来を全力で築いていくことを約束します。
            </p>
          </div>
        </div>
        <div className="di-flex-1 di-flex-row di-flex di-gap-4 md:di-gap-8 di-min-w-96 di-flex-wrap md:di-flex-nowrap">
          <ImageHoverComponent
            imageSrc="/about.webp"
            imageAlt="Image service"
            iconSrc="/icon.svg"
            iconAlt="add_rounded"
            mainText="包括的な技術ソリューション"
            hoverText="当社は、データプラットフォームの構築からデータ分析、さらには可視化や管理アプリの実装に至るまで、幅広い技術ソリューションを提供しています。お客様のニーズに応じた総合的なアプローチで、ビジネスの成長を支援します。"
          />
          <ImageHoverComponent
            imageSrc="/about.webp"
            imageAlt="Image service"
            iconSrc="/icon.svg"
            iconAlt="add_rounded"
            mainText="包括的な技術ソリューション"
            hoverText="当社は、データプラットフォームの構築からデータ分析、さらには可視化や管理アプリの実装に至るまで、幅広い技術ソリューションを提供しています。お客様のニーズに応じた総合的なアプローチで、ビジネスの成長を支援します。"
          />
        </div>
      </div>
      <div className="di-flex di-mt-4 md:di-mt-8 di-gap-4 md:di-gap-8 di-flex-wrap">
        <div className="di-flex-1 di-flex-row di-flex di-gap-4 md:di-gap-8 di-min-w-96 di-flex-wrap md:di-flex-nowrap">
          <ImageHoverComponent
            imageSrc="/about.webp"
            imageAlt="Image service"
            iconSrc="/icon.svg"
            iconAlt="add_rounded"
            mainText="包括的な技術ソリューション"
            hoverText="当社は、データプラットフォームの構築からデータ分析、さらには可視化や管理アプリの実装に至るまで、幅広い技術ソリューションを提供しています。お客様のニーズに応じた総合的なアプローチで、ビジネスの成長を支援します。"
          />
          <ImageHoverComponent
            imageSrc="/about.webp"
            imageAlt="Image service"
            iconSrc="/icon.svg"
            iconAlt="add_rounded"
            mainText="包括的な技術ソリューション"
            hoverText="当社は、データプラットフォームの構築からデータ分析、さらには可視化や管理アプリの実装に至るまで、幅広い技術ソリューションを提供しています。お客様のニーズに応じた総合的なアプローチで、ビジネスの成長を支援します。"
          />
        </div>
        <div className="di-flex-1 di-min-w-96 scale-img">
          <Image
            src="/about-1.png"
            width={880}
            height={480}
            alt="Image service"
            className="di-w-[880px] scale-item-img"
          />
        </div>
      </div>
    </div>
  );
}
