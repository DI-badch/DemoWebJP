import type { IconProps } from "./types";

export const TriangleIcon = ({
  width = 5,
  height = 7,
  fill = "#2F80ED",
  ...rest
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <path fill={fill} d="M0 3.5L5 6.38675L5 0.613249L0 3.5Z" />
  </svg>
);
