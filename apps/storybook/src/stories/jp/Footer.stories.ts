import { JpFooter } from "@di/components-ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JpFooter> = {
  title: "Component Web JP/JpFooter",
  component: JpFooter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultJpFooter: Story = {};
