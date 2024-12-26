import { Wrapper } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Wrapper> = {
  title: "Component Web VN/Wrapper",
  component: Wrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a Wrapper component with default content.",
    className: "di-bg-primary-main di-text-red",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "This Wrapper has a custom class applied.",
    className: "di-bg-primary-secondary di-text-black",
  },
};
