/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import { fakeDataImageTechStack } from "@/data/_data";
import { TitleComponent } from "@di/components-ui";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TechStackComponent() {
  const [openStates, setOpenStates] = useState(
    fakeDataImageTechStack.map(() => false),
  );
  const toggleOpenState = (index: number) => {
    setOpenStates((prevStates) =>
      prevStates.map((isOpen, idx) => (idx === index ? !isOpen : isOpen)),
    );
  };
  useEffect(() => {
    toggleOpenState;
  }, [openStates]);
  return (
    <div className="lg:di-mt-60 di-mt-10 di-mb-5">
      <TitleComponent title="弊社が得意の技術" />
      <div className="sm:di-relative">
        <div className="sm:di-absolute di-h-full sm:di-flex sm:di-flex-row di-items-center di-justify-center di-w-full">
          {fakeDataImageTechStack.map((techData) => {
            const totalItems = techData.item.length;
            const totalCells = Math.ceil(totalItems / 3) * 3;
            const emptyCells = totalCells - totalItems;
            return (
              <div className="sm:di-basis-1/6" key={techData.id}>
                <div
                  className="di-border-b di-border-main-black sm:di-border-none font-lens di-font-medium di-flex sm:di-flex-row di-justify-center di-items-center sm:di-text-white di-text-black"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    toggleOpenState(techData.id);
                  }}
                >
                  <div className="di-flex-1 di-text-left sm:di-text-center lg:di-text-[28px] di-text-[16px] font-lens sm:di-text-white di-text-black">
                    {techData.title}
                  </div>
                  <ArrowUpRight
                    size={32}
                    className={`sm:di-hidden di-flex-shrink-0 di-cursor-pointer di-transition-all ${
                      openStates[techData.id] ? "di-rotate-180" : ""
                    }`}
                  />
                </div>

                {openStates[techData.id] ? (
                  <div
                    key={techData.id}
                    className="lg:di-hidden di-mt-2 di-grid di-grid-cols-3 di-auto-rows-[1fr]"
                  >
                    {techData.item.map((item) => (
                      <div
                        key={item.id}
                        className="di-p-4 di-border-[0.5px] di-border-main-border"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={120}
                          height={86}
                          className="di-object-cover di-w-full di-h-full scale-item-img"
                        />
                      </div>
                    ))}

                    {Array.from({ length: emptyCells }).map((_, emptyIndex) => (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={emptyIndex}
                        className="di-p-4 di-border-[0.5px] di-border-main-border"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <Image
          width={1792}
          className="di-hidden sm:di-block"
          height={270}
          alt="Background"
          src="/techs.png"
        />
      </div>
      <div className="di-hidden sm:di-grid sm:di-grid-cols-6 di-bg-white di-mb96- di-border-main-border di-border-[0.5px]">
        {fakeDataImageTechStack.map((techData) => (
          <div
            key={techData.id}
            className="di-grid di-grid-cols-1 di-grid-rows-1 di-auto-rows-[1fr]"
          >
            {techData.item.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="di-p-4 di-border-[0.5px] di-border-main-border di-flex justify-center di-items-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={86}
                  className="di-object-fill di-w-full di-h-full scale-item-img"
                />
              </div>
            ))}
            {techData.item.length > 3 && (
              <div className="di-border-[0.5px] di-border-main-border">
                <div className="di-p-4 di-grid sm:di-grid-cols-2 lg:di-grid-cols-3 di-gap-4">
                  {techData.item.slice(3).map((item) => (
                    <div
                      key={item.id}
                      className="di-overflow-hidden di-w-full di-h-full"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={70}
                        height={38}
                        className="di-w-full di-h-full di-object-cover scale-item-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
