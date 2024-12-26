import type { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`${className ?? ""} di-px-5 lg:di-px-0 di-mx-auto`}>
      {children}
    </div>
  );
};
