"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { TriangleIcon } from "../../icons/Triangle";
import { BigTriangleIcon } from "../../icons/BigTriangle";
import { ArrowIcon } from "../../icons/Arrow";
import { BigArrowIcon } from "../../icons/BigArrow";

export interface AccordionPanelProps {
  label: string;
  children?: ReactNode;
  open?: boolean;
  contentPosition?: "top" | "bottom";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  onToggle?: () => void;
  toggleAble?: boolean;
}

export const AccordionPanel = ({
  label,
  children,
  open,
  contentPosition = "bottom",
  className,
  onToggle,
  toggleAble,
}: AccordionPanelProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(open));
  const isMobile = false;

  useEffect(() => {
    setIsOpen(Boolean(open));
  }, [open]);

  return (
    <div className={`md:di-w-[590px] ${className}`}>
      {contentPosition === "top" && (
        <div className={`di-${isOpen ? "block" : "hidden"}`}>{children}</div>
      )}
      <Button
        variant="outlined"
        onMouseOver={() => {
          setIsOpen(toggleAble ? Boolean(open) : true);
          onToggle && onToggle();
        }}
        onMouseOut={() => {
          setIsOpen(toggleAble ? Boolean(open) : false);
          onToggle && onToggle();
        }}
        className={`
          di-transition di-w-full hover:di-bg-[#0a9cf7] hover:di-text-white di-duration-500
          di-text-base di-font-bold di-leading-[14.46px]
          di-h-[45px] di-px-[17px] di-py-[16px]
          ${isOpen ? "di-bg-primary-main di-text-white" : ""}
          lg:di-h-[75px] lg:di-text-2xl lg:di-font-bold lg:di-leading-snug
        `}
      >
        {label}

        {isOpen ? (
          isMobile ? (
            <TriangleIcon
              fill="#fff"
              className="di-transition di-duration-500 hover:di-text-white"
              width={6}
              height={6}
            />
          ) : (
            <BigTriangleIcon
              fill="#fff"
              className="di-transition di-duration-500 hover:di-text-white"
            />
          )
        ) : isMobile ? (
          <ArrowIcon fill="#2f80ed" />
        ) : (
          <BigArrowIcon fill="#2f80ed" />
        )}
      </Button>
      {contentPosition === "bottom" && (
        <div className={`di-${isOpen ? "block" : "hidden"}`}>{children}</div>
      )}
    </div>
  );
};
