import type { IconProps } from "./types";

export const DropdownMenuIcon = ({
  width = 24,
  height = 24,
  fill = "none",
  ...rest
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    {...rest}
  >
    <path fill="#000" d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
  </svg>
);
