import Image from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";
import { TitleComponent } from "@di/components-ui";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MarqueeComponentProps {
  title: string;
  images: ImageProps[];
  speed?: number;
  gradient?: boolean;
}

export const MarqueeComponent: React.FC<MarqueeComponentProps> = ({
  title,
  images,
  speed = 100,
  gradient = true,
}) => {
  return (
    <div className="di-mb-20">
      <div className="md:di-mt-28 di-mt-16 di-flex di-items-center di-justify-center">
        <TitleComponent title={title} />
      </div>
      <Marquee speed={speed} gradient={gradient} pauseOnHover>
        <div className="di-flex md:di-gap-8 di-gap-4 md:di-py-12 di-py-5">
          {images.map((image, index) => (
            <Image
              key={index}
              width={image.width}
              height={image.height}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
