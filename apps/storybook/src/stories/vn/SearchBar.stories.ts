import { SearchBar } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
  title: "Component Web VN/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    locations: { control: "object" },
    categories: { control: "object" },
    onSubmit: { action: "submitted" },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    locations: [
      { slug: "ha-noi", title: "Hà Nội" },
      { slug: "ho-chi-minh", title: "Hồ Chí Minh" },
      { slug: "da-nang", title: "Đà Nẵng" },
    ],
    categories: [
      { slug: "it", title: "Công nghệ thông tin" },
      { slug: "marketing", title: "Marketing" },
      { slug: "finance", title: "Tài chính" },
    ],
  },
};
