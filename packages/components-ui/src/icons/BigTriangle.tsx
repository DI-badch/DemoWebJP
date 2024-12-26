import type { IconProps } from "./types";

export const BigTriangleIcon = ({ fill }: IconProps) => {
  return (
    <svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 6L10 11.7735V0.226497L0 6ZM10 5H9V7H10V5Z" fill={fill} />
    </svg>
  );
};
