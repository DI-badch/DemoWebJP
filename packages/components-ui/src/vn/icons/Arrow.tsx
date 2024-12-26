import type { IconProps } from "./types";

export const ArrowIcon = ({
  width = 17,
  height = 6,
  fill = "#2F80ED",
  ...rest
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...rest}
  >
    <path
      fill={fill}
      d="M17 3L12 0.113248L12 5.88675L17 3ZM4.37114e-08 3.5L12.5 3.5L12.5 2.5L-4.37114e-08 2.5L4.37114e-08 3.5Z"
    />
  </svg>
);
