import type { ReactNode } from "react";

export interface FooterGroupProps {
  children: ReactNode;
  heading?: ReactNode;
  className?: string;
}

export const FooterGroup = ({
  heading,
  children,
  className,
}: FooterGroupProps) => {
  return (
    <div className={className}>
      <p className="di-font-bold di-text-[21px] di-leading-[29px] di-mb-[5px] md:di-text-2xl md:di-leading-[33.60px]">
        {heading}
      </p>
      <div className="di-font-medium di-text-xs di-leading-[18px] md:di-text-base">
        {children}
      </div>
    </div>
  );
};
