import { TableOfContent } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableOfContent> = {
  title: "Component Web VN/TableOfContent",
  component: TableOfContent,
  tags: ["autodocs"],
  argTypes: {
    headings: {
      control: [],
      description:
        "Array of heading objects with id, text, and level properties",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableOfContent>;

export const Default: Story = {
  args: {
    headings: [
      { id: "section-1", text: "Introduction", level: 1 },
      { id: "section-2", text: "Main Content", level: 2 },
      { id: "section-3", text: "Conclusion", level: 3 },
    ],
  },
};
