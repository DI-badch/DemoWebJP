import { CareerArticle } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CareerArticle> = {
  title: "Component Web VN/CareerArticle",
  component: CareerArticle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    url: { control: "text" },
    image: { control: "text" },
  },
} satisfies Meta<typeof CareerArticle>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    title: "Kỹ sư phần mềm",
    description:
      "Cơ hội tham gia vào dự án phát triển sản phẩm công nghệ cao với đội ngũ chuyên nghiệp.",
    url: "/careers/software-engineer",
    image: "https://dataimpact.vn/images/job-sen.jpg",
  },
};
