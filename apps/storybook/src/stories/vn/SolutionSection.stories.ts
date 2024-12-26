import { SolutionSection } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SolutionSection> = {
  title: "Component Web VN/SolutionSection",
  component: SolutionSection,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    description: [{ control: "array" }],
    services: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof SolutionSection>;

export const Default: Story = {
  args: {
    title: "Dịch vụ",
    subtitle: "Solution",
    description: [
      "Data Impact cùng với công ty mẹ Headwaters, là đối tác chính thức của các tập đoàn hàng đầu thế giới như Microsoft, Sony, Nvidia cung cấp các giải pháp toàn diện giải quyết được các bài toán của khách hàng.",
      "Với đội ngũ nhân sự tốt nghiệp những trường Đại học hàng đầu, đã dành được nhiều giải trong các cuộc thi trên toàn thế giới, Data Impact tự tin có thể mang lại những giá trị vượt trội và đột phá.",
    ],
    services: [
      {
        id: 1,
        title: "Service 1",
        image: "https://via.placeholder.com/350x160",
      },
      {
        id: 2,
        title: "Service 2",
        image: "https://via.placeholder.com/350x160",
      },
      {
        id: 3,
        title: "Service 3",
        image: "https://via.placeholder.com/350x160",
      },
    ],
  },
};
