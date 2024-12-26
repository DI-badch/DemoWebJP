import { TitleComponent } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TitleComponent> = {
  title: "Component Web JP/TitleComponent",
  component: TitleComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof TitleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "サービス",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Tiêu đề tùy chỉnh",
  },
};
