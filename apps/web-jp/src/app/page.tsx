import AboutComponent from "@/components/about/AboutComponent";
import CarouselComponent from "@/components/carousel/Carousel";
import DevelopComponent from "@/components/develop/DevelopComponent";
import TechStackComponent from "@/components/techstack/TechStackComponent";
import Image from "next/image";
import {
  NewsComponent,
  ServiceComponent,
  TitleComponent,
  MarqueeComponent,
  JpFooter,
} from "@di/components-ui";
import {
  fakeDataService,
  fakeNewsData,
  images,
  imagesMarquee,
  imagesMarquee1,
} from "@/data/_data";

export default function Home() {
  return (
    <main className="di-m-auto di-max-w-[2560px] di-flex">
      <div className="di-absolute di-w-full di-h-full">
        {images.map((src, index) => (
          <Image
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            width={2560}
            height={800}
            alt={`background-main-${src}`}
            src={src}
            quality={100}
            sizes="100vw"
            priority
            className="di-object-cover lg:di-h-max"
          />
        ))}
      </div>
      <div className="di-absolute di-font-mplus1 di-max-w-[2560px]">
        <CarouselComponent />
        <div
          className="di-fixed di-gap-5 di-bottom-0 di-bg-main-blue -di-right-[200px] di-z-50 di-py-3 di-px-5 di-rounded-l-full di-flex di-items-center di-transform
         di-transition-all di-duration-300 hover:di-translate-x-[-200px] hover:di-pr-5 di-font-medium di-text-2xl di-text-white"
        >
          <Image
            alt="Contact Icon"
            src="./contact.svg"
            width={48}
            height={48}
            className=""
          />
          会議を予約する
        </div>
        <div className="xl:di-mx-16 lg:di-mx-8 sm:di-mx-6 di-mx-3">
          <div className="sm:di-mt-32 di-mt-20 sm:di-mb-20 sm:di-mb-6 di-mb-8 di-flex di-items-center di-justify-center">
            <TitleComponent title="サービス" />
          </div>
          <div className="di-flex di-flex-col sm:di-gap-[30px] di-gap-10">
            {fakeDataService.map((item) => (
              <ServiceComponent
                key={item.id}
                reverse={item.reverse}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <AboutComponent />
          <MarqueeComponent
            title="取引実績"
            images={imagesMarquee}
            speed={120}
          />
          <DevelopComponent />
          <TechStackComponent />
          <div className="lg:di-my-16 di-my-4">
            <NewsComponent title="ニュース" newsData={fakeNewsData} />
          </div>
          {/* <div className="di-bg-white-opacity-develop di-shadow di-rounded-lg di-shadow-white">
            <MarqueeComponent
              title="バッジ"
              images={imagesMarquee1}
              speed={120}
              gradient={false}
            />
          </div> */}
        </div>
        <JpFooter />
      </div>
    </main>
  );
}
