import { HeadlineSection } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeadlineSection> = {
  title: "Component Web VN/HeadlineSection",
  component: HeadlineSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intros: { control: "text" },
  },
} satisfies Meta<typeof HeadlineSection>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    intros: {
      content:
        "Chúng tôi muốn tạo ra 1 môi trường nơi các kỹ sư Việt Nam làm chủ các công nghệ tiên tiến nhất. Qua đó biến những công nghệ khó thành những giải pháp hữu dụng giải quyết được những bài toán thực tế trong cuộc sống.",
    },
  },
};
