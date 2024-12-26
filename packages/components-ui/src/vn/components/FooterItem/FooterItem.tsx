import type { ReactNode } from "react";

export interface FooterItemProps {
  children: ReactNode;
}

export const FooterItem = ({ children }: FooterItemProps) => {
  return <p className="di-mb-[10px]">{children}</p>;
};
