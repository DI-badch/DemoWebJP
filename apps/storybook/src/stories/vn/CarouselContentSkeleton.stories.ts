import { CarouselContentSkeleton } from "@di/components-ui";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof CarouselContentSkeleton> = {
  title: "Component Web VN/CarouselContentSkeleton",
  component: CarouselContentSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CarouselContentSkeleton>;

export default meta;

export const Default = {
  args: {},
};
