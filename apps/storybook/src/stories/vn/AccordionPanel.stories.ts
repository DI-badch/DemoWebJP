import type { Meta, StoryObj } from "@storybook/react";
import { AccordionPanel } from "@di/components-ui";

const meta: Meta<typeof AccordionPanel> = {
  title: "Component Web VN/AccordionPanel",
  component: AccordionPanel,
  argTypes: {
    label: { control: "text" },
    open: { control: "boolean" },
    contentPosition: {
      control: "radio",
      options: ["top", "bottom"],
    },
    toggleAble: { control: "boolean" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    className: { control: "text" },
    onToggle: { action: "toggled" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AccordionPanel>;

export const Default: Story = {
  args: {
    label: "Click to Toggle",
    children: "",
    open: false,
    contentPosition: "bottom",
    toggleAble: true,
    className: "",
  },
};

export const OpenByDefault: Story = {
  args: {
    ...Default.args,
    open: true,
  },
};

export const TopContent: Story = {
  args: {
    ...Default.args,
    contentPosition: "top",
  },
};
