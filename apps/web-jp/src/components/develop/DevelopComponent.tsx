"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JpButton } from "@di/components-ui";
import { dataFake } from "@/data/_data";

export default function DevelopComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = dataFake[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataFake.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataFake.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="md:di-bg-white md:di-bg-opacity-50 di-w-full di-rounded-3xl">
      <div className="lg:di-p-12">
        <div className="di-flex di-z-10 di-flex-wrap md:di-flex-row di-flex-col-reverse di-justify-between md:di-gap-24 di-gap-4">
          <div className="di-flex-1 di-flex-col">
            <div className="md:di-flex di-hidden md:di-items-center">
              <h1 className="di-font-bold di-whitespace-nowrap di-text-[64px] di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent">
                開発事例
              </h1>
              <hr className="di-h-[8px] di-bg-main-blue md:di-bg-black di-w-full di-max-w-20 di-mt-2 di-ml-7 di-hidden md:di-block" />
            </div>
            <div className="di-flex di-flex-col md:di-mt-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentData?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="di-text-[32px] di-font-medium">
                    {currentData?.title}
                  </p>
                  <p className="di-text-main-black di-text-lg di-mt-7">
                    {currentData?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <JpButton
              variant="navigation"
              Icon={ArrowRight}
              className="di-mt-10"
            >
              <p className="font-mplus di-text-xl di-font-bold">詳しく見る</p>
            </JpButton>
          </div>

          <div className="di-flex-1 md:di-min-w-[506px]">
            <div className="md:di-hidden">
              <h1 className="di-font-bold di-whitespace-nowrap di-text-[64px] di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent">
                開発事例
              </h1>
              <hr className="di-h-[3px] di-bg-main-blue di-w-full di-max-w-52 di-self-end di-mb-4 md:di-ml-7 md:di-block" />
            </div>
            <div className="di-relative">
              <Image
                alt="Image Develop"
                src="/mask_group.png"
                width={981}
                height={783}
                className="di-max-h-[700px]"
              />
              <div className="di-absolute md:di-top-12 di-top-9 md:di-left-12 di-left-6">
                <div className="di-w-full">
                  <Image
                    alt={currentData?.title || ""}
                    src={currentData?.image || ""}
                    width={720}
                    height={620}
                    className=" di-rounded-tl-[44px] di-rounded-bl-3xl di-w-full"
                  />
                </div>
                <div className="md:di-mt-6 di-py-3 di-flex md:di-gap-12 di-gap-5">
                  <JpButton Icon={ArrowLeft} onClick={handlePrevious} />
                  <JpButton Icon={ArrowRight} onClick={handleNext} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
