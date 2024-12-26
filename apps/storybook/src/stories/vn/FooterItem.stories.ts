import { FooterItem } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterItem> = {
  title: "Component Web VN/FooterItem",
  component: FooterItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof FooterItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    children: "Some footer content here.",
  },
};

// With Custom Class Example
export const WithCustomClass: Story = {
  args: {
    children: "Custom content with more details.",
  },
};
