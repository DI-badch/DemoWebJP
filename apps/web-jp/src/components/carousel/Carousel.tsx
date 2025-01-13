"use client";

import { ArrowRight } from "lucide-react";
import type { CarouselApi } from "../ui/Carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
import Image from "next/image";
import { useState } from "react";
import { JpButton } from "@di/components-ui";
import { fakeImageCarousel } from "@/data/_data";

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <Carousel
      className="di-max-w-[2560px] di-max-h-screen clip-custom-mobile md:clip-custom sm:di-top-[92px] di-top-[74px]"
      opts={{
        containScroll: "trimSnaps",
        loop: true,
      }}
      setApi={(api: CarouselApi) => {
        if (api) {
          setCarouselApi(api);
          api.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
          });
        }
      }}
    >
      <CarouselContent>
        {fakeImageCarousel.map((item) => {
          const isCurrentText = item.src
            .toLowerCase()
            .includes("slide-03.webp");
          return (
            <CarouselItem key={item.id}>
              <div className="di-relative lg:di-h-[900px] di-h-[600px]">
                <Image
                  loading="lazy"
                  width={1920}
                  height={850}
                  className="di-w-full di-h-full di-object-cover"
                  src={item.src}
                  alt={item.alt || ""}
                />
                <div className="di-absolute lg:di-top-[25%] lg:di-left-[10%] md:di-top-[20%] sm:di-top-[10%] di-top-24 di-left-6 di-right-6 sm:di-right-auto lg:di-py-10 xl:di-py-20  sm:di-py-10 di-py-8 sm:di-rounded-[45px] di-rounded-3xl sm:di-rounded-2xl">
                  <p
                    className={`${isCurrentText ? "di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent" : "di-text-main-white"} di-font-medium lg:di-text-[48px] di-text-[40px] di-max-w-[650px] di-min-w-[400px]`}
                  >
                    2025年の技術トレンド予測 - 人工知能(AI)の未来
                  </p>
                  {/* <hr
                      className={`${isCurrentText ? "di-border-black" : "di-border-white"} sm:di-border-1 lg:di-border-2 sm:di-my-10 di-my-8 sm:di-w-80 di-w-60`}
                    />
                    <p
                      className={`${isCurrentText ? "di-text-black" : "di-text-main-white"} sm:di-text-[18px] sm:di-max-w-[500px] di-text-lg`}
                    >
                      お客様のビジネスを成功に導く、革新的なデジタルソリューションを提供いたします。
                    </p> */}
                  <JpButton
                    variant="navigation"
                    Icon={ArrowRight}
                    className="di-mt-10"
                  >
                    <p className="font-mplus di-text-[16px] di-font-bold">
                      詳しく見る
                    </p>
                  </JpButton>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="di-absolute di-hidden di-top-2/4 lg:di-flex di-w-full di-justify-between di-items-center di-px-16">
        <CarouselPrevious className="di-bg-white-opacity" />
        <CarouselNext className="di-bg-white-opacity" />
      </div>
      <div className="di-absolute di-bottom-40 lg:di-bottom-[100px] lg:di-left-1/2 di-transform lg:di--translate-x-1/2 di-flex di-gap-1 di-left-6">
        {fakeImageCarousel.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => {
              setActiveIndex(item.id);
              carouselApi?.scrollTo(item.id);
            }}
            className={`di-w-7 di-h-2 di-rounded-full di-bg-white ${
              activeIndex === item.id ? "di-bg-white" : "di-opacity-20"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
