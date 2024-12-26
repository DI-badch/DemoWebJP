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
      className="di-max-w-[2560px] di-max-h-screen clip-custom-mobile md:clip-custom md:di-top-[92px] di-top-[74px]"
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
              <div className="di-relative md:di-h-auto di-h-[650px]">
                <Image
                  loading="lazy"
                  width={1920}
                  height={850}
                  className="di-w-full di-h-full di-object-cover"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="di-absolute md:di-top-[20%] di-top-16 md:di-left-52 di-left-3 di-right-3 md:di-right-auto di-bg-white di-bg-opacity-20 md:di-p-20 di-p-8 md:di-rounded-[45px] di-rounded-3xl">
                  <p
                    className={`${isCurrentText ? "di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent" : "di-text-main-white"} di-font-medium md:di-text-8xl di-text-6xl`}
                  >
                    データサイエンス
                  </p>
                  <hr
                    className={`${isCurrentText ? "di-border-black" : "di-border-white"} di-border-2 md:di-my-10 di-my-8 md:di-w-96 di-w-60`}
                  />
                  <p
                    className={`${isCurrentText ? "di-text-black" : "di-text-main-white"} md:di-w-96 di-text-lg`}
                  >
                    お客様のビジネスを成功に導く、革新的なデジタルソリューションを提供いたします。
                  </p>
                  <JpButton
                    variant="navigation"
                    Icon={ArrowRight}
                    className="di-mt-10"
                  >
                    <p className="font-mplus di-text-xl di-font-bold">
                      詳しく見る
                    </p>
                  </JpButton>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="di-absolute di-hidden di-top-2/4 md:di-flex di-w-full di-justify-between di-items-center di-px-16">
        <CarouselPrevious className="di-bg-white-opacity" />
        <CarouselNext className="di-bg-white-opacity" />
      </div>
      <div className="di-absolute di-bottom-20 md:di-left-1/2 di-transform md:di--translate-x-1/2 di-flex di-gap-2 di-left-3">
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
