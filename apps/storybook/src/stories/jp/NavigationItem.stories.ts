import { JpNavigationItem } from "@di/components-ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JpNavigationItem> = {
  title: "Component Web JP/JpNavigationItem",
  component: JpNavigationItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    title: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    title: "トップページ",
    className: "",
  },
};

export const CustomClassName: Story = {
  args: {
    href: "/about",
    title: "私たちについて",
    className: "di-text-blue-500 hover:di-underline",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    title: "外部リンク",
    className: "di-text-red-500 hover:di-underline",
  },
};
