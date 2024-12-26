import { Button } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Component Web VN/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Định nghĩa các kiểu dữ liệu cho các props của component nếu cần
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "none",
    size: "md",
    children: "Click me",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    size: "lg",
    children: "Contained Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    children: "Outlined Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "xs",
    children: "Text Button",
  },
};
