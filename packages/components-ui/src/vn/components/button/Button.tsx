"use client";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "text" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Button = ({
  variant = "none",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) => (
  <button
    type="button"
    {...rest}
    className={`di-flex di-items-center di-justify-between di-whitespace-nowrap ${
      {
        contained:
          "di-bg-primary-main di-border-none di-text-white di-font-bold",
        outlined:
          "di-border di-border-primary-main di-text-primary-main di-font-bold",
        text: "",
        none: "",
      }[variant]
    } ${className}`}
  />
);
