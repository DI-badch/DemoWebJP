"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageHoverComponentProps {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt: string;
  mainText: string;
  hoverText: string;
}

export function ImageHoverComponent({
  imageSrc,
  imageAlt,
  iconSrc,
  iconAlt,
  mainText,
  hoverText,
}: ImageHoverComponentProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="di-relative di-overflow-hidden di-rounded-3xl di-cursor-pointer sm:di-max-w-[424px] di-w-full di-min-h-[300px]"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
      onBlur={() => {
        setIsHovered(false);
      }}
      tabIndex={0}
      role="button"
      aria-label="Interactive image with text transition"
    >
      <Image
        src={imageSrc}
        width={300}
        height={400}
        alt={imageAlt}
        className="di-h-full di-w-full di-object-cover di-rounded-3xl"
      />
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -50 : 0,
          filter: isHovered ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.2 }}
        className="di-absolute di-inset-0 di-flex di-gap-2 di-flex-col di-justify-center di-items-center di-text-white di-bg-black di-bg-opacity-5"
      >
        <Image src={iconSrc} alt={iconAlt} width={80} height={80} />
        <p className="di-text-center di-font-mplus1 di-font-medium lg:di-text-4xl sm:di-text-[12px] di-px-[45px]">
          {mainText}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 50,
        }}
        transition={{ duration: 0.2 }}
        className="di-absolute di-inset-0 di-flex di-flex-col di-justify-center di-items-center di-text-white di-w-full di-bg-black di-bg-opacity-10"
      >
        <p className="lg:di-text-lg sm:di-text-[12px] di-text-center di-px-6 di-py-4">
          {hoverText}
        </p>
      </motion.div>
    </div>
  );
}
