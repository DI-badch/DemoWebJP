import { NavigationItem } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavigationItem> = {
  title: "Component Web VN/NavigationItem",
  component: NavigationItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavigationItem>;

export const Default: Story = {
  args: {
    children: "Home",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "About",
    className: "di-text-blue-500",
  },
};
