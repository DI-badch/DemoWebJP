import { FooterGroup } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterGroup> = {
  title: "Component Web VN/FooterGroup",
  component: FooterGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    children: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof FooterGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    heading: "Footer Heading",
    children: "Some footer content here.",
    className: "di-bg-gray-200 di-p-4 di-rounded-lg",
  },
};

// With Custom Class Example
export const WithCustomClass: Story = {
  args: {
    heading: "Custom Footer",
    children: "Custom content with more details.",
    className: "di-bg-blue-500 di-text-white di-p-6 di-rounded-xl",
  },
};
