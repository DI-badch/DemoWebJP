"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JpButton, TitleComponent } from "@di/components-ui";
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
    <div className="sm:di-bg-white sm:di-bg-opacity-50 di-w-full di-rounded-3xl di-p-4 ">
      <div className="di-flex di-z-10 sm:di-flex-row di-flex-col-reverse di-justify-between di-gap-4 di-w-full">
        <div className="di-flex-1 di-flex-col sm:di-basis-1/2">
          <div className="di-flex di-flex-col lg:di-flex-row lg:di-items-center">
            <TitleComponent title="私たちについて" />
            <div className="di-w-16 lg:di-h-[5px] di-h-[2px] di-bg-main-blue lg:di-bg-black di-mt-2 lg:di-ml-5" />
          </div>
          <div className="di-flex di-flex-col lg:di-mt-26 sm:di-mt-12 di-mt-10">
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
                <p className="di-text-main-black lg:di-text-lg di-mt-7 di-text-[12px]">
                  {currentData?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <JpButton variant="navigation" Icon={ArrowRight} className="di-mt-10">
            <p className="font-mplus di-text-[16px] di-font-bold">詳しく見る</p>
          </JpButton>
        </div>

        <div className="di-flex-1 di-basis-1/2 di-relative">
          <Image
            alt="Image Develop"
            src="/mask_group.png"
            width={981}
            height={783}
            className="di-max-h-[700px] di-w-[1000px] sm:di-h-[350px] "
          />
          <div className="di-absolute sm:di-top-12 di-top-9 di-right-0">
            <div className="di-w-full">
              <Image
                alt={currentData?.title || ""}
                src={currentData?.image || ""}
                width={720}
                height={620}
                className="di-rounded-tl-[44px] di-rounded-bl-3xl di-w-full di-max-h-[500px] xl:di-w-[800px] lg:di-max-w-[600px] md:di-max-w-[900px] sm:di-max-w-[300px]"
              />
            </div>
            <div className="sm:di-mt-6 di-py-3 di-flex sm:di-gap-12 di-gap-5">
              <JpButton Icon={ArrowLeft} onClick={handlePrevious} />
              <JpButton Icon={ArrowRight} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
