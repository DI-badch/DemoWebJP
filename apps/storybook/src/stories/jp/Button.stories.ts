import { ArrowLeft, ArrowRight } from "lucide-react";
import { JpButton } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JpButton> = {
  title: "Component Web JP/Button",
  component: JpButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["default", "navigation"] },
    disabled: { control: "boolean" },
    Icon: { control: false },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof JpButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
    disabled: false,
    children: "Click me",
  },
};

export const Navigation: Story = {
  args: {
    size: "md",
    variant: "navigation",
    children: "詳しく見る",
    Icon: ArrowRight,
    className: "di-mt-10",
  },
};

export const Previous: Story = {
  args: {
    size: "md",
    variant: "default",
    disabled: false,
    Icon: ArrowLeft,
    onClick: () => console.log("Previous button clicked"),
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    variant: "default",
    disabled: true,
    children: "Disabled",
  },
};
