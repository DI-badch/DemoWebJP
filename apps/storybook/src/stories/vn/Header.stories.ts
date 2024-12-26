import { Header } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  args: {
    items: [
      { title: "Tuyển Dụng", url: "/career" },
      { title: "Tech Blogs", url: "/blogs" },
      { title: "Về Chúng Tôi", url: "/about" },
    ],
  },
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    items: [
      { title: "Tuyển Dụng", url: "/career" },
      { title: "Tech Blogs", url: "/blogs" },
      { title: "Về Chúng Tôi", url: "/about" },
    ],
  },
};
