import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "navigation";
  disabled?: boolean;
  Icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "default",
  children,
  disabled = false,
  className,
  Icon,
  ...props
}) => {
  const baseStyles =
    "di-pl-6 di-pr-2 di-py-1 lg:di-py-2 di-inline-flex di-items-center di-justify-center di-gap-6 di-transition-colors focus-visible:di-outline-none focus-visible:di-ring-2 focus-visible:di-ring-offset-2 di-rounded-full";

  const variantStyles = {
    default: "di-bg-main-blue",
    navigation: "di-bg-main-blue di-whitespace-nowrap",
  };

  return (
    <button
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      className={cn(
        children
          ? baseStyles
          : "di-border-main-white di-border-2 di-rounded-full",
        variantStyles[variant],
        disabled
          ? "di-cursor-not-allowed di-bg-main-disable di-text-main-gray di-border-2 di-border-main-disable"
          : variant != "navigation"
            ? "di-text-base di-group hover:di-text-main-blue di-border-2 di-border-main-blue di-text-white hover:di-bg-main-white"
            : "di-button",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {Icon ? (
        <div
          className={`${!children ? "di-border-transparent" : null} di-transition-all di-border-2 lg:di-p-2 di-p-1 di-rounded-full group-hover:di-border-main-blue ${disabled ? "di-border-main-gray" : null}`}
        >
          <Icon />
        </div>
      ) : null}
    </button>
  );
};
