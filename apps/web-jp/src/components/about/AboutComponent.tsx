import Image from "next/image";
import { ImageHoverComponent, TitleComponent } from "@di/components-ui";

export default function AboutComponent() {
  return (
    <div>
      <div className="di-flex sm:di-flex-row di-flex-col di-mt-10 di-gap-4 di-w-full">
        <div className="di-basis-1/2">
          <div className="di-flex di-flex-col lg:di-flex-row lg:di-items-center di-items-start">
            <TitleComponent title="私たちについて" />
            <div className="di-w-16 lg:di-h-[5px] di-h-[2px] di-bg-main-blue lg:di-bg-black di-mt-2 lg:di-ml-5" />
          </div>
          <div className="di-flex di-flex-wrap lg:di-gap-5 di-gap-2 di-flex-col di-mt-2">
            <p className="di-text-main-black di-text-[12px] lg:di-text-lg">
              当社は、ベトナムに拠点を置き、データとAIを中心にした先端技術の研究開発に特化した企業です。親会社である株式会社ヘッドウォータースと連携し、Microsoft、Databrick、Snowflakeなどの世界的な企業と公式パートナーシップを結ぶことで、最新技術を活用したソリューションを提供しています。
            </p>
            <p className="di-text-main-black di-text-[12px] lg:di-text-lg">
              私たちは、親会社の豊かなノウハウを受け継ぎ、ベトナムの優れた人材リソースと技術的ケーパビリティーを一層強化することで、お客様に先進的で高品質、そして競争力のあるコストでテクノロジーソリューションを提供することを目指しています。
            </p>
            <p className="di-text-main-black di-text-[12px] lg:di-text-lg">
              私たちは、親会社の豊かなノウハウを受け継ぎ、ベトナムの優れた人材リソースと技術的ケーパビリティーを一層強化することで、お客様に先進的で高品質、そして競争力のあるコストでテクノロジーソリューションを提供することを目指しています。
            </p>
          </div>
        </div>

        <div className="di-basis-1/2 di-flex-row di-flex di-gap-4 di-justify-between di-min-w-96 di-flex-wrap sm:di-flex-nowrap">
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
      <div className="di-flex di-mt-4 sm:di-mt-8 di-gap-4  sm:di-flex-nowrap">
        <div className="di-flex-1 di-flex-row di-flex di-gap-4 di-min-w-96 di-flex-wrap sm:di-flex-nowrap">
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
          <div className="di-w-full scale-img ">
            <Image
              src="/about-1.png"
              width={880}
              height={480}
              alt="Image service"
              className="lg:di-w-[880px] scale-item-img di-h-full di-object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
