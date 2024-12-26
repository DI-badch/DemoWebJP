"use client";

import { useState } from "react";
import type { AboutUsType } from "../../..";

interface TabPanelProps {
  items: AboutUsType[];
}

export const TabsPanel = ({ items }: TabPanelProps) => {
  const [currentTab, setCurrentTab] = useState<AboutUsType>({
    id: 0,
    title: "",
    content: "",
  });

  return (
    <div className="di-flex di-flex-col lg:di-bg-white lg:di-items-center">
      <div className="di-bg-primary-main di-rounded-t-[20px] di-pt-6 di-pl-[7px] di-text-white di-text-xs di-font-bold di-leading-[12.83px] lg:di-w-[547px] lg:di-h-[48px]">
        <ul className="di-w-4/5 lg:di-w-[457px] di-flex di-justify-between lg:di-mx-auto di-divide-x-2">
          {items.map((e) => (
            <button
              type="button"
              key={e.id}
              onClick={() => {
                setCurrentTab(e);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setCurrentTab(e);
                }
              }}
              className="di-grow di-text-center"
            >
              <div
                className={`${e.id === currentTab.id ? "di-opacity-100" : "di-opacity-50"} di-min-w-[78px] lg:di-text-xl di-font-bold di-leading-snug di-uppercase`}
              >
                {e.title || ""}
              </div>
            </button>
          ))}
        </ul>
      </div>
      <div className="lg:di-w-[683px] lg:di-h-[530px] di-bg-primary-main di-text-white di-rounded-tl-[50px] di-pl-[23px] lg:di-pl-[84px] lg:di-pr-[57px] di-pt-[18px] lg:di-pt-[99px]">
        <p className="di-text-[34px] md:di-text-[50px] di-font-bold di-leading-[37.54px] di-mb-[10px] lg:di-mb-7 di-uppercase">
          {currentTab.title}
        </p>
        <div className="di-text-white di-text-xs lg:di-text-xl di-font-normal di-leading-[15.6px] lg:di-leading-[26px] di-pr-[30px]">
          <p>{currentTab.content}</p>
        </div>
      </div>
    </div>
  );
};
