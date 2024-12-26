import type { ReactNode } from "react";

export interface NavigationItemProps {
  children: ReactNode;
  className?: string;
}

export const NavigationItem = ({
  children,
  className,
}: NavigationItemProps) => {
  return (
    <div
      className={`${className ?? ""} di-font-semibold di-text-xl di-leading-7 di-hidden md:di-block`}
    >
      {children}
    </div>
  );
};
